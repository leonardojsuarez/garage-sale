import json from '../db/database.ts'
import { ProductList } from '../interfaces'

export const DataService = (): ProductList => {
    return json ?? []
}