import { Button } from "@/components/ui/button";
import { ivyModeFont } from "@/fonts/font";
import type { HeroBanner, Media } from "@/payload-types";
import Link from "next/link";


function positionButton(buttonPosition: string) {
    switch (buttonPosition) {
        case 'center':
            return 'flex justify-center items-center';
    }
}


const HeroBannerBlock = (props: HeroBanner) => {
    const { style, customClass, buttonPosition, description, images, buttonLink, buttonText, title } = props;

    // Desktop Image
    const image = images?.[0]?.image as Media;
    const desktopImage = image?.url;

    // Mobile Image
    const mobileImage = images?.[1]?.image as Media;
    const mobileImageUrl = mobileImage?.url;


    return (
        <>
            <section style={{ backgroundImage: `url(${desktopImage})` }} className={`${style} ${customClass} hidden md:block bg-fixed relative h-dvh max-h-[768px] w-full bg-cover bg-top bg-no-repeat`}>
                <div className={`absolute inset-0 ${positionButton(buttonPosition || '')} bg-black/25 flex flex-col gap-4 text-white`}>
                    <h1 className={`text-6xl font-medium leading-[115%] text-center ${ivyModeFont.className}`} dangerouslySetInnerHTML={{ __html: title || '' }} />
                    <p className="text-2xl text-center" dangerouslySetInnerHTML={{ __html: description || '' }} />
                    <Link href={buttonLink || ''}>
                        <Button variant="default" className="w-fit mx-auto text-white bg-third-color tracking-wider text-xl! px-6! py-6! rounded-3xl! hover:bg-secondary-color transition-colors duration-200!">
                            {buttonText}
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default HeroBannerBlock;