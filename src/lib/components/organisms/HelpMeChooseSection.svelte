<script lang="ts">
	import Heading from '../atoms/Heading.svelte';
	import Paragraph from '../atoms/Paragraph.svelte';
	import PillButton from '../atoms/PillButton.svelte';

	/**
	 * HelpMeChooseSection component - displays "Help me choose" section
	 *
	 * @example
	 * <HelpMeChooseSection />
	 */
</script>

<section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
	<div class="max-w-4xl mx-auto text-center">
		<div class="mb-8">
			<img
				src="/images/help-me-choose.svg"
				alt="Help me choose illustration"
				class="w-32 h-32 mx-auto mb-6 opacity-80"
			/>
		</div>

		<Heading level={2} class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
			Help me choose.
		</Heading>

		<Paragraph class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
			Answer a few questions to find the best Mac for you.
		</Paragraph>

		<PillButton
			variant="primary"
			size="lg"
			href="/mac/best-mac/#help-me-choose"
			className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
		>
			Get started
		</PillButton>
	</div>
</section>
