import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/labkesdakabsukabumi.dpdns.org/', // ganti dengan nama repo GitHub kamu
})