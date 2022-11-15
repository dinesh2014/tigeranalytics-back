export type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>

export type CsvInput = {
    store_id:string
    sku:string
    product_name:string
    price:number
    date:Date
}

export type editInput = {
    id:string
    product_name:string
    price:number
}