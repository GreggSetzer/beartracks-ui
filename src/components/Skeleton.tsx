import React from 'react';
import classNames from 'classnames';

interface SkeletonProps {
  times?: number;
  className?: string;
}

const Skeleton = ({times = 3, className = 'h-10 w-full'}: SkeletonProps) => {
  const outerClassNames = classNames(
    'relative',
    'overflow-hidden',
    'bg-gray-200',
    'rounded',
    'mb-2.5',
    className
  );
  const innerClassNames = classNames(
    'animate-shimmer',
    'absolute',
    'inset-0',
    '-translate-x-full',
    'bg-gradient-to-r',
    'from-gray-200',
    'via-white',
    'to-gray-200'
  );

  const skeletonItems = Array(times)
    .fill(0)
    .map((_, i) => (
      <div key={i} className={outerClassNames} role="presentation">
        <div className={innerClassNames} />
      </div>
    ));

  return <div>{skeletonItems}</div>; // Return the array wrapped in a React fragment
};

export default Skeleton;
