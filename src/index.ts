import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import fileUpload  from 'express-fileupload'
import { port, corsDomains } from "./base";
import productRouter from "./controllers/product"


const app = express();
app.use(fileUpload());
app.use(cors({
  credentials: true,
  allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Set-Cookie,Authorization",
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: (origin, callback) => {
    if (corsDomains.includes(origin) || !origin) {
      callback(null, true)
    } else {
      console.error('request received from ', origin)
      callback(new Error('Not allowed by CORS'))
    }
  },
})) 
app.use(cookieParser())
app.use(morgan('tiny'))

app.use((req, res, next) => {
  // res.header({"Access-Control-Allow-Origin": corsDomains, "Access-Control-Allow-Credentials": true})
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Set-Cookie");
  next();
});

app.use(express.json({limit: '200mb'}));
app.use(express.urlencoded({
  limit: '500mb',
  extended: true
}));


app.use('/product', productRouter);


app.use(function (req, res, next) {
  res.status(404).send('error: 404 Not Found ' + req.path)
})

async function startServer() {
  app.listen(port);
  console.log(`Starting server - http://localhost:${port}`);
}

startServer()