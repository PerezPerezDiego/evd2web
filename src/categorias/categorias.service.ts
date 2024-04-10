import connection from '../db/mysqlConnection';
import { Category } from './categorias.interface';

export class CategoryService {
    static async getCategory(): Promise<Category[]> {
        return new Promise<Category[]>((resolve, reject) => {
            const query = `SELECT * FROM categorias`;
            connection.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async getCategoryById(ID_Categoria: string): Promise<Category | undefined> {
        return new Promise<Category>((resolve, reject) => {
            const query = `SELECT * FROM categorias WHERE ID_Categoria = ?`;
            connection.query(query, [ID_Categoria], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    // Otros métodos para crear, actualizar y eliminar clientes
}