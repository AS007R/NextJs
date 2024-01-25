// schemas/pet.js
export const news = {
  name: 'news',
  type: 'document',
  title: 'news',
  fields: [
    
    {
      title: 'Hobbies',
      name: 'hobbies',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }
  ]
}