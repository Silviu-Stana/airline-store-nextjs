import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Prefetcher({ route }: { route: string }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    if (!show) return null;

    return <Link href={route} prefetch></Link>;
}
