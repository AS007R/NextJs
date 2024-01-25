import { type SchemaTypeDefinition } from 'sanity'
import { students } from './schemas/students'
import { teachers } from './schemas/teachers'
import { news } from './schemas/new'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [students, teachers, news],
}
