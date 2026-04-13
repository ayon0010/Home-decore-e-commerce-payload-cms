import { cn } from '@/utilities/cn'
import React from 'react'

import type { Product } from '@/payload-types'
import ProductCard from '../Card/ProductCard'

/* import { Card } from '../Card' */

export type Props = {
  posts: Product[]
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts } = props

  return (
    <div className={cn('container')}>
      <div>
        <div className="grid grid-cols-5 gap-4">
          {posts?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="" key={index}>
                  <ProductCard product={result} />
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
    </div>
  )
}
