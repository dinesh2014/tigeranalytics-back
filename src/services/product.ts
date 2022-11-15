import { deleteProductsDb, editProductDb, listProductsDb, uploadCsvDb } from "../db/product";
import { CsvInput, editInput } from "../types";


 
export async function uploadCsv(uploadCsv:Array<CsvInput>) {
    try {
        const status = await uploadCsvDb(uploadCsv)
        return status;
        
    } catch (error:any) {
        throw Error(error)
    }  
}

export async function listProducts() {
    try {
        const status = await listProductsDb()
        return status;
        
    } catch (error:any) {
        throw Error(error)
    }  
}

export async function deleteProducts(id:Array<string>) {
    try {
        const status = await deleteProductsDb(id)
        return status;
        
    } catch (error:any) {
        throw Error(error)
    }  
}

export async function editProduct(product:editInput) {
    try {
        const status = await editProductDb(product)
        return status;
        
    } catch (error:any) {
        throw Error(error)
    }  
}
