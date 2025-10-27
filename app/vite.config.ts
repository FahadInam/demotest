import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
        plugins: [tailwindcss(), sveltekit()],
        server: {
                host: '0.0.0.0',
                port: 5000,
                allowedHosts: [
                        'd0f19788-9846-4eb3-918f-f0bd52f399dc-00-fd89eb3ldcn3.spock.replit.dev'
                ]
        }
});
