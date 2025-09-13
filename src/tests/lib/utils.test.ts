import { formatPrice, formatDate, truncateText, isValidEmail, slugify } from '@/lib/utils';

describe('Utils Functions', () => {
  describe('formatPrice', () => {
    it('formats price correctly in USD', () => {
      expect(formatPrice(100)).toBe('100,00 US$');
      expect(formatPrice(1234.56)).toBe('1.234,56 US$');
    });

    it('formats price with different currency', () => {
      expect(formatPrice(100, 'EUR')).toBe('100,00 €');
    });
  });

  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = new Date('2023-12-25');
      const formatted = formatDate(date);
      expect(formatted).toContain('25');
      expect(formatted).toContain('diciembre');
      expect(formatted).toContain('2023');
    });

    it('formats string date correctly', () => {
      const formatted = formatDate('2023-12-25');
      expect(formatted).toContain('25');
      expect(formatted).toContain('diciembre');
      expect(formatted).toContain('2023');
    });
  });

  describe('truncateText', () => {
    it('truncates text when longer than maxLength', () => {
      const text = 'This is a very long text that should be truncated';
      expect(truncateText(text, 10)).toBe('This is a...');
    });

    it('returns original text when shorter than maxLength', () => {
      const text = 'Short text';
      expect(truncateText(text, 20)).toBe('Short text');
    });

    it('returns original text when exactly maxLength', () => {
      const text = 'Exactly ten';
      expect(truncateText(text, 11)).toBe('Exactly ten');
    });
  });

  describe('isValidEmail', () => {
    it('validates correct email addresses', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
      expect(isValidEmail('test+label@example.org')).toBe(true);
    });

    it('rejects invalid email addresses', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('test.example.com')).toBe(false);
    });
  });

  describe('slugify', () => {
    it('converts text to slug format', () => {
      expect(slugify('Hello World')).toBe('hello-world');
      expect(slugify('Product Name 123')).toBe('product-name-123');
    });

    it('handles special characters', () => {
      expect(slugify('Hello, World!')).toBe('hello-world');
      expect(slugify('Título con acentos')).toBe('titulo-con-acentos');
    });

    it('handles multiple spaces and dashes', () => {
      expect(slugify('Multiple   Spaces')).toBe('multiple-spaces');
      expect(slugify('--Leading--and--trailing--')).toBe('leading-and-trailing');
    });
  });
});
