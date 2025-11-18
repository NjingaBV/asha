import type { Meta, StoryObj } from '@storybook/sveltekit';

/**
 * Apple Mac Page Reproduction
 *
 * Cette story reproduit fidèlement la structure et le design de https://www.apple.com/mac/
 * en utilisant notre design system complet
 */

const meta = {
	title: 'Pages/Mac Apple-Like Design',
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Page Mac Inspirée d'Apple

Une reproduction fidèle de https://www.apple.com/mac/ en utilisant notre design system complet.

## 🎯 Structure de la Page

### 1. Hero Section ⭐
**Composant:** Hero (variant="default")

\`\`\`
Titre: "If you can dream it, Mac can do it"
Sous-titre: "Great ideas start here"
CTAs: 
  - "Watch the film" 
  - "Learn more"
Fond: Noir minimaliste (#000000)
\`\`\`

### 2. Product Showcase Grid 🖥️
**Composant:** ProductGrid

6 produits principaux:
- MacBook Air 13" & 15" (M4 chip)
- MacBook Pro 14" & 16" (M5, M4 Pro, M4 Max)
- iMac (M4 chip) - 7 couleurs
- Mac mini (M4, M4 Pro)
- Mac Studio (M4 Max, M3 Ultra)
- Mac Pro (M2 Ultra)

Chaque produit contient:
\`\`\`
- Image responsive
- Titre + spécifications (chip)
- Description courte (2-3 lignes)
- Sélecteur de couleurs (color dots)
- CTAs: "Learn more" + "Buy"
\`\`\`

### 3. Why Buy at Apple (Benefits) 💡
**Composant:** BenefitCard (x5 en grille)

5 cartes principales:
1. **Education Pricing** - Savings for students & educators
2. **Personal Setup** - One-on-one online sessions
3. **Customize Your Mac** - Build your own config
4. **Delivery & Pickup** - Flexible options (2-hour, free, pickup)
5. **Guided Video Shopping** - Shop live with specialist

Format:
\`\`\`
┌─────────────────────┐
│   [ICON/IMAGE]      │
│                     │
│   Titre (gras)      │
│   Description       │
│   [Learn more]      │
└─────────────────────┘
\`\`\`

### 4. Get to Know Mac 🔍
**Composant:** Features (alternating layout)

8 sections thématiques avec images & contenu:
1. **Performance and Battery Life** - "Go fast. Go far"
2. **Built for AI** - "Smart. Secure. On device"
3. **macOS and Apple Intelligence** - "Easy to use. Easy to love"
4. **Mac + iPhone** - "Together they work wonders"
5. **Compatibility** - "Mac runs your favorite apps"
6. **Privacy and Security** - "Your business is nobody else's"
7. **Durability** - "Built to stand the test of time"
8. **Apple Values** - "Our values drive everything we do"

Format alternant:
\`\`\`
[IMAGE]                      TEXTE
TEXTE                        [IMAGE]
[IMAGE]                      TEXTE
...
\`\`\`

### 5. Help Me Choose 🤖
**Composant:** CTAGroup / Card

Simple card CTA:
\`\`\`
"Answer a few questions to find the best Mac for you"
[Get started]
\`\`\`

### 6. Trade-In Section ♻️
**Composant:** Card + CTA

\`\`\`
"Give us the old. Save on the new."
"With Apple Trade In, get value for your device..."
[See what your device is worth]
\`\`\`

### 7. Mac Does That 🆚
**Composant:** Hero (variant="banner")

\`\`\`
"See how easy it is to switch to Mac"
[Learn more] → /mac/mac-does-that/
\`\`\`

### 8. Mac Essentials 🛍️
**Composant:** Carousel + ProductCard

Deux sections:
1. **Mac Accessories** - Keyboards, mice, essentials
2. **Studio Display** - 27-inch 5K Retina display

### 9. Ecosystem Section 🔗
**Composant:** TextAnimation / FeatureGrid

"Unlock the world of Apple" avec 3 subsections:
- **Mac + iPhone** - Continuity features
- **Mac + iPad** - Mirroring & clipboard
- **Mac + Apple Watch** - Auto Unlock

### 10. Footer
**Composant:** Footer

Navigation complète + liens légaux

---

## 📱 Responsive Design

\`\`\`
Mobile (< 640px)
├─ Stack vertical
├─ Full-width images
└─ Touch-optimized

Tablet (640px - 1024px)
├─ 2-column grids
├─ Optimized spacing
└─ Medium images

Desktop (> 1024px)
├─ 3-column grids
├─ Large images
└─ Full horizontal layouts
\`\`\`

---

## 🎨 Design System Components

| Section | Composant Asha | Type | Status |
|---------|---|---|---|
| Hero | Hero | Organism | ✅ Ready |
| Product Grid | ProductGrid | Organism | ✅ Exists |
| Benefits | BenefitCard | Molecule | ✅ Exists |
| Features | Features | Organism | ✅ Exists |
| Accessories | Carousel | Organism | ✅ Exists |
| Help Me Choose | Card + CTA | Mixed | ✅ Ready |
| Ecosystem | TextAnimation | Organism | ✅ Exists |
| Footer | Footer | Organism | ✅ Exists |

---

## 🚀 Implementation Notes

### Data Structure
\`\`\`typescript
interface MacPageData {
  hero: HeroProps;
  products: ProductType[];
  benefits: BenefitCardType[];
  features: FeatureType[];
  accessories: ProductCardType[];
  ecosystem: EcosystemFeature[];
}
\`\`\`

### Color Palette
- Primary: Apple black (#000000, #1D1D1F)
- Accent: System blue (#0A84FF)
- Neutrals: Grays (#E8E8ED, #8E8E93, #7C7C82)

### Typography
- Headlines: SF Pro Display (Bold, Black)
- Body: SF Pro Text (Regular, Medium)
- Sizes: Responsive (12px → 48px)

---

## 📖 References
- Apple Mac Page: https://www.apple.com/mac/
- Design System: Asha (Atomic Design)
- Framework: SvelteKit + Tailwind CSS
`
			}
		}
	},
	tags: ['autodocs']
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Vue Complète de la Page Mac Inspirée d'Apple
 *
 * Cette story documente la structure complète qu'il faut implémenter
 * pour reproduire la page Apple Mac avec notre design system.
 */
