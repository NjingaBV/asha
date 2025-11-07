# 🚀 Testing Quick Start - Démarrage Rapide

Ajoutez des tests d'interaction à vos composants en **5 minutes**!

---

## ⚡ Résumé en 30 secondes

```bash
# 1. Lancer Storybook
npm run storybook

# 2. Ouvrir une story
# Exemple: Atoms > Button > Default

# 3. Vous verrez un panneau "Interactions"
# Vos tests affichent des ✅ si ça marche!
```

---

## 📋 Étape 1: Importer les outils

Ouvrez `src/stories/atoms/[YourComponent].stories.ts` et ajoutez:

```typescript
import { expect, userEvent, within } from '@storybook/test';
```

---

## 🎯 Étape 2: Ajouter un play() à une story

Trouvez une story et ajoutez `play()`:

```typescript
export const Default: Story = {
  args: { /* ... */ },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // ✅ Voilà! Vos premiers tests!
  }
};
```

---

## 🔍 Étape 3: Tester le rendu (copier-coller)

### Pour une **Button**:
```typescript
play: async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');

  await expect(button).toBeInTheDocument();
  await expect(button).toBeVisible();
}
```

### Pour une **Badge**:
```typescript
play: async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const badge = canvas.getByText('New');

  await expect(badge).toBeInTheDocument();
  await expect(badge).toBeVisible();
}
```

### Pour une **Heading**:
```typescript
play: async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const heading = canvas.getByRole('heading', { level: 1 });

  await expect(heading).toBeInTheDocument();
  await expect(heading.tagName).toBe('H1');
}
```

---

## 🖱️ Étape 4: Ajouter des interactions

### Tester un **clic**:
```typescript
const button = canvas.getByRole('button');
await userEvent.click(button);
await expect(button).toHaveFocus();
```

### Tester une **saisie** dans un input:
```typescript
const input = canvas.getByLabelText('Email');
await userEvent.type(input, 'test@example.com');
await expect(input).toHaveValue('test@example.com');
```

### Tester le **clavier**:
```typescript
await userEvent.tab();  // Focus l'élément suivant
await userEvent.keyboard('{Enter}');  // Appuyer sur Entrée
await userEvent.keyboard('{Escape}');  // Appuyer sur Échapper
```

---

## ♿ Étape 5: Tester l'accessibilité (optionnel mais important!)

```typescript
// Vérifier que le bouton a un nom accessible
await expect(button).toHaveAccessibleName('Click me');

// Vérifier que l'input a un label
const input = canvas.getByLabelText('Email');
await expect(input).toBeInTheDocument();

// Vérifier que le heading est correct
const heading = canvas.getByRole('heading', { level: 1 });
await expect(heading).toBeInTheDocument();
```

---

## 📊 Résultats

Une fois que vous lancez `npm run storybook`, vous verrez:

```
Interactions Panel:
✅ renders button  (si ça marche)
❌ renders button  (si ça échoue)
```

---

## 🎨 Exemples Complets

### Button - Exemple Complet
```typescript
export const Default: Story = {
  args: { children: 'Click me' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /click me/i });

    // Rendu
    await expect(button).toBeInTheDocument();
    await expect(button).toBeVisible();

    // Interaction
    await userEvent.click(button);
    await expect(button).toHaveFocus();

    // Accessibilité
    await expect(button).toHaveAccessibleName('Click me');
  }
};

export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    // État
    await expect(button).toBeDisabled();
  }
};
```

### Badge - Exemple Simple
```typescript
export const Primary: Story = {
  args: { label: 'New' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText('New');

    await expect(badge).toBeInTheDocument();
    await expect(badge).toBeVisible();
  }
};
```

### Form Input - Avec Validation
```typescript
export const Default: Story = {
  args: { label: 'Email', type: 'email' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Email');

    // Saisie
    await userEvent.type(input, 'test@example.com');
    await expect(input).toHaveValue('test@example.com');

    // Accessibilité
    await expect(input).toHaveAccessibleName('Email');
  }
};
```

---

## 🔎 Trouver les Bons Sélecteurs

Si vous ne savez pas quel sélecteur utiliser:

```typescript
// Pour un bouton
canvas.getByRole('button', { name: /your text/i })

// Pour un lien
canvas.getByRole('link', { name: /your text/i })

// Pour un heading
canvas.getByRole('heading', { name: /your text/i })

// Pour un input avec label
canvas.getByLabelText('Email')

// Pour un texte quelconque
canvas.getByText('Your text')

// Si rien ne marche, utilisez debug() pour voir le DOM:
canvas.debug()
```

---

## ✅ Checklist Rapide

- [ ] Importer `{ expect, userEvent, within } from '@storybook/test'`
- [ ] Ajouter `play()` async à une story
- [ ] Vérifier le rendu: `getByRole()` + `toBeInTheDocument()`
- [ ] Tester une interaction: `click()`, `type()`, etc.
- [ ] Tester l'accessibilité: `toHaveAccessibleName()`
- [ ] Lancer `npm run storybook` et voir les ✅

---

## 📝 Patterns Les Plus Courants

```typescript
// Pattern 1: Test simple de rendu
const element = canvas.getByRole('...');
await expect(element).toBeInTheDocument();

// Pattern 2: Tester un clic
await userEvent.click(element);
await expect(element).toHaveFocus();

// Pattern 3: Tester une saisie
await userEvent.type(input, 'texte');
await expect(input).toHaveValue('texte');

// Pattern 4: Tester l'état
await expect(element).toBeDisabled();
await expect(element).toHaveAttribute('disabled');

// Pattern 5: Tester l'accessibilité
await expect(element).toHaveAccessibleName('name');
await expect(element).toHaveAttribute('aria-label', 'label');
```

---

## 🆘 Problèmes Courants

### "Element not found"
```typescript
// ❌ Mauvais
canvas.getByText('Click')  // Sensible à la casse

// ✅ Bon
canvas.getByRole('button', { name: /click/i })  // Case-insensitive
```

### "Role button not found"
```typescript
// Vérifiez que c'est vraiment un bouton
// Ou utilisez un autre sélecteur:
canvas.getByText('My Button')
```

### Les tests ne s'exécutent pas
```typescript
// ❌ Mauvais
play: ({ canvasElement }) => {  // Pas async!

// ✅ Bon
play: async ({ canvasElement }) => {
```

---

## 🎯 Prochain Pas

1. ✅ Lisez ce quick start
2. ✅ Ouvrez `src/stories/atoms/Button.stories.ts`
3. ✅ Lancez `npm run storybook`
4. ✅ Trouvez la story "Default"
5. ✅ Voyez comment les tests ✅ apparaissent
6. ✅ Copiez-collez un pattern pour votre composant
7. ✅ Adaptez pour votre cas d'usage

**Temps estimé:** 5-10 minutes

---

## 📚 Besoin d'aide?

- **Patterns détaillés**: Voir `docs/TESTING_EXAMPLES.md`
- **Stratégie complète**: Voir `docs/TESTING_STRATEGY.md`
- **Implémentation**: Voir `docs/TESTING_IMPLEMENTATION.md`
- **Exemples réels**: Voir `src/stories/atoms/Button.stories.ts`

---

## 🚀 Bon à savoir

- Les tests s'exécutent **automatiquement** dans Storybook
- Pas besoin de ligne de commande supplémentaire
- Les ✅ apparaissent dans le panneau "Interactions"
- Les ❌ indiquent un problème avec le composant ou le test

---

Allez-y! Testez votre premier composant maintenant! 🎉
