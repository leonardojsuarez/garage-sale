import db from '../db/database.json'
import { ProductList } from '../interfaces'

export const DataService = (): ProductList => {
    return db ?? []
}