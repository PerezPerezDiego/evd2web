export interface User {
    id_usuario: number;
    nombre: string;
    fecha_creacion: Date;
    fecha_actualizacion: Date;
    fk_creado_por: number;
    fk_actualizado_por: number;
    fecha_eliminacion: Date | null;
    fecha_eliminado_por: number | null;
}