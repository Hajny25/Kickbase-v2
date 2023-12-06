<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	import '../app.css';
</script>

<header class="flex justify-between w-full items-center bg-surface-700">
	<div class="flex items-center">
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Kickbase_Logo_2023.svg"
			alt="Kickbase Logo"
			class="bg-white m-5 w-10 h-10 p-2 sm:w-20 sm:h-20 sm:p-3 rounded-full"
		/>
		<a href="/" class="inline text-gray-50 text-xl sm:text-5xl font-extrabold">Kickbase v2</a>
	</div>
	{#if !$page.url.pathname.startsWith('/login')}
		<form class="mx-5" action="/logout" method="POST" use:enhance>
			<button
				class="bg-primary-500 hover:bg-primary-700 text-black font-bold py-2 px-4 rounded"
				type="submit">Log out</button
			>
		</form>
	{/if}
</header>

<slot />
