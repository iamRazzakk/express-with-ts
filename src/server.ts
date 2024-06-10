import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
import { server } from "http"


let server: server

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`app is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();


// For async
process.on("unhandledRejection", () => {
  if (server) {
    console.log(`:) unhandledRejection is detected shutting down server`)
    server.close(() => {
      process.exit(1)
    })
  }
  process.exit(1)
})

// For sync 
process.on("uncaughtException", () => {
  console.log(`:) unhandledRejection is detected shutting down server`)
  process.exit(1)
})