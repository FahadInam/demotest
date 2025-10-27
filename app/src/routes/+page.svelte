<script lang="ts">
        import HandshakeIllustration from '$lib/components/HandshakeIllustration.svelte';
        import PersonWithCVIllustration from '$lib/components/PersonWithCVIllustration.svelte';
        import LaptopSceneIllustration from '$lib/components/LaptopSceneIllustration.svelte';
        import ApplicationScreenIllustration from '$lib/components/ApplicationScreenIllustration.svelte';

        let activeTab = 'arbeitnehmer';
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
        <header class="w-full bg-white flex justify-end items-center px-8 py-4 relative z-10">
                <a href="#login" class="text-[#4DB8AC] text-sm font-medium hover:underline">Login</a>
        </header>

        <section class="relative pt-20 pb-28 px-6 overflow-hidden" style="background: linear-gradient(102deg, #EBF4FF 0%, #E6FFFA 100%);">
                <div class="max-w-6xl mx-auto">
                        <div class="flex flex-col md:flex-row items-center justify-between gap-12">
                                <div class="flex-1 max-w-md z-10">
                                        <h1 class="text-5xl md:text-6xl font-bold text-[#2C3E50] leading-[1.15] mb-8">
                                                Deine Job<br />website
                                        </h1>
                                        <button
                                                class="w-80 h-10 text-white font-medium rounded-xl transition-all shadow-md text-[15px] flex items-center justify-center"
                                                style="background: linear-gradient(95deg, #319795 0%, #3182CE 100%);"
                                        >
                                                Kostenlos Registrieren
                                        </button>
                                </div>

                                <div class="flex-1 max-w-md flex justify-center">
                                        <div class="w-80 h-80 bg-white rounded-full shadow-lg flex items-center justify-center p-10">
                                                <HandshakeIllustration />
                                        </div>
                                </div>
                        </div>
                </div>
                <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                        <svg class="relative block w-full h-[35px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 35" preserveAspectRatio="none">
                                <path d="M0,25 C240,20 480,18 720,20 C930,22 1080,21 1200,23 L1200,35 L0,35 Z" fill="#ffffff"></path>
                        </svg>
                </div>
        </section>

        <section class="py-12 px-6 bg-white">
                <div class="max-w-6xl mx-auto">
                        <div class="flex flex-wrap justify-center gap-3 mb-16">
                                <button
                                        class="px-7 py-2.5 rounded-full text-[14px] font-medium transition-all {activeTab ===
                                        'arbeitnehmer'
                                                ? 'bg-[#4DB8AC] text-white shadow-sm'
                                                : 'bg-white text-[#6B7280] border border-[#D1D5DB] hover:border-[#4DB8AC]'}"
                                        onclick={() => (activeTab = 'arbeitnehmer')}
                                >
                                        Arbeitnehmer
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
                                        'bewerberbox'
                                                ? 'bg-[#4DB8AC] text-white shadow-sm'
                                                : 'bg-white text-[#6B7280] border border-[#D1D5DB] hover:border-[#4DB8AC]'}"
                                        onclick={() => (activeTab = 'bewerberbox')}
                                >
                                        Bewerberbox
                                </button>
                        </div>

                        <h2 class="text-3xl md:text-4xl font-bold text-center text-[#4A5568] mb-20 leading-snug">
                                Drei einfache Schritte<br />zu deinem neuen Job
                        </h2>

                        <div class="relative max-w-5xl mx-auto">
                                <div class="mb-32 relative pb-20">
                                        <div class="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                                                <div class="flex-1 text-left md:text-right order-2 md:order-1 relative">
                                                        <div class="flex items-start justify-start md:justify-end gap-3 md:gap-5">
                                                                <span class="text-6xl md:text-7xl font-bold text-[#A0AEC0] leading-none">1.</span>
                                                                <span class="text-lg md:text-xl text-[#6B7280] font-normal mt-2">Erstellen dein Lebenslauf</span
                                                                >
                                                        </div>
                                                </div>
                                                <div class="flex-1 order-1 md:order-2">
                                                        <div class="w-56 md:w-64 mx-auto md:mx-0">
                                                                <PersonWithCVIllustration />
                                                        </div>
                                                </div>
                                        </div>
                                        <img 
                                                src="/arrow-2.png" 
                                                alt="" 
                                                class="step-one-arrow absolute hidden md:block pointer-events-none"
                                                style="width: 340px; height: 170px; bottom: -110px; left: 5%; opacity: 0.3;"
                                        />
                                </div>

                                <div class="mb-32 relative pb-20">
                                        <div class="absolute inset-0 -mx-6 md:-mx-24 overflow-hidden pointer-events-none" style="height: 100%; z-index: 0;">
                                                <svg class="absolute w-full h-full" viewBox="0 0 1920 300" preserveAspectRatio="none" style="min-height: 100%;">
                                                        <defs>
                                                                <linearGradient id="stepGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                                        <stop offset="0%" style="stop-color:#E8F5F3;stop-opacity:1" />
                                                                        <stop offset="50%" style="stop-color:#EAF4F8;stop-opacity:1" />
                                                                        <stop offset="100%" style="stop-color:#EBF4FF;stop-opacity:1" />
                                                                </linearGradient>
                                                        </defs>
                                                        <path d="M0,80 Q480,20 960,50 T1920,80 L1920,220 Q1440,260 960,240 T0,220 Z" fill="url(#stepGradient)" />
                                                </svg>
                                        </div>
                                        <div class="flex flex-col md:flex-row items-center gap-12 md:gap-16 p-10 md:p-14 relative z-10">
                                                <div class="flex-1 order-1">
                                                        <div class="w-56 md:w-64 mx-auto md:mx-0">
                                                                <LaptopSceneIllustration />
                                                        </div>
                                                </div>
                                                <div class="flex-1 text-left order-2 relative">
                                                        <div class="flex items-start gap-3 md:gap-5">
                                                                <span class="text-6xl md:text-7xl font-bold text-[#A0AEC0] leading-none">2.</span>
                                                                <span class="text-lg md:text-xl text-[#6B7280] font-normal mt-2">Finde passende Jobs</span
                                                                >
                                                        </div>
                                                </div>
                                        </div>
                                        <img 
                                                src="/arrow-1.png" 
                                                alt="" 
                                                class="step-two-arrow absolute hidden md:block pointer-events-none"
                                                style="width: 350px; height: 175px; bottom: -115px; right: 3%; opacity: 0.3; transform: scaleX(-1);"
                                        />
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
