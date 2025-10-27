<script lang="ts">
        import HandshakeIllustration from '$lib/components/HandshakeIllustration.svelte';
        import PersonWithCVIllustration from '$lib/components/PersonWithCVIllustration.svelte';
        import LaptopSceneIllustration from '$lib/components/LaptopSceneIllustration.svelte';
        import ApplicationScreenIllustration from '$lib/components/ApplicationScreenIllustration.svelte';

        let activeTab = 'jobsuchende';
</script>

<svelte:head>
        <title>Deine Job webseite</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
                rel="stylesheet"
        />
</svelte:head>

<div class="min-h-screen bg-white font-['Inter',sans-serif]">
        <header class="absolute top-0 right-0 p-6 z-10">
                <a href="#login" class="text-[#4DB8AC] text-sm font-medium hover:underline">Login</a>
        </header>

        <section class="relative bg-[#E8F5F3] pt-24 pb-24 px-6 overflow-hidden">
                <div class="max-w-6xl mx-auto">
                        <div class="flex flex-col md:flex-row items-center justify-between gap-16">
                                <div class="flex-1 max-w-md z-10">
                                        <h1 class="text-5xl md:text-6xl font-bold text-[#2C3E50] leading-[1.15] mb-10">
                                                Deine Job<br />webseite
                                        </h1>
                                        <button
                                                class="bg-[#4DB8AC] hover:bg-[#3DA89C] text-white font-medium px-10 py-3.5 rounded-md transition-colors shadow-md text-[15px]"
                                        >
                                                Kostenlos Registrieren
                                        </button>
                                </div>

                                <div class="flex-1 max-w-md">
                                        <div class="w-80 h-80 mx-auto">
                                                <HandshakeIllustration />
                                        </div>
                                </div>
                        </div>
                </div>
        </section>

        <section class="py-12 px-6 bg-white">
                <div class="max-w-6xl mx-auto">
                        <div class="flex flex-wrap justify-center gap-3 mb-16">
                                <button
                                        class="px-7 py-2.5 rounded-full text-[14px] font-medium transition-all {activeTab ===
                                        'jobsuchende'
                                                ? 'bg-[#4DB8AC] text-white shadow-sm'
                                                : 'bg-white text-[#6B7280] border border-[#D1D5DB] hover:border-[#4DB8AC]'}"
                                        onclick={() => (activeTab = 'jobsuchende')}
                                >
                                        Jobsuchende
                                </button>
                                <button
                                        class="px-7 py-2.5 rounded-full text-[14px] font-medium transition-all {activeTab ===
                                        'arbeitgeber'
                                                ? 'bg-[#4DB8AC] text-white shadow-sm'
                                                : 'bg-white text-[#6B7280] border border-[#D1D5DB] hover:border-[#4DB8AC]'}"
                                        onclick={() => (activeTab = 'arbeitgeber')}
                                >
                                        Arbeitgeber
                                </button>
                                <button
                                        class="px-7 py-2.5 rounded-full text-[14px] font-medium transition-all {activeTab ===
                                        'bewerberkbos'
                                                ? 'bg-[#4DB8AC] text-white shadow-sm'
                                                : 'bg-white text-[#6B7280] border border-[#D1D5DB] hover:border-[#4DB8AC]'}"
                                        onclick={() => (activeTab = 'bewerberkbos')}
                                >
                                        Bewerberkbos
                                </button>
                        </div>

                        <h2 class="text-3xl md:text-4xl font-bold text-center text-[#4A5568] mb-20 leading-snug">
                                Drei einfache Schritte<br />zu deinem neuen Job
                        </h2>

                        <div class="relative max-w-5xl mx-auto">
                                <div class="mb-24 relative">
                                        <div class="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                                                <div class="flex-1 text-left md:text-right order-2 md:order-1">
                                                        <div class="flex items-start justify-start md:justify-end gap-3 md:gap-5">
                                                                <span class="text-6xl md:text-7xl font-bold text-[#A0AEC0] leading-none">1.</span>
                                                                <span class="text-lg md:text-xl text-[#6B7280] font-normal mt-2">Erstelle deinen Lebenslauf</span
                                                                >
                                                        </div>
                                                </div>
                                                <div class="flex-1 order-1 md:order-2">
                                                        <div class="w-56 md:w-64 mx-auto md:mx-0">
                                                                <PersonWithCVIllustration />
                                                        </div>
                                                </div>
                                        </div>
                                        <svg
                                                class="absolute left-1/2 -bottom-12 transform -translate-x-1/2 hidden md:block pointer-events-none"
                                                width="300"
                                                height="100"
                                                viewBox="0 0 300 100"
                                                fill="none"
                                        >
                                                <path
                                                        d="M 30,5 Q 120,70 270,5"
                                                        stroke="#D1D5DB"
                                                        stroke-width="1.5"
                                                        fill="none"
                                                        stroke-dasharray="4,4"
                                                />
                                        </svg>
                                </div>

                                <div class="mb-24 relative">
                                        <div
                                                class="flex flex-col md:flex-row items-center gap-12 md:gap-16 bg-gradient-to-r from-[#E8F5F3] via-[#EAF4F8] to-[#EBF4FF] rounded-[32px] p-10 md:p-14"
                                        >
                                                <div class="flex-1 order-1">
                                                        <div class="w-56 md:w-64 mx-auto md:mx-0">
                                                                <LaptopSceneIllustration />
                                                        </div>
                                                </div>
                                                <div class="flex-1 text-left order-2">
                                                        <div class="flex items-start gap-3 md:gap-5">
                                                                <span class="text-6xl md:text-7xl font-bold text-[#A0AEC0] leading-none">2.</span>
                                                                <span class="text-lg md:text-xl text-[#6B7280] font-normal mt-2">Finde passende Jobs</span
                                                                >
                                                        </div>
                                                </div>
                                        </div>
                                        <svg
                                                class="absolute left-1/2 -bottom-12 transform -translate-x-1/2 hidden md:block pointer-events-none"
                                                width="300"
                                                height="100"
                                                viewBox="0 0 300 100"
                                                fill="none"
                                        >
                                                <path
                                                        d="M 30,5 Q 120,70 270,5"
                                                        stroke="#D1D5DB"
                                                        stroke-width="1.5"
                                                        fill="none"
                                                        stroke-dasharray="4,4"
                                                />
                                        </svg>
                                </div>

                                <div class="mb-16">
                                        <div class="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                                                <div class="flex-1 text-left md:text-right order-2 md:order-1">
                                                        <div class="flex items-start justify-start md:justify-end gap-3 md:gap-5">
                                                                <span class="text-6xl md:text-7xl font-bold text-[#A0AEC0] leading-none">3.</span>
                                                                <span class="text-lg md:text-xl text-[#6B7280] font-normal mt-2 leading-relaxed"
                                                                        >Mit nur einem Klick<br />bewerben</span
                                                                >
                                                        </div>
                                                </div>
                                                <div class="flex-1 order-1 md:order-2">
                                                        <div class="w-56 md:w-64 mx-auto md:mx-0">
                                                                <ApplicationScreenIllustration />
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
</div>
