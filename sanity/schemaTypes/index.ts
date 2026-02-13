import { type SchemaTypeDefinition } from 'sanity'
import { customerType } from './customerType'
import { categoryType } from './categoryType'
import { orderType } from './orderType'
import { productType } from './productType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    customerType,
    productType,
    orderType,
  ],
}
