import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
	base : '/3-column-preview-card-component-main',
    plugins: [reactRefresh()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
});
