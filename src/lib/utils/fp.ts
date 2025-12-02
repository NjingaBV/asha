// Helpers FP
export const pipe =
	<T>(...fns: Array<(x: T) => T>) =>
	(x: T) =>
		fns.reduce((v, f) => f(v), x);

export const clamp = (min: number, max: number) => (n: number) => Math.min(max, Math.max(min, n));

export const formatCurrency = (amount: number, currency: 'USD' | 'EUR') =>
	new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(amount);
