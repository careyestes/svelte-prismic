<script context="module">
	import Client from '../../../utils/client';
	import PrismicDom from 'prismic-dom';

	export async function load({ page }) {
		const { uid } = page.params;
		const document = await Client.getByUID('Accounts', uid);
		return {
			props: {
				document
			}
		};
	}
</script>

<script>
	export let document;
</script>

<main>
	<div class="container">
		<div class="text">
			{@html PrismicDom.RichText.asHtml(document.data.name)}
		</div>
	</div>
</main>

<style>
	
</style>