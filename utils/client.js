import Prismic from '@prismicio/client';
const apiEndpoint = 'https://cedesign-svelte-test.prismic.io/api/v2';
const Client = Prismic.client(apiEndpoint);

export default Client;