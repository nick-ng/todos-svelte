<script lang="ts">
	import { settingsStore } from '$lib/settings-store';
</script>

<div>
	<table class="basis-prose my-2 lg:my-4">
		<tbody>
			<tr>
				<td>URL</td>
				<td><input class="w-full" type="text" bind:value={$settingsStore.apiUrl} /></td>
			</tr>
			<tr>
				<td>Token</td>
				<td><input class="w-full" type="password" bind:value={$settingsStore.apiToken} /></td>
			</tr>
		</tbody>
	</table>
	<a href="/">Home</a>
</div>
