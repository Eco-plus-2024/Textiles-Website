"use client"; // Ensures this file is treated as a Client Component

import React, { useEffect, useState, ComponentType } from 'react';
import { useRouter } from 'next/navigation'; // Use `next/navigation` for routing in App Router

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const ComponentWithAuth = (props: P) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const verifyToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/login');
          return;
        }

        try {
          const response = await fetch('/api/verify-token', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error('Token invalid');
          }

          setIsLoading(false);
        } catch (error) {
          console.error('Authentication error:', error);
          localStorage.removeItem('token');
          router.push('/login');
        }
      };

      verifyToken();
    }, [router]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
