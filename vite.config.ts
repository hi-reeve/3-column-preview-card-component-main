import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import reactJSX from "vite-react-jsx";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh(), reactJSX()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
});