export const FullPageStructure: Story = {
	parameters: {
		docs: {
			description: {
				story: `
## 🎯 Structure Complète de la Page Mac

Cette documentation couvre tous les éléments nécessaires pour construire une page Mac
identique à celle d'Apple en utilisant uniquement nos composants Asha.

### Flux Visuel de la Page

1. **Navigation** → Header avec logo Apple + menu
2. **Hero Section** → "If you can dream it, Mac can do it"
3. **Product Tabs** → Sélection par type (Laptops, Desktops, Displays)
4. **Product Grid** → Affichage des 6 produits principaux
5. **Why Apple** → 5 cartes d'avantages d'achat
6. **Get to Know** → 8 sections alternantes avec images
7. **Help Choose** → Wizard CTA
8. **Trade-In** → Échange ancien device
9. **Mac Does That** → Comparison PC vs Mac
10. **Accessories** → Carousel + Studio Display
11. **Ecosystem** → Mac + other Apple devices
12. **Footer** → Liens et informations légales

### Composants à Utiliser

**Organisms (Layout complexes):**
- Hero (main banner)
- ProductGrid (grille 2-3 colonnes)
- Features (layout alternant)
- Carousel (accessories)
- Footer (pied de page)

**Molecules (Composants intermédiaires):**
- BenefitCard (cartes avantages)
- ProductCard (cartes produit)
- Card (generic container)
- CTAGroup (boutons groupés)

**Atoms (Éléments basiques):**
- Button (CTAs)
- Heading (titres)
- Paragraph (texte)
- ColorDot (sélecteur couleurs)
- Image (images responsive)
- Link (liens)

### Créer la Composante MacAppleLike.svelte

1. Créer le fichier:
   \`/src/lib/components/pages/MacAppleLike.svelte\`

2. Importer tous les composants nécessaires

3. Structurer avec props pour chaque section:
   \`\`\`svelte
   <script>
     // Hero props
     // Products array
     // Benefits array
     // Features array
     // Ecosystem data
   </script>
   
   <Hero {...hero} />
   <ProductGrid {products} />
   <section class="benefits">
     {#each benefits as benefit}
       <BenefitCard {...benefit} />
     {/each}
   </section>
   <Features {features} />
   // ... etc
   \`\`\`

4. Tester avec cette story

### Points Clés

✅ **Responsive Design** - Mobile first approach
✅ **Image Optimization** - Lazy loading, srcset
✅ **Accessibility** - ARIA labels, semantic HTML
✅ **Performance** - Component code-splitting
✅ **Design Consistency** - Use system colors & typography
✅ **Reusability** - All components are generic

### Exemple de Données (Hero Section)

\`\`\`typescript
const heroData = {
  variant: 'default',
  title: 'If you can dream it, Mac can do it',
  subtitle: 'Great ideas start here',
  description: 'See how Mac helps ideas come to life',
  image: {
    src: 'https://...',
    alt: 'Mac products showcase'
  },
  backgroundColor: '#000000',
  textColor: 'light',
  primaryAction: { label: 'Watch the film', href: '#film' },
  secondaryAction: { label: 'Learn more', href: '#learn' }
}
\`\`\`

---

## 📋 Checklist d'Implémentation

- [ ] Créer MacAppleLike.svelte
- [ ] Implémenter Hero section
- [ ] Ajouter ProductGrid avec 6 produits
- [ ] Créer layout Benefits (5 cartes)
- [ ] Implémenter Features section (8 items alternant)
- [ ] Ajouter Help Me Choose CTA
- [ ] Ajouter Trade-In section
- [ ] Implémenter Accessories Carousel
- [ ] Ajouter Ecosystem section
- [ ] Intégrer Footer
- [ ] Tester responsive design
- [ ] Valider accessibilité
- [ ] Optimiser images
- [ ] Build & deploy

---

Cette story sert de **guide d'implémentation complet** pour créer une page Mac fidèle
à l'original en utilisant notre design system Asha.
			`
			}
		}
	}
};

