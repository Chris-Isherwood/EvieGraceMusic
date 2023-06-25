export default {
  name: 'navItem',
  type: 'document',
  title: 'NavItem',
  fields: [
    {
      name: 'order',
      type: 'number',
      title: 'Order',
      validation: (Rule: any) => Rule.required().min(1),
      description: 'The order of the nav item (low = left or top, high = right or bottom)',
    },
    {
      name: 'text',
      type: 'string',
      title: 'Text',
      validation: (Rule: any) =>
        Rule.required().min(1).max(15).error('Must be between 1 and 10 characters'),
      description: 'The text on the button',
    },
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      validation: (Rule: any) =>
        Rule.required().custom((type: string) => {
          return ['link', 'dropdown'].includes(type) ? true : 'Available: link or dropdown'
        }),
      description: 'The type of nav item',
    },
    {
      name: 'href',
      type: 'url',
      title: 'href',
      description: 'The URL to link to',
      hidden: ({document}: any) => document.type !== 'link',
    },
    {
      name: 'parent',
      type: 'string',
      title: 'Parent',
      hidden: ({document}: any) => document.type === 'dropdown',
      description: 'The name of the parent dropdown menu',
    },
  ],
}
