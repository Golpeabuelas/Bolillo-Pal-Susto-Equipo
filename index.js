import express from 'express';
import morgan from 'morgan';

import { join, dirname} from 'path';
import { fileURLToPath } from 'url';

import router from './src/server_functions/router.js';

import sesiones from './src/server_functions/javascript/user_functions/crud_user.js'; 
import userLoader from './src/server_functions/javascript/user_functions/user_loader.js';

import productos from './src/server_functions/javascript/product_functions/crud_product.js';
import productLoader from './src/server_functions/javascript/product_functions/product_loader.js';

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()

app.set('port', process.env.PORT || 5000);

app.use(morgan('dev'))
app.use(express.urlencoded({ limit: '5mb', extended: true }))
app.use(express.json({ limit: '5mb' }))

app.use('/images', express.static(join(__dirname, './src/public/images')))
app.use('/modulo', express.static(join(__dirname, './src/public/modulos')))
app.use('/scripts', express.static(join(__dirname, './src/server_functions/')))

app.use(router)

app.use(sesiones)
app.use(userLoader)

app.use(productos)
app.use(productLoader)

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, './src/public/modulos/index/index.html'))
});

app.listen(app.get('port'), () => {
    console.log('Server listening on port', app.get('port'));
    console.log('http://localhost:' + app.get('port'));
});