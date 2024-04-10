import express from 'express'
import userRouter from './usuarios/usuarios.routes';
import productRouter from './productos/productos.routes';
import genderRouter from './genero/genero.routes';
import directionRouter from './direccion/direccion.routes';
import sessionRouter from './sesiones/sesiones.routes';
import sessionProductRouter from './sesionesProductos/sesionesProductos.routes';
import clientRouter from './clientes/clientes.routes';
import categoryRouter from './categorias/categorias.routes';


const app = express();

app.use((_req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir solicitudes desde cualquier origen
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'); // Métodos permitidos
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Encabezados permitidos
    next();
});

app.use(express.json())

const PORT = 3000

app.get('/', (_req,res) => {
    res.send('Hello world!!')
});

app.use('/api/usuarios', userRouter);
app.use('/api/productos', productRouter)
app.use('/api/genero',genderRouter)
app.use('/api/direccion',directionRouter)
app.use('/api/sesiones',sessionRouter)
app.use('/api/sesionesProductos',sessionProductRouter)
app.use('/api/clientes',clientRouter)
app.use('/api/categorias',categoryRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});