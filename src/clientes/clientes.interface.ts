export interface Client {
    id_cliente: number;
    nombre: string;
    apellido: string;
    fecha_nacimiento: Date;
    fk_genero: number;
    telefono: number;
    correo: string;
    fk_direccion: number;
    fecha_creación: Date;
    fecha_actualizacion: Date;
    fk_creado_por: number;
    fk_actualizado: number;
    fecha_eliminado: Date | null;
    fk_eliminado: number | null;

  }