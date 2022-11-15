import prisma from '../db'
import { CsvInput, editInput } from '../types'


export async function uploadCsvDb(csv:Array<CsvInput>){
    let priceDetails;
    try {
         for(let i=0 ; i<csv.length ; i++){

            const project = await prisma.priceDetails.findFirst({
                where:{
                    AND: [
                        {store_id:csv[i].store_id,},
                        { product_name:csv[i].product_name },
                      ],
                }
            })

            if(project) continue;

            
           try {
            const newDate = new Date(csv[i].date)
            priceDetails= await prisma.priceDetails.create({
                data:{
                    store_id:String(csv[i].store_id),
                    sku:String(csv[i].sku),
                    product_name:String(csv[i].product_name),
                    price:Number(csv[i].price),
                    Date: newDate
                }                                                                                                                                                                                       
            })          
           } catch (error) {
              continue;
           }
            
         }
       
    } catch (error:any) {
        // continue;
        throw Error(error)
    }

    return priceDetails

}

export async function listProductsDb(){
    try {
        const project = await prisma.priceDetails.findMany()
        return project
    } catch (error:any) {
        // continue;
        throw Error(error)
    }
}

export async function deleteProductsDb(id:Array<string>){
    try {
        const project = await prisma.priceDetails.deleteMany({
            where:{
                id:{
                    in:id
                }
            }
        })
        return project
    } catch (error:any) {
        // continue;
        throw Error(error)
    }
}

export async function editProductDb(product:editInput){
    try {
        const project = await prisma.priceDetails.update({
            where:{
                id:product.id
            },
            data:{
                product_name:product.product_name,
                price:product.price
            }
        })
        return project
    } catch (error:any) {
        // continue;
        throw Error(error)
    }
}
