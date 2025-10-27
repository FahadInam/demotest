import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		host: '0.0.0.0',
		port: 5000,
		allowedHosts: [
			'b45b7a18-1587-4723-a4e6-73dec78f818a-00-1gjlfdhbs7kyq.spock.replit.dev'
		]
	}
});
