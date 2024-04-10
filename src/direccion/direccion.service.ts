import connection from '../db/mysqlConnection';
import { Direction } from './direccion.interface';

export class DirectionService {
    static async getDirection(): Promise<Direction[]> {
        return new Promise<Direction[]>((resolve, reject) => {
            const query = `SELECT * FROM direccion`;
            connection.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async getDirectionById(id_direccion: string): Promise<Direction | undefined> {
        return new Promise<Direction>((resolve, reject) => {
            const query = `SELECT * FROM direccion WHERE id_direccion = ?`;
            connection.query(query, [id_direccion], (error, results) => {
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