/**
 * Documentation des Sections Individuelles
 */
export const SectionBreakdown: Story = {
	parameters: {
		docs: {
			description: {
				story: `
## 📑 Analyse Détaillée de Chaque Section

### SECTION 1: HERO
**Composant:** Hero (variant="default")

Props requises:
\`\`\`typescript
{
  title: "If you can dream it, Mac can do it",
  subtitle: "Great ideas start here",
  description: "See how Mac helps ideas come to life",
  backgroundColor: "#000000",
  textColor: "light",
  primaryAction: { label: "Watch the film" },
  secondaryAction: { label: "Learn more" }
}
\`\`\`

---

### SECTION 2: PRODUCT GRID
**Composant:** ProductGrid + ProductCard

6 produits à afficher:
\`\`\`typescript
[
  {
    id: "macbook-air",
    title: 'MacBook Air 13" and 15"',
    chip: "M4 chip",
    description: "Strikingly thin and fast so you can work, play, or create anywhere",
    image: "...",
    colors: ["#sky-blue", "#silver", "#starlight", "#midnight"],
    learnMoreHref: "/macbook-air/",
    buyHref: "/shop/macbook-air"
  },
  // ... 5 autres produits
]
\`\`\`

---

### SECTION 3: WHY BUY AT APPLE
**Composant:** BenefitCard (grille 1-2-3 col)

5 cartes avec structure:
\`\`\`typescript
{
  icon: "graduation-cap",  // ou image
  title: "Save on a new Mac with education pricing",
  description: "Available to college students and educators",
  learnMoreHref: "/education-pricing"
}
\`\`\`

---

### SECTION 4: GET TO KNOW MAC
**Composant:** Features (alternating)

8 features alternées:
\`\`\`typescript
[
  {
    title: "Performance and Battery Life",
    description: "Go fast. Go far.",
    image: "...",
    learnMore: "#"
  },
  // ... 7 autres features
]
\`\`\`

Layout alternant:
- Feature 1: Image LEFT, Text RIGHT
- Feature 2: Text LEFT, Image RIGHT
- Feature 3: Image LEFT, Text RIGHT
- ...

---

### SECTION 5: HELP ME CHOOSE
**Composant:** Card + CTA

Simple card:
\`\`\`
┌────────────────────────────────┐
│                                │
│  Answer a few questions to    │
│  find the best Mac for you    │
│                                │
│       [Get started]            │
│                                │
└────────────────────────────────┘
\`\`\`

---

### SECTION 6: TRADE-IN
**Composant:** Card + CTA

\`\`\`
┌────────────────────────────────┐
│  Give us the old.              │
│  Save on the new.              │
│                                │
│  With Apple Trade In, you can  │
│  get a great value...          │
│                                │
│  [See what device is worth]    │
└────────────────────────────────┘
\`\`\`

---

### SECTION 7: MAC DOES THAT
**Composant:** Hero (variant="banner")

Simple hero section:
\`\`\`
See how easy it is to switch to Mac
[Learn more]
\`\`\`

---

### SECTION 8: ACCESSORIES
**Composant:** Carousel + Tile

Carousel de 2-3 sections:
1. Mac Accessories (keyboards, mice)
2. Studio Display (5K Retina)
3. Pro Display XDR (6K XDR)

---

### SECTION 9: ECOSYSTEM
**Composant:** TextAnimation / Feature

3 subsections:
1. Mac + iPhone (Continuity)
2. Mac + iPad (Mirroring)
3. Mac + Apple Watch (Auto Unlock)

---

### SECTION 10: FOOTER
**Composant:** Footer

Standard Apple footer avec liens.

---

## 🔄 Workflow d'Implémentation

1. Créer component MacAppleLike.svelte
2. Créer props interface avec toutes les données
3. Implémenter chaque section une par une
4. Tester responsiveness
5. Optimiser performance
6. Valider accessibilité
7. Créer story complète

			`
			}
		}
	}
};

