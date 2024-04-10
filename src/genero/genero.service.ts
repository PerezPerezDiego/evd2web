import connection from '../db/mysqlConnection';
import { Gender } from './genero.interface';

export class GenderService {
    static async getGenders(): Promise<Gender[]> {
        return new Promise<Gender[]>((resolve, reject) => {
            const query = `SELECT * FROM genero`;
            connection.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async getGenderById(id_genero: string): Promise<Gender | undefined> {
        return new Promise<Gender>((resolve, reject) => {
            const query = `SELECT * FROM genero WHERE id_genero = ?`;
            connection.query(query, [id_genero], (error, results) => {
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