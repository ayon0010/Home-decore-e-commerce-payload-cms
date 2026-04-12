import type { GlobalConfig } from 'payload'

import { adminOnly } from '@/access/adminOnly'
import { revalidateHeader } from '@/components/Header/hooks/revalidateHeader'
import { link } from '@/fields/link'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
    update: adminOnly,
  },
  hooks: {
    afterChange: [revalidateHeader],
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'showTopBar',
      type: 'checkbox',
      defaultValue: true,
      label: 'Enable Top Bar',
    },
    {
      name: 'topBar',
      type: 'group',
      label: 'Top Bar Settings',
      admin: {
        condition: (data) => data.showTopBar,
      },
      fields: [
        {
          type: 'row', // Places these fields side-by-side in the Admin UI
          fields: [
            {
              name: 'phone',
              type: 'text',
              label: 'Contact Number',
            },
            {
              name: 'email',
              type: 'text',
              label: 'Email Address',
            },
          ],
        },
        {
          name: 'address',
          type: 'text',
          label: 'Physical Address',
        },
      ],
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
    },
  ],
}