/**
 * Guide de Composition des Sections
 */
export const CompositionGuide: Story = {
	parameters: {
		docs: {
			description: {
				story: `
## 🛠️ Guide Pratique de Composition

### Comment Structurer MacAppleLike.svelte

\`\`\`svelte
<script lang="ts">
  import Hero from '$lib/components/organisms/Hero.svelte';
  import ProductGrid from '$lib/components/organisms/ProductGrid.svelte';
  import BenefitCard from '$lib/components/molecules/BenefitCard.svelte';
  import Features from '$lib/components/organisms/Features.svelte';
  import Carousel from '$lib/components/organisms/Carousel.svelte';
  import Card from '$lib/components/molecules/Card.svelte';
  import Button from '$lib/components/atoms/Button.svelte';
  import Footer from '$lib/components/organisms/Footer.svelte';

  // Props de chaque section
  export let hero = {...};
  export let products = [];
  export let benefits = [];
  export let features = [];
  export let accessories = [];
  export let ecosystem = {};
</script>

<!-- 1. HERO -->
<Hero {...hero} />

<!-- 2. PRODUCTS -->
<section class="products">
  <div class="tabs">
    <!-- Tab navigation -->
  </div>
  <ProductGrid {products} />
</section>

<!-- 3. BENEFITS -->
<section class="benefits bg-gray-50">
  <div class="max-w-7xl mx-auto px-4">
    <h2>Why Apple is the best place to buy Mac</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {#each benefits as benefit}
        <BenefitCard {...benefit} />
      {/each}
    </div>
  </div>
</section>

<!-- 4. FEATURES -->
<Features {features} />

<!-- 5. HELP ME CHOOSE -->
<section class="help-choose py-16">
  <Card>
    <h3>Answer a few questions...</h3>
    <Button>Get started</Button>
  </Card>
</section>

<!-- 6. TRADE-IN -->
<section class="trade-in">
  <!-- Similar to help-choose -->
</section>

<!-- 7. MAC DOES THAT -->
<Hero variant="banner" {...macDoesThat} />

<!-- 8. ACCESSORIES -->
<Carousel {accessories} />

<!-- 9. ECOSYSTEM -->
<section class="ecosystem">
  <!-- Ecosystem features -->
</section>

<!-- 10. FOOTER -->
<Footer />
\`\`\`

### Styles Tailwind à Utiliser

\`\`\`css
/* Spacing */
.section { padding: 4rem 0; }
.section.dark { background-color: #000; }
.section.light { background-color: #fff; }

/* Typography */
.title { @apply text-4xl md:text-5xl font-black; }
.subtitle { @apply text-xl md:text-2xl font-semibold; }
.description { @apply text-base md:text-lg leading-relaxed; }

/* Layout */
.max-w-container { max-width: 1440px; }
.center { @apply mx-auto px-4 md:px-6 lg:px-8; }

/* Grid */
.grid-products { @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6; }
.grid-benefits { @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6; }
\`\`\`

### Data Flow

\`\`\`
MacAppleLike Component
  ↓
Props (hero, products, benefits...)
  ↓
Derived computed values (if needed)
  ↓
Render sections sequentially
  ↓
Each section uses specific component
\`\`\`

### Testing Checklist

- [ ] Desktop (1440px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)
- [ ] All components render
- [ ] Images load correctly
- [ ] Links work
- [ ] Colors match design
- [ ] Typography is consistent
- [ ] Spacing is correct
- [ ] Accessibility passes

			`
			}
		}
	}
};

