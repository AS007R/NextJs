// schemas/pet.js
export const students = {
  name: 'student',
  type: 'document',
  title: 'Student Profile',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Student Name',
    },
    {
      name: 'age',
      type: 'string',
      title: 'Student age'
    },
    {
      title: 'Hobbies',
      name: 'hobbies',
      type: 'array',
      of: [{type: 'string'}]
    }
  ]
}