<script lang="ts">
        import favicon from '$lib/assets/favicon.svg';
        import '../app.css';

        let { children } = $props();
</script>

<svelte:head>
        <link rel="icon" href={favicon} />
</svelte:head>

<div class="h-1 w-full bg-gradient-to-r from-[#49b8ac] to-[#4db2d9]"></div>
{@render children?.()}