/**
 * Data Example / Starter Template
 */
export const DataTemplate: Story = {
	parameters: {
		docs: {
			description: {
				story: `
## 📄 Template de Données Complet

Utilisez ce template pour passer les données à MacAppleLike.svelte:

\`\`\`typescript
const macPageData = {
  hero: {
    variant: 'default',
    title: 'If you can dream it, Mac can do it',
    subtitle: 'Great ideas start here',
    description: 'See how Mac helps ideas come to life',
    backgroundColor: '#000000',
    textColor: 'light',
    primaryAction: { label: 'Watch the film', href: '#film' },
    secondaryAction: { label: 'Learn more', href: '#' }
  },
  
  products: [
    {
      id: 'macbook-air',
      title: 'MacBook Air 13" and 15"',
      chip: 'M4 chip',
      description: 'Strikingly thin and fast so you can work, play, or create anywhere.',
      image: 'https://...',
      colors: [
        { name: 'sky blue', code: '#5B9FDB' },
        { name: 'silver', code: '#E8E8ED' },
        { name: 'starlight', code: '#E4DED6' },
        { name: 'midnight', code: '#2D2D2D' }
      ],
      learnMoreHref: '/macbook-air/',
      buyHref: '/shop/macbook-air'
    },
    // ... 5 autres produits (Pro 14", Pro 16", iMac, mini, Studio)
  ],
  
  benefits: [
    {
      icon: 'graduation-cap',
      title: 'Save on a new Mac with education pricing',
      description: 'Available to college students and educators.',
      learnMoreHref: '/education'
    },
    {
      icon: 'person-dotted',
      title: 'Join an online Personal Setup session',
      description: 'Talk one on one with a Specialist to set up your Mac.',
      learnMoreHref: '/personal-setup'
    },
    {
      icon: 'laptop',
      title: 'Customize your Mac',
      description: 'Choose your chip, memory, storage, even color.',
      learnMoreHref: '/shop'
    },
    {
      icon: 'truck',
      title: 'Get flexible delivery and easy pickup',
      description: 'Choose from delivery or pickup options.',
      learnMoreHref: '/shipping'
    },
    {
      icon: 'video',
      title: 'Shop live with a Specialist',
      description: 'Let us guide you live over video.',
      learnMoreHref: '/video-shop'
    }
  ],
  
  features: [
    {
      title: 'Performance and Battery Life',
      description: 'Go fast. Go far.',
      image: 'https://...',
      learnMore: '#'
    },
    // ... 7 autres features
  ],
  
  accessories: [
    {
      title: 'Mac Accessories',
      description: 'Explore keyboards, mice, and other essentials.',
      image: 'https://...',
      learnMore: '/accessories'
    },
    {
      title: 'Studio Display',
      description: 'The 27-inch 5K Retina display pairs beautifully with any Mac.',
      image: 'https://...',
      learnMore: '/studio-display'
    }
  ],
  
  ecosystem: {
    title: 'Unlock the world of Apple',
    sections: [
      {
        title: 'Mac and iPhone',
        description: 'Answer calls or messages directly on your Mac...',
        image: 'https://...'
      },
      {
        title: 'Mac and iPad',
        description: 'Sketch on your iPad and have it appear on your Mac...',
        image: 'https://...'
      },
      {
        title: 'Mac and Apple Watch',
        description: 'Automatically log in with your Apple Watch...',
        image: 'https://...'
      }
    ]
  }
};
\`\`\`

### Utiliser dans une Story

\`\`\`svelte
<script>
  import MacAppleLike from '$lib/components/pages/MacAppleLike.svelte';
  import { macPageData } from './data';
</script>

<MacAppleLike {...macPageData} />
\`\`\`

			`
			}
		}
	}
};
