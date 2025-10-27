<script lang="ts">
	import HandshakeIllustration from '$lib/components/HandshakeIllustration.svelte';
	import PersonWithCVIllustration from '$lib/components/PersonWithCVIllustration.svelte';
	import LaptopSceneIllustration from '$lib/components/LaptopSceneIllustration.svelte';
	import ApplicationScreenIllustration from '$lib/components/ApplicationScreenIllustration.svelte';

	let activeTab = 'jobsuchende';
</script>

<div class="min-h-screen bg-white">
	<header class="absolute top-0 right-0 p-6">
		<a href="#login" class="text-[#4DB8AC] text-sm font-medium hover:underline">Login</a>
	</header>

	<section class="relative bg-gradient-to-b from-[#E8F5F3] to-[#E8F5F3] pt-20 pb-32 px-6">
		<div class="max-w-6xl mx-auto">
			<div class="flex flex-col md:flex-row items-center justify-between gap-12">
				<div class="flex-1 max-w-md">
					<h1 class="text-5xl md:text-6xl font-bold text-[#2C3E50] leading-tight mb-8">
						Deine Job<br />webseite
					</h1>
					<button
						class="bg-[#4DB8AC] hover:bg-[#3DA89C] text-white font-medium px-8 py-3 rounded-md transition-colors shadow-sm"
					>
						Kostenlos Registrieren
					</button>
				</div>

				<div class="flex-1 max-w-sm">
					<div class="relative">
						<HandshakeIllustration />
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="py-16 px-6">
		<div class="max-w-6xl mx-auto">
			<div class="flex justify-center gap-4 mb-12">
				<button
					class="px-6 py-2.5 rounded-full text-sm font-medium transition-all {activeTab ===
					'jobsuchende'
						? 'bg-[#4DB8AC] text-white'
						: 'bg-white text-[#6B7280] border border-[#E5E7EB] hover:border-[#4DB8AC]'}"
					onclick={() => (activeTab = 'jobsuchende')}
				>
					Jobsuchende
				</button>
				<button
					class="px-6 py-2.5 rounded-full text-sm font-medium transition-all {activeTab ===
					'arbeitgeber'
						? 'bg-[#4DB8AC] text-white'
						: 'bg-white text-[#6B7280] border border-[#E5E7EB] hover:border-[#4DB8AC]'}"
					onclick={() => (activeTab = 'arbeitgeber')}
				>
					Arbeitgeber
				</button>
				<button
					class="px-6 py-2.5 rounded-full text-sm font-medium transition-all {activeTab ===
					'bewerberkbos'
						? 'bg-[#4DB8AC] text-white'
						: 'bg-white text-[#6B7280] border border-[#E5E7EB] hover:border-[#4DB8AC]'}"
					onclick={() => (activeTab = 'bewerberkbos')}
				>
					Bewerberkbos
				</button>
			</div>

			<h2 class="text-3xl md:text-4xl font-bold text-center text-[#4A5568] mb-24">
				Drei einfache Schritte<br />zu deinem neuen Job
			</h2>

			<div class="relative">
				<div class="mb-32 relative">
					<div class="flex flex-col md:flex-row items-center gap-12 md:gap-20">
						<div class="flex-1 text-left md:text-right order-2 md:order-1">
							<div class="flex items-center justify-start md:justify-end gap-4">
								<span class="text-7xl font-bold text-[#A0AEC0]">1.</span>
								<span class="text-xl text-[#6B7280] font-medium">Erstellen dein Lebenslauf</span>
							</div>
						</div>
						<div class="flex-1 order-1 md:order-2">
							<div class="w-64 mx-auto">
								<PersonWithCVIllustration />
							</div>
						</div>
					</div>
					<svg
						class="absolute left-1/2 -bottom-16 transform -translate-x-1/2 hidden md:block"
						width="400"
						height="120"
						viewBox="0 0 400 120"
						fill="none"
					>
						<path
							d="M 50,10 Q 150,80 350,10"
							stroke="#E5E7EB"
							stroke-width="2"
							fill="none"
							stroke-dasharray="5,5"
						/>
					</svg>
				</div>

				<div class="mb-32 relative">
					<div
						class="flex flex-col md:flex-row items-center gap-12 md:gap-20 bg-gradient-to-r from-[#E8F5F3] to-[#EBF4FF] rounded-3xl p-8 md:p-12"
					>
						<div class="flex-1 order-1">
							<div class="w-64 mx-auto">
								<LaptopSceneIllustration />
							</div>
						</div>
						<div class="flex-1 text-left order-2">
							<div class="flex items-center gap-4">
								<span class="text-7xl font-bold text-[#A0AEC0]">2.</span>
								<span class="text-xl text-[#6B7280] font-medium">Erstellen dein Lebenslauf</span>
							</div>
						</div>
					</div>
					<svg
						class="absolute left-1/2 -bottom-16 transform -translate-x-1/2 hidden md:block"
						width="400"
						height="120"
						viewBox="0 0 400 120"
						fill="none"
					>
						<path
							d="M 50,10 Q 150,80 350,10"
							stroke="#E5E7EB"
							stroke-width="2"
							fill="none"
							stroke-dasharray="5,5"
						/>
					</svg>
				</div>

				<div class="mb-16">
					<div class="flex flex-col md:flex-row items-center gap-12 md:gap-20">
						<div class="flex-1 text-left md:text-right order-2 md:order-1">
							<div class="flex items-center justify-start md:justify-end gap-4">
								<span class="text-7xl font-bold text-[#A0AEC0]">3.</span>
								<span class="text-xl text-[#6B7280] font-medium">Mit nur einem Klick<br />bewerben</span>
							</div>
						</div>
						<div class="flex-1 order-1 md:order-2">
							<div class="w-64 mx-auto">
								<ApplicationScreenIllustration />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
