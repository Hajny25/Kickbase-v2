<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="flex flex-col items-center">
	<div class="flex flex-col justify-center w-full max-w-xs bg-surface-700 rounded p-5 my-20">
		<h2 class="text-center text-gray-200 text-3xl font-bold my-5">Login</h2>

		<form method="POST">
			<div>
				<label class="block mb-2 text-gray-300" for="username">Username</label>
				<input
					class="w-full p-2 mb-6 text-gray-200 border-b-2 border-primary-500 outline-none bg-surface-500 focus:transition-opacity"
					type="text"
					name="username"
				/>
			</div>

			<div>
				<label class="block mb-2 text-gray-300" for="password">Password</label>
				<input
					class="w-full p-2 mb-6 text-gray-200 border-b-2 border-primary-500 outline-none bg-surface-500 focus:transition-opacity"
					type="password"
					name="password"
				/>
			</div>

			{#if form?.invalid}
				<p class="error">Username and password is required.</p>
			{/if}

			{#if form?.credentials}
				<p class="error">You have entered the wrong credentials.</p>
			{/if}

			<button
				class="w-full bg-primary-600 hover:bg-primary-700 text-black font-bold py-2 px-4 mb-6 rounded"
				type="submit">Log in</button
			>
		</form>
	</div>
</div>
