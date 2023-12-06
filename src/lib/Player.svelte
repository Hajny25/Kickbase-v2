<script lang="ts">
	import { page } from '$app/stores';
	export let player: PlayerData;

	$: pointsDiff = player.pointsDiff > 0 ? `+${player.pointsDiff}` : player.pointsDiff ?? '';
	let name = player.fn ? `${player.fn} ${player.n}` : player.n;
	const positions = ['Torwart', 'Abwehr', 'Mittelfeld', 'Angriff'];
</script>

<a href="{$page.url.href}/player/{player.id}">
	<div class="custom_grid bg-surface-700 py-2 pl-3 my-1 rounded-md shadow-md shadow-black">
		<img
			src="https://kickbase.b-cdn.net/pool/playersbig/{player.id}.png"
			alt={name}
			class="bg-surface-500 rounded object-cover h-full w-[90px] m-auto"
		/>
		<div class="grid grid-rows-3 place-self-start px-3">
			<p>{player.fn ?? ''}</p>
			<p class="sm:text-lg text-md font-semibold text-gray-200">
				{player.n}<span class="sm:text-md text-sm italic text-gray-400 m-2">#{player.nr}</span>
			</p>
			<p class="text-gray-200">{positions[player.p - 1]}</p>
		</div>
		<p class="text-xl font-bold text-gray-200">{player.t}</p>
		<p class="text-md text-gray-300 text-right">{pointsDiff}</p>
	</div>
</a>

<style>
	.custom_grid {
		display: grid;
		grid-template-columns: 90px 3fr 1fr 1fr;
		grid-template-rows: 80px;
		place-items: center;
		align-items: center;
	}
</style>
