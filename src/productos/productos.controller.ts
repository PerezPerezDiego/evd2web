import { Request, Response } from "express";
import { ProductService } from "./productos.service";
import { Product } from "./productos.interface";


export class ProductController {
    static async getProducts(_req: Request, res: Response) {
        try {
            const products: Product[] = await ProductService.getProducts();
            res.json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getProductById(req: Request, res: Response) {
        try {
            const productId = req.params.id;
            const product: Product | undefined = await ProductService.getProductById(productId);
            if (!product) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            res.json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // Otros métodos para crear, actualizar y eliminar productos
}