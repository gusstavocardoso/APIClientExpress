import express from 'express';
import clietesRouter from './routes/clients'
import methodOverride from 'method-override';
import db from './db'

const app = express();
const port = parseInt(`${process.env.PORT}`);

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(clietesRouter);
app.set('view engine', 'pug');
app.set('views', './views');


db.sync().then(() => {
    console.log(`Contectado com sucesso ao banco: ${process.env.DB_NAME}`);   
}).then(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
});

