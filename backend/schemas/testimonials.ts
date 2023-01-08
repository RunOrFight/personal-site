export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      tiltle: 'Name',
      type: 'string',
    },
    {
      name: 'company',
      tiltle: 'Company',
      type: 'string',
    },
    {
      name: 'imageurl',
      tiltle: 'ImageURL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'feedback',
      tiltle: 'Feedback',
      type: 'string',
    },
  ],
}
