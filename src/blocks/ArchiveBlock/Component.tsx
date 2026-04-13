import type { ArchiveBlock as ArchiveBlockProps, Product } from '@/payload-types'

import { RichText } from '@/components/RichText'
import configPromise from '@payload-config'
import { DefaultDocumentIDType, getPayload } from 'payload'
import React from 'react'

import { CollectionArchive } from '@/components/CollectionArchive'
import { ivyModeFont } from '@/fonts/font'

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: DefaultDocumentIDType
    className?: string
  }
> = async (props) => {
  const { id, categories, introContent, limit: limitFromProps, populateBy, selectedDocs } = props

  const limit = limitFromProps || 3

  let posts: Product[] = []

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise })

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object') return category.id
      else return category
    })

    const fetchedProducts = await payload.find({
      collection: 'products',
      depth: 1,
      draft: false,
      limit,
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
          where: {
            categories: {
              in: flattenedCategories,
            },
            _status: {
              equals: 'published',
            },
          },
        }
        : {
          where: {
            _status: {
              equals: 'published',
            },
          },
        }),
    })

    posts = fetchedProducts.docs
  } else {
    if (selectedDocs?.length) {
      const filteredSelectedPosts = selectedDocs.map((post) => {
        if (typeof post.value === 'object') return post.value
      }) as Product[]
      posts = filteredSelectedPosts
    }
  }

  console.log(posts);


  return (
    <div className="my-16" id={`block-${id}`}>
      {introContent && (
        <div className="container mb-10">
          <RichText className={`ml-0 ${ivyModeFont.className} text-4xl`} data={introContent} enableGutter={false} />
        </div>
      )}
      <CollectionArchive posts={posts} />
    </div>
  )
}
