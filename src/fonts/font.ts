import { Sofia_Sans } from 'next/font/google'
import localFont from 'next/font/local'

/** Marque / titres (header). */
export const ivyModeFont = localFont({
    src: [
        {
            path: '../../public/fonts/IvyMode-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/IvyMode-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/IvyMode-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-ivy-mode',
    display: 'swap',
})


export const sofiaPro = Sofia_Sans({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-sofia-pro',
    display: 'swap',
})