import { type SchemaTypeDefinition } from 'sanity'
import { customerType } from './customerType'
import { categoryType } from './categoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    customerType,
    categoryType,
    
  ],
}
