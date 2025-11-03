import { describe, it, expect, beforeEach, vi } from 'vitest';
import { sanitizeHtml, sanitizeSvg } from './sanitize';

describe('sanitize utilities', () => {
	describe('sanitizeHtml', () => {
		beforeEach(() => {
			// Mock window for browser environment
			vi.stubGlobal('window', {});
		});

		it('should sanitize malicious script tags', () => {
			const dirty = '<p>Hello</p><script>alert("XSS")</script>';
			const clean = sanitizeHtml(dirty);
			expect(clean).not.toContain('script');
			expect(clean).not.toContain('alert');
		});

		it('should allow safe HTML tags', () => {
			const dirty = '<p>Hello <strong>World</strong></p>';
			const clean = sanitizeHtml(dirty);
			expect(clean).toContain('<p>');
			expect(clean).toContain('<strong>');
		});

		it('should remove event handlers', () => {
			const dirty = '<p onclick="alert(\'XSS\')">Click me</p>';
			const clean = sanitizeHtml(dirty);
			expect(clean).not.toContain('onclick');
		});
	});

	describe('sanitizeSvg', () => {
		beforeEach(() => {
			// Mock window for browser environment
			vi.stubGlobal('window', {});
		});

		it('should sanitize malicious SVG content', () => {
			const dirty = '<path d="M10 10"/><script>alert("XSS")</script>';
			const clean = sanitizeSvg(dirty);
			expect(clean).not.toContain('script');
			expect(clean).not.toContain('alert');
		});

		it('should allow safe SVG tags', () => {
			const dirty = '<path d="M10 10 L20 20"/>';
			const clean = sanitizeSvg(dirty);
			expect(clean).toContain('path');
			expect(clean).toContain('d=');
		});
	});
});
