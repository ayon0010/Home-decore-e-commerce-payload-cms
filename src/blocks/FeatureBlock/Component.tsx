import { ivyModeFont } from "@/fonts/font";
import type { FeatureBlock as FeatureBlockType, Media } from "@/payload-types";
import Image from "next/image";

const FeatureBlock = (props: FeatureBlockType) => {
    const { style, customClass, features } = props;
    return (
        <section className={`${style} ${customClass} bg-secondary-color py-10`}>
            <article className="container grid grid-cols-4">
                {
                    features?.map((feature) => {
                        const icon = feature.icon as Media;
                        const iconUrl = icon?.url;
                        return (
                            <article key={feature.id} className="flex item-center justify-center">
                                <div className="flex flex-col gap-2">
                                    <Image src={iconUrl as string} alt={feature.title || ''} width={50} height={50} className="w-[50px] h-[50px] mx-auto" />
                                    <span className={`text-white block text-center text-lg font-light tracking-wide ${ivyModeFont.className}`} dangerouslySetInnerHTML={{ __html: feature.title || '' }} />
                                </div>
                            </article>
                        )
                    })
                }
            </article>
        </section>
    )
}

export default FeatureBlock;