'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const time = 1;
        const path = "/home";
        const redirectToURL = setTimeout(() => {
            router.push(path);
        }, time);

        return () => clearTimeout(redirectToURL);
    }, []);

    return (
        <></>
    )
}