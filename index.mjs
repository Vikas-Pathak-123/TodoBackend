import app from './src/app.mjs'
import dotenv from 'dotenv';


dotenv.config();

// const hostname = process.env.HOSTNAME||"localhost";
// const port = process.env.PORT||8080; 
// console.log(hostname);
// console.log(port);
 
app.listen(8080, () => console.log('Server running...... at 8080'));
