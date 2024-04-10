import connection from '../db/mysqlConnection';
import {Session} from './sesiones.interface';

export class SessionService {
    static async getSessions (): Promise<Session[]> {
        return new Promise<Session[]>((resolve, reject) => {
            const query = `SELECT * FROM sesiones`;
            connection.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async getSessionsById(id_sesion: string): Promise<Session | undefined> {
        return new Promise<Session>((resolve, reject) => {
            const query = `SELECT * FROM sesiones WHERE id_sesion = ?`;
            connection.query(query, [id_sesion], (error, results) => {
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