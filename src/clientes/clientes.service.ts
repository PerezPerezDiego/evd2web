import connection from '../db/mysqlConnection';
import { Client } from './clientes.interface';

export class ClientService {
    static async getClient(): Promise<Client[]> {
        return new Promise<Client[]>((resolve, reject) => {
            const query = `SELECT * FROM clientes`;
            connection.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async getClientById(id_cliente: string): Promise<Client | undefined> {
        return new Promise<Client>((resolve, reject) => {
            const query = `SELECT * FROM clientes WHERE id_cliente = ?`;
            connection.query(query, [id_cliente], (error, results) => {
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