'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const useBreadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname?.split('/').filter(Boolean);
  const [resolvedSegments, setResolvedSegments] = useState<string[]>([]);

  const breadcrumbs = segments?.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join('/')}`;
    const isLast = index === segments.length - 1;

    return {
      name: resolvedSegments[index] || decodeURIComponent(segment),
      path,
      isLast,
    };
  });

  return breadcrumbs;
};
