export interface Category {
    ID_Categoria: number;
    nombre: string;
    fecha_creacion: Date;
    fecha_actualizado: Date;
    fk_creado_por: number;
    fk_actualizado: number;
    fecha_eliminacion: Date | null;
    fk_eliminado_por: number | null;
  }