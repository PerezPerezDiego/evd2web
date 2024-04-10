import connection from '../db/mysqlConnection';
import { Product } from './productos.interface';

export class ProductService {
    static async getProducts(): Promise<Product[]> {
        return new Promise<Product[]>((resolve, reject) => {
            const query = `SELECT * FROM productos`;
            connection.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async getProductById(id_producto: string): Promise<Product | undefined> {
        return new Promise<Product>((resolve, reject) => {
            const query = `SELECT * FROM productos WHERE id_producto = ?`;
            connection.query(query, [id_producto], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    // Otros métodos para crear, actualizar y eliminar productos
}