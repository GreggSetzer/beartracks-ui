import React from 'react';
import Skeleton from './Skeleton';

interface SkeletonGridProps {
  count?: number;
}

const SkeletonGrid = ({ count = 4 }: SkeletonGridProps) => {
  const skeletons = [];

  for (let i = 0; i < count; i++) {
    skeletons.push(<Skeleton key={i} className="h-10 w-full" times={3} />);
  }

  return <>{skeletons}</>;
};

export default SkeletonGrid;
