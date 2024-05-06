import mongoose from "mongoose";

interface ConnectionOptions {
  mongoURL: string;
  dbName: string;
}

export class MongoDB {
  static async connect(options: ConnectionOptions) {
    const { mongoURL, dbName } = options;

    try {
      await mongoose.connect(mongoURL, { dbName });
      console.log("mongo connected");
    } catch (e) {
      console.log("Mongo connection error");
      throw e;
    }
  }
}
