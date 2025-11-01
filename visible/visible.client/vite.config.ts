import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

const certificateName = "visible.client";
const certFilePath = path.join("/run/secrets", `${certificateName}.pem`);
const keyFilePath = path.join("/run/secrets", `${certificateName}.key`);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        plugin(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        proxy: {
            '^/api/': {
                target: "http://visible.server:8080",
                changeOrigin: true,
                secure: false,
            }
        },
        port: 5173,
        https: {
            key: fs.readFileSync(keyFilePath),
            cert: fs.readFileSync(certFilePath),
        }
    }
})
