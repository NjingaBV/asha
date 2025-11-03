import DOMPurify from 'dompurify';

/**
 * Sanitize HTML content to prevent XSS attacks
 * @param dirty - The potentially unsafe HTML string
 * @returns Sanitized HTML string safe for rendering
 */
export function sanitizeHtml(dirty: string): string {
	if (typeof window === 'undefined') {
		// Server-side: return empty string or the content as-is depending on your SSR strategy
		// For now, we'll return empty to be safe
		return '';
	}
	return DOMPurify.sanitize(dirty, {
		// Allow common HTML tags for rich text content
		ALLOWED_TAGS: [
			'p',
			'br',
			'strong',
			'em',
			'u',
			'h1',
			'h2',
			'h3',
			'h4',
			'h5',
			'h6',
			'ul',
			'ol',
			'li',
			'a',
			'blockquote',
			'code',
			'pre',
			'span',
			'div'
		],
		ALLOWED_ATTR: ['href', 'target', 'rel', 'class']
	});
}

/**
 * Sanitize SVG content to prevent XSS attacks
 * @param dirty - The potentially unsafe SVG string
 * @returns Sanitized SVG string safe for rendering
 */
export function sanitizeSvg(dirty: string): string {
	if (typeof window === 'undefined') {
		return '';
	}
	return DOMPurify.sanitize(dirty, {
		USE_PROFILES: { svg: true, svgFilters: true },
		ALLOWED_TAGS: ['svg', 'path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'g'],
		ALLOWED_ATTR: [
			'd',
			'fill',
			'stroke',
			'stroke-width',
			'stroke-linecap',
			'stroke-linejoin',
			'viewBox',
			'xmlns',
			'width',
			'height',
			'cx',
			'cy',
			'r',
			'x',
			'y',
			'x1',
			'y1',
			'x2',
			'y2',
			'points',
			'transform'
		]
	});
}
