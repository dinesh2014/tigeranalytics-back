import express, { Request, Response } from 'express';
import csv from 'csvtojson'
import { deleteProducts, editProduct, listProducts, uploadCsv } from '../services/product';



const router = express.Router()

router.post('/upload', async function(req: any, res: Response)
{
    try {
        const file = req.files.data

        const csvFile = await csv().fromString(file.data.toString('utf-8')).then((csvRow)=> csvRow)

       const newFile = csvFile.map((items)=>{
           return {
             store_id:items.store_Id,
             sku:items.sku,
             product_name:items.product_name,
             price:items.price,
             date:items.date
           }
       })

       await uploadCsv(newFile)

        res.status(200).send("")
    } catch(err:any) {
        console.log(err)
        res.status(500).send(err)
    }
})

router.get('/list', async function(req: any, res: Response)
{
    try {

       const products = await listProducts();

        res.status(200).send(products)
    } catch(err:any) {
        console.log(err)
        res.status(500).send(err)
    }
})

router.delete('/delete', async function(req: any, res: Response)
{
    try {
       const {id} = req.body
       let products:any = []
       if(id){
         products = await deleteProducts(id);
       }

        res.status(200).send(products)
    } catch(err:any) {
        console.log(err)
        res.status(500).send(err)
    }
})

router.delete('/edit', async function(req: any, res: Response)
{
    try {
       const {product} = req.body
       let products:any = []
       console.log(req.body)
       if(product){
         products = await editProduct(product);
       }

        res.status(200).send(products)
    } catch(err:any) {
        console.log(err)
        res.status(500).send(err)
    }
})

export default router; 