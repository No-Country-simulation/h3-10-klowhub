'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useBreadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname?.split('/').filter(Boolean);
  const [resolvedSegments, setResolvedSegments] = useState<string[]>([]);

  useEffect(() => {
    const fetchSegmentNames = async () => {
      const promises = segments?.map(async (segment) => {
       
        if (segment === 'cursos') {
          return segment; 
        }

        if (/^\d+$/.test(segment)) {
          
          try {
            const response = await fetch(`/api/courses/${segment}`);
            if (response.ok) {
              const data = await response.json();
              return data.name || segment; 
            }
          } catch {
            return segment; 
          }
        }

       
        return decodeURIComponent(segment);
      });

      if (promises) {
        const resolved = await Promise.all(promises);
        setResolvedSegments(resolved);
      }
    };

    fetchSegmentNames();
  }, [segments]);

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
