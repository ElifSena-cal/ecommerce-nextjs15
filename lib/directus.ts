import { createDirectus, rest } from '@directus/sdk';

const directus = createDirectus('').with(
  rest({
    onRequest: (options) => ({ ...options, cache: 'no-store' }),
  })
);

export default directus;
