import connection from '../db/mysqlConnection';
import { SessionProduct } from './sesionesProductos.interface';

export class SessionProductService {
    static async getSessionProduct(): Promise<SessionProduct[]> {
        return new Promise<SessionProduct[]>((resolve, reject) => {
            const query = `SELECT * FROM sesiones_productos`;
            connection.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async getSessionProductById(fk_sesion: string): Promise<SessionProduct | undefined> {
        return new Promise<SessionProduct>((resolve, reject) => {
            const query = `SELECT * FROM sesiones_productos WHERE fk_sesion = ?`;
            connection.query(query, [fk_sesion], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    // Otros métodos para crear, actualizar y eliminar ventas
}