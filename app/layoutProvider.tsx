'use client'

import { usePathname } from 'next/navigation';
import Nav from '@/components/Nav';
import { Share_Tech_Mono } from 'next/font/google';

const share_tech_mono = Share_Tech_Mono({
    subsets: ['latin'],
    weight: ['400'],
})

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    return (
        <>
            {pathname !== "/course/" && pathname !== "/course" &&
                <div className={share_tech_mono.className}>
                    <Nav />
                </div>}
            {children}
        </>
    )
};