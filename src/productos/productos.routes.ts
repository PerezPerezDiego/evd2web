import express from 'express';
import { ProductController } from './productos.controller';

const productRouter = express.Router();

// Ruta para obtener todos los productos
productRouter.get('/', ProductController.getProducts);

// Ruta para obtener un producto por su ID
productRouter.get('/:id', ProductController.getProductById);

// Otras rutas para crear, actualizar y eliminar productos
// productRouter.post('/', ProductController.createProduct);
// productRouter.put('/:id', ProductController.updateProduct);
// productRouter.delete('/:id', ProductController.deleteProduct);

export default productRouter;