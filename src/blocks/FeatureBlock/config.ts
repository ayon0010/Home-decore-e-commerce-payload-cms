import type { Block } from "payload";

export const featureBlockConfig: Block = {
    slug: 'featureBlock',
    interfaceName: 'FeatureBlock',
    labels: {
        singular: 'Feature Block',
        plural: 'Feature Blocks',
    },
    fields: [
        {
            name: 'style',
            type: 'text',
            defaultValue: 'feature-block',
            admin: {
                readOnly: true
            }
        },
        {
            name: 'customClass',
            type: 'text',
        },
        {
            name: 'features',
            type: 'array',
            maxRows: 4,
            fields: [
                {
                    name: 'title',
                    type: 'text',
                },
                {
                    name: 'icon',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                }
            ],
        },
    ]
}