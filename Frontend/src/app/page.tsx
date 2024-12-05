'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const RedirectToHome = () => {
    const router = useRouter();
    const isAuthenticated = useState(false)

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/home');
        } else {
            router.push('/login'); 
        }
    }, [router, isAuthenticated]);

    return null; // No se renderiza nada
};

export default RedirectToHome;
