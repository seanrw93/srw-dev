import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, isSsrBuild }) => ({
  plugins: [
    react(),
    // Inject <!--ssr-head--> placeholder into index.html at build time
    // so the prerender script knows where to splice in per-route helmet tags.
    !isSsrBuild && {
      name: 'inject-ssr-head-placeholder',
      transformIndexHtml(html: string) {
        return html.replace('</head>', '<!--ssr-head-->\n  </head>')
      },
    },
  ],
  build: isSsrBuild
    ? {
        ssr: true,
        outDir: 'dist/server',
        rollupOptions: {
          input: 'src/entry-server.tsx',
        },
      }
    : {},
}))
