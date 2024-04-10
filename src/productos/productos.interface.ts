export interface Product {
    id_producto: number;
    descripcion: string;
    precio: number;
    fk_categoria: number;
    fecha_creacion: Date;
    fecha_actualizacion: Date;
    fk_creado_por: number;
    fk_actualizado: number;
    fecha_eliminacion: Date | null;
    fk_eliminado_por: number | null;
  }