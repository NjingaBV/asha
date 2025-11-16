<script lang="ts">
	import Heading from '../atoms/Heading.svelte';
	import Paragraph from '../atoms/Paragraph.svelte';
	import PillButton from '../atoms/PillButton.svelte';

	/**
	 * WhyAppleSection component - displays "Why Apple is the best place to buy Mac" section
	 *
	 * @example
	 * <WhyAppleSection />
	 */

	interface BenefitItem {
		icon: string;
		title: string;
		description: string;
		ctaText: string;
		ctaLink: string;
	}

	const benefits: BenefitItem[] = [
		{
			icon: 'graduationcap',
			title: 'Save on a new Mac with education pricing.',
			description: 'Available to college students and educators.',
			ctaText: 'Education Pricing',
			ctaLink: '/us/shop/goto/educationrouting'
		},
		{
			icon: 'person.line.dotted.person',
			title: 'Join an online Personal Setup session.',
			description:
				'Talk one on one with a Specialist to set up your Mac and discover new features.',
			ctaText: 'Personal Setup',
			ctaLink: '/us/shop/goto/personal_setup'
		},
		{
			icon: 'desktopcomputer.and.macbook',
			title: 'Customize your Mac.',
			description: 'Choose your chip, memory, storage, even color.',
			ctaText: 'Customize Your Mac',
			ctaLink: '/us/shop/goto/buy_mac'
		},
		{
			icon: 'truck.box',
			title: 'Get flexible delivery and easy pickup.',
			description:
				'Choose from two-hour delivery from an Apple Store, free delivery, or easy pickup options.',
			ctaText: 'Delivery and Pickup',
			ctaLink: '/us/shop/goto/shipping_pickup'
		},
		{
			icon: 'person.macwindow',
			title: 'Shop live with a Specialist.',
			description: 'Let us guide you live over video and answer all of your questions.',
			ctaText: 'Guided Video Shopping',
			ctaLink: 'https://contactretail.apple.com/?pg=mac&ap=COM&c=us&l=en&ag=SWSOV'
		},
		{
			icon: 'app.applestore',
			title: 'Explore a shopping experience designed around you.',
			description: 'Use the Apple Store app to get a more personal way to shop.',
			ctaText: 'Apple Store App',
			ctaLink: 'https://apps.apple.com/us/app/apple-store/id375380948'
		}
	];

	function getIconSvg(iconName: string): string {
		const icons: Record<string, string> = {
			graduationcap: `<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
			</svg>`,
			'person.line.dotted.person': `<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
			</svg>`,
			'desktopcomputer.and.macbook': `<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
			</svg>`,
			'truck.box': `<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
			</svg>`,
			'person.macwindow': `<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
			</svg>`,
			'app.applestore': `<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
			</svg>`
		};
		return icons[iconName] || '';
	}
</script>

<section class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16">
			<Heading level={2} class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
				Why Apple is the best place to buy Mac.
			</Heading>
			<div class="flex justify-center mb-8">
				<PillButton tone="primary" size="lg" href="/us/shop/goto/buy_mac"
					>Shop Mac</PillButton
				>
			</div>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each benefits as benefit}
				<div class="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
					<div
						class="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-6 mx-auto"
					>
						{@html getIconSvg(benefit.icon)}
					</div>
					<Heading level={3} class="text-xl font-bold text-gray-900 mb-4 text-center">
						{benefit.title}
					</Heading>
					<Paragraph class="text-gray-600 mb-6 text-center">
						{benefit.description}
					</Paragraph>
					<div class="text-center">
						<PillButton tone="secondary" href={benefit.ctaLink}>
							{benefit.ctaText}
						</PillButton>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
