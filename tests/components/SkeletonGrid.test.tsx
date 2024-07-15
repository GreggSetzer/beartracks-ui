import React from 'react';
import { render, screen } from '@testing-library/react';
import SkeletonGrid from '../../src/components/SkeletonGrid';

jest.mock('../../src/components/Skeleton', () => {
  return function DummySkeleton(props: { className: string; times: number }) {
    return (
      <div data-testid="skeleton" className={props.className}>
        Skeleton
      </div>
    );
  };
});

describe('SkeletonGrid', () => {
  test('Renders the correct number of Skeleton components', () => {
    const count = 5;
    render(<SkeletonGrid count={count} />);

    // Check if the correct number of Skeleton components are rendered
    const skeletonItems = screen.getAllByTestId('skeleton');
    expect(skeletonItems).toHaveLength(count);
  });

  test('Renders default number of Skeleton components when count is not provided', () => {
    render(<SkeletonGrid />);

    const skeletonItems = screen.getAllByTestId('skeleton');
    expect(skeletonItems).toHaveLength(4);
  });
});
