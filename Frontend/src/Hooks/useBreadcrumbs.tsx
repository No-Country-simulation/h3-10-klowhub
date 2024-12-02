'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const useBreadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname?.split('/').filter(Boolean);
  const [resolvedSegments] = useState<string[]>([]);



  const breadcrumbs = segments?.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join('/')}`;
    const isLast = index === segments.length - 1;

    console.log(path)

    function capitalizeFirstLetter(string: string) {
      if (!string) return '';
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const segmentCapitalized = capitalizeFirstLetter(segment);


    return {
      name: resolvedSegments[index] || decodeURIComponent(segmentCapitalized).replace(/\//g, '/'),
      path,
      isLast,
    };

  });

  return breadcrumbs;
};
