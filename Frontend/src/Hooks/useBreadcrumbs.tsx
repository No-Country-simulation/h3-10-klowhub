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

    function capitalizeFirstLetter(string: string) {
      if (!string) return ''; // Maneja cadenas vacías o valores falsy
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const segmentCapitalized = capitalizeFirstLetter(segment); // Capitaliza el segmento
    console.log(segmentCapitalized);

    return {
      name: resolvedSegments[index] || decodeURIComponent(segmentCapitalized), // Usa el segmento capitalizado
      path,
      isLast,
    };
  });

  return breadcrumbs;
};
