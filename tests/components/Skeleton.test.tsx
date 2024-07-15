import { render, screen } from '@testing-library/react';
import Skeleton from '../../src/components/Skeleton';
import React from 'react';

describe('Skeleton Component', () => {
  test('Renders the correct number of skeleton items', () => {
    const times = 5;
    render(<Skeleton times={times} />);

    const elements = screen.getAllByRole('presentation');
    expect(elements).toHaveLength(times);
  });

  test('Applies custom className', () => {
    const customClassName = 'bg-test-500';
    render(<Skeleton className={customClassName} />);

    const skeletonItems = screen.getAllByRole('presentation');

    expect(skeletonItems[0]).toHaveClass(customClassName);
  });
})