<script context="module">
	import Client from './../../utils/client';
	import PrismicDom from 'prismic-dom';

	export async function load() {
		const document = await Client.query('');
		return {
			props: {
				document,
			}
		};
	}
</script>

<script>
	export let document;
	export let results = document.results;
</script>

<main>
	<!-- <pre>{ JSON.stringify(results, null, 2) }</pre> -->
	<ul>
		{#each results as account}
			<li>{ PrismicDom.RichText.asText(account.data.last_name) }</li>
		{/each}
	</ul>
		
</main>

<style>

</style>