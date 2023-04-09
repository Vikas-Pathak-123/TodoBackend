import app from './app.mjs'
import dotenv from 'dotenv';


dotenv.config();

const hostname = process.env.HOSTNAME||"localhost";
const port = process.env.PORT||3000; 
 
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}/:${port}/`);
}); 