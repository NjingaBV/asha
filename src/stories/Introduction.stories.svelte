<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta title="Guides/Introduction" />

<Template>
  <article class="prose max-w-3xl mx-auto p-6">
    <h1 class="text-2xl font-semibold">ASHA UI — Introduction</h1>
    <p class="mt-2">Composants Svelte + Tailwind dans Storybook</p>

    <h2 class="mt-8 text-xl font-semibold">Intégration Tailwind</h2>
    <ul class="list-disc ml-5 space-y-1">
      <li>Chargement via <code>src/app.css</code> importé dans <code>.storybook/preview.js</code>.</li>
      <li>Scan étendu à <code>./src</code> et <code>.storybook</code> dans <code>tailwind.config.cjs</code>.</li>
      <li>Fonds Storybook configurés (clair par défaut, sombre disponible).</li>
      <li>Police Lato chargée via <code>.storybook/preview-head.html</code>.</li>
    </ul>

    <h2 class="mt-8 text-xl font-semibold">Conseils d’écriture de stories</h2>
    <ul class="list-disc ml-5 space-y-1">
      <li>Utilisez les <code>args</code> pour piloter les props.</li>
      <li>Pour les vues plein écran, gardez <code>layout: 'fullscreen'</code>.</li>
      <li>Ajoutez un wrapper local si le composant suppose un conteneur (ex. <code>max-w-5xl p-6</code>).</li>
    </ul>

    <h2 class="mt-8 text-xl font-semibold">Exemple minimal</h2>
    <pre class="bg-slate-900 text-slate-100 p-4 rounded"><code>{`<!-- Button.stories.svelte -->
<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Button from './Button.svelte';
</script>

<Meta title="Atoms/Button" component={Button} />

<Template let:args>
  <Button {...args}>Bouton</Button>
</Template>

<Story name="Par défaut" args={{ size: 'medium', color: '#6c00e2' }} />`}</code></pre>

    <h2 class="mt-8 text-xl font-semibold">Rendu global</h2>
    <p>
      Un décorateur global applique <code>min-h-screen</code>, <code>bg-white</code>, <code>text-slate-800</code> au
      <code>&lt;body&gt;</code>. Changez le fond via le sélecteur <strong>Backgrounds</strong> dans la toolbar.
    </p>
  </article>
</Template>

<Story name="Overview" />

