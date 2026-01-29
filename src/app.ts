import "reflect-metadata";
import { AppDataSource } from "./config/database";
import catsRoutes from './routes/cats-routes';
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/cats", catsRoutes);

AppDataSource.initialize()
.then(() => {
  app.listen(PORT, (err) => {
    if (err) {
      console.log('>err', err);
    }
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((error) => console.log(error));

// app.use((req, res, next) => {
//   console.log('AAAA');
//   return next();
// })

// app.get('/some', (r, rs) => {
//   rs.json({ ok: 'da' })
// })

// app.listen(3001, (err) => {
//   if (err) {
//     console.error('err:', err)
//     return
//   }
//   console.log('here')
// })


