import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

let server;
const PORT = 4000;
async function serverBootstrap() {
  try {
    // await mongoose.connect();
    await mongoose.connect(config.database_url as string);
    server = app.listen(config.port, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
serverBootstrap();
