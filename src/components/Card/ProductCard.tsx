import type { Media, Product } from '@/payload-types';
import { Star, StarHalfIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }: { product: Product }) => {
    console.log(product);

    const { gallery, title, slug } = product;
    const firstImage = gallery?.[0]?.image as Media;
    const firstImageUrl = firstImage?.url as string;
    const secondImage = gallery?.[1]?.image as Media;
    const secondImageUrl = secondImage?.url as string;

    return (
        <Link href={`/products/${slug}`} className="bg-[#F0F0E8]! block rounded-lg overflow-hidden">
            <div className="relative w-full group">
                <div className="relative w-full">
                    <Image
                        src={firstImageUrl}
                        alt={firstImage?.alt as string}
                        className={`aspect-square object-cover w-full transition-opacity duration-500 ease-in-out ${secondImageUrl ? 'opacity-100 group-hover:opacity-0' : ''}`}
                        width={273}
                        height={273}
                        style={{ transitionDelay: secondImageUrl ? '0ms' : undefined }}
                    />
                    {secondImageUrl && (
                        <Image
                            src={secondImageUrl}
                            alt={secondImage?.alt as string}
                            className="aspect-square object-cover w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                            width={273}
                            height={273}
                            style={{ transitionDelay: '50ms' }}
                        />
                    )}
                </div>

                <div className="absolute left-0 bottom-0 text-sm text-white bg-[#BC106A] px-2 py-1 uppercase">
                    up to 20% off
                </div>
            </div>
            <div className="px-5 py-6 space-y-2">
                <h3 className="text-base" dangerouslySetInnerHTML={{
                    __html: title ||
                        ''
                }} />
                <div className="text-sm">
                    from <span className="text-xl ml-1">$340</span>   <span className="line-through text-sm ml-2">$425</span>
                </div>
                <div className="flex items-center gap-1">
                    <Star className="size-4 stroke-third-color" fill="#C99383" />
                    <Star className="size-4 stroke-third-color" fill="#C99383" />
                    <Star className="size-4 stroke-third-color" fill="#C99383" />
                    <Star className="size-4 stroke-third-color" fill="#C99383" />
                    <StarHalfIcon className="size-4 stroke-third-color" fill="#C99383" />
                    <span className="block text-sm">
                        159 reviews
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard