<script lang="ts">
	import { onDestroy } from 'svelte';
	import Player from '$lib/Player.svelte';
	import { lastSelectedUser } from '../../../stores.js';
	import { goto } from '$app/navigation';

	export let data;

	$lastSelectedUser = $lastSelectedUser ? $lastSelectedUser : data.id ?? '';
	let watchedPlayers: Map<String, PlayerData[]> = new Map<String, PlayerData[]>();
	data.users.forEach((element: UserOverviewData) => {
		watchedPlayers.set(element.id, element.pl);
	});
	let currentAdress: string = '0';

	$: totalPoints = currentPlayers.reduce((sum, a) => sum + a.t, 0);
	$: currentPlayers = watchedPlayers.get($lastSelectedUser) || [];
	$: currentPlayers.sort((a, b) => b['t'] - a['t']);

	setTimeout(() => {
		fetchUpdates();
	}, 0);

	let visible = true;
	onDestroy(() => (visible = false));

	async function fetchUpdates() {
		if (visible) {
			console.log('FO', currentAdress);
			const r = await fetch(
				`https://pubsub-1.pubnub.com/subscribe/${data.pub.sub}/${data.pub.scn}/0/${currentAdress}`
			);
			const json: PubUpdateData = await r.json();
			const update = json[0];
			if (update) {
				handleUpdate(update);
			}
			currentAdress = json[1];
			setTimeout(() => {
				fetchUpdates();
			}, 0);
		} else {
			console.log('SO');
		}
	}

	function handleUpdate(update: { it: EventData[] }[]) {
		update.forEach((block) => {
			if (!block.hasOwnProperty('it')) {
				return;
			}
			block['it'].forEach((element) => {
				watchedPlayers.forEach((userPlayers, key) => {
					userPlayers.forEach((player, i) => {
						if (player['id'] == element['pid']) {
							player['t'] += element['p'];
							player['pointsDiff'] = element['p'];
							userPlayers[i] = player;
							console.log('player', userPlayers[i]);
						}
					});
					watchedPlayers.set(key, userPlayers);
				});
				watchedPlayers = watchedPlayers;
			});
		});
	}
</script>

<div class="flex justify-center bg-surface-900">
	<div class="flex flex-col max-w-[500px] my-6 w-full px-3">
		<select
			bind:value={data.leagueId}
			on:change={() => goto(data.leagueId)}
			class="self-center text-center max-w-fit bg-inherit underline rounded-sm"
		>
			{#each data.leagues as league}
				<option value={league.id}>{league.name}</option>
			{/each}
		</select>
		<select bind:value={$lastSelectedUser} class="w-[150px] bg-surface-600 rounded-sm py-1 mt-5">
			{#each data.users as user}
				<option value={user.id}>{user.n}</option>
			{/each}
		</select>

		<p class="text-right text-gray-200 font-bold">Total: {totalPoints}</p>
		{#each currentPlayers as player}
			<Player {player}></Player>
		{/each}
	</div>
</div>
