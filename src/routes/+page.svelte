<script lang="ts">
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import League from '$lib/League.svelte';

	export let data;

	if (browser && data.leagues.length == 1) {
		goto(`/leagues/${data.leagues[0].id}`);
	}
</script>

<div class="flex justify-center">
	<div class="max-w-[400px] m-3 w-full">
		<h2 class="text-lg font-bold text-center">Choose a league:</h2>
		<div>
			{#each data.leagues as league}
				<League {league}></League>
			{/each}
		</div>
	</div>
</div>
