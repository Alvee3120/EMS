import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; 


import authRouter from './routes/auth.js'
import connectToDatabse from './db/db.js';

connectToDatabse();

dotenv.config(); 

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send({ message: "  server is running " });
});

app.use('/api/auth', authRouter)


connectToDatabse().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`listening from port ${process.env.PORT}`);
  });
});
  
