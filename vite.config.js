// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [react() , tailwindcss()],
  
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// })

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
//   plugins: [
//     react(),tailwindcss(),
//   ],
//   optimizeDeps: {
//         exclude: ['lucide-react'],
//        },
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base : "/Decentralized-Identity-Verification",
})