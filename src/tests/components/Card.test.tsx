import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '@/components/ui/Card';

describe('Card Component', () => {
  it('renders children correctly', () => {
    render(
      <Card>
        <h2>Test Title</h2>
        <p>Test content</p>
      </Card>
    );
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<Card data-testid="card">Test Content</Card>);
    
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('bg-white', 'rounded-lg');
  });

  it('applies different padding sizes', () => {
    const { rerender } = render(
      <Card padding="sm" data-testid="card">Small Padding</Card>
    );
    expect(screen.getByTestId('card')).toHaveClass('p-4');

    rerender(
      <Card padding="md" data-testid="card">Medium Padding</Card>
    );
    expect(screen.getByTestId('card')).toHaveClass('p-6');

    rerender(
      <Card padding="lg" data-testid="card">Large Padding</Card>
    );
    expect(screen.getByTestId('card')).toHaveClass('p-8');
  });

  it('applies different shadow sizes', () => {
    const { rerender } = render(
      <Card shadow="sm" data-testid="card">Small Shadow</Card>
    );
    expect(screen.getByTestId('card')).toHaveClass('shadow-sm');

    rerender(
      <Card shadow="md" data-testid="card">Medium Shadow</Card>
    );
    expect(screen.getByTestId('card')).toHaveClass('shadow');

    rerender(
      <Card shadow="lg" data-testid="card">Large Shadow</Card>
    );
    expect(screen.getByTestId('card')).toHaveClass('shadow-lg');
  });

  it('accepts custom className', () => {
    render(
      <Card className="custom-class" data-testid="card">
        Custom Card
      </Card>
    );
    
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('custom-class');
    expect(card).toHaveClass('bg-white', 'rounded-lg'); // Still has default classes
  });
});
