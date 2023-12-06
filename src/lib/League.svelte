<script lang="ts">
	export let league: LeagueData;
</script>

<a href="/leagues/{league.id}">
	<div class="league_grid bg-surface-700 my-3 p-2 rounded-md shadow-sm shadow-black">
		<img src={league.ci} alt="league profile" />
		<div class="p-3 w-full">
			<p class="col-span-6 text-md font-semibold">{league.name}</p>
			<div class="league_data_grid w-full mt-2">
				<p class="text-gray-300 text-sm text-right">{league.me.placement}</p>
				<p class="text-gray-300 text-sm text-right">{league.me.points.toLocaleString('de-DE')}</p>
				<p class="text-gray-300 text-sm text-right">{league.me.budget.toLocaleString('de-DE')}</p>
				<p class="text-gray-400 text-xs text-right">Rank</p>
				<p class="text-gray-400 text-xs text-right">Points</p>
				<p class="text-gray-400 text-xs text-right">Budget</p>
			</div>
		</div>
	</div>
</a>

<style>
	.league_grid {
		display: grid;
		grid-template-columns: 90px 1fr;
		grid-template-rows: 90px;
		place-items: start;
		align-items: center;
	}

	.league_data_grid {
		display: grid;
		grid-template-rows: repeat(2, minmax(0, 1fr));
		grid-template-columns: 1fr 2fr 3fr;
		align-items: end;
	}
</style>
