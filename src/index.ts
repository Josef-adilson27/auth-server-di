import 'reflect-metadata';
import { server } from './container.js'
import { connectDB } from './dataBase/mongoDb.js';


await connectDB();
await server.start(3000);