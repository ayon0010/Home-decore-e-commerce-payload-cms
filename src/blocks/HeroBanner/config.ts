import type { Block } from 'payload'

export const HeroBanner: Block = {
    slug: 'heroBanner',
    interfaceName: 'HeroBanner',
    labels: {
        singular: 'Hero Banner',
        plural: 'Hero Banners',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'style',
            type: 'text',
            defaultValue: 'hero-banner',
            admin: {
                readOnly: true
            }
        },
        {
            name: 'customClass',
            type: 'text',
        },
        {
            name: 'buttonPosition',
            type: 'select',
            options: [
                { label: 'Left', value: 'left' },
                { label: 'Center', value: 'center' },
                { label: 'Right', value: 'right' },
            ],
            defaultValue: 'center',
        },
        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'images',
            type: 'array',
            label: 'Hero Banner Images',
            minRows: 1,
            maxRows: 2,
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
            ],
        },
        {
            name: 'buttonText',
            type: 'text',
        },
        {
            name: 'buttonLink',
            type: 'text',
        },
    ],
}