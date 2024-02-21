import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv  } from "vite";

// https://vitejs.dev/config/
export default defineConfig(mode => {
  
  const env = loadEnv(mode, process.cwd(), '');
  return{
    plugins: [react()],
      define: {
      'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY)
    },
    resolve: {
      alias: {
        // Add any aliases you need
      },
      extensions: ['.js', '.jsx', '.json'],
  }
  }
});
