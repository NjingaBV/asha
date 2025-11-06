import type { StorybookConfig } from '@storybook/svelte-vite';
import tailwindcss from '@tailwindcss/vite';

const config: StorybookConfig = {
  stories: [
    "../src/stories/*.mdx",
    "../src/stories/*.stories.@(js|ts|svelte)"
  ],
  addons: [
    "@storybook/addon-svelte-csf",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y"
  ],
  framework: {
      name: '@storybook/svelte-vite',
      options: {}
  },
  core: {
      builder: '@storybook/builder-vite'
  },
  async viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(tailwindcss());
    return config;
  },
};
export default config;