export interface Direction {
    id_direccion: number;
    CodigoPostal: number;
    Calle: string;
    Colonia: string;
    Num_ext: string;
    Num_int: string;
    Ciudad: string;
    fecha_creacion: Date;   
    fecha_actualizado: Date;
    fk_creado_por: number;
    fk_actualizado: number;
    fecha_eliminacion: Date | null;
    fk_eliminado_por: number | null;
  }