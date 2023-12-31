import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/databend-logos/',
  publicPath: '/databend-logos/',
  themeConfig: {
    prefersColor: {
      switch: false
    },
    name: '',
    footer: `<div>Copyright © ${new Date().getFullYear()} | <a href="https://www.databend.com" target="_blank">Databend Cloud</a></div>`,
    socialLinks: {
      github: 'https://github.com/databendcloud/databend-logos',
      twitter: 'https://twitter.com/DatabendLabs'
    },
  },
  logo: '/databend-logos/logo.svg',
  favicons: [
    '/databend-logos/favicon.svg'
  ]
  
});
