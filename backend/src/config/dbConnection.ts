import mongoose, { ConnectOptions } from "mongoose";

const dbConnection = async () => {
const uri: string = process.env.MONGO_URL
await mongoose
      .connect(uri!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        poolSize: parseInt(process.env.POOL_SIZE!),
      } as ConnectOptions)
      .then((res) => {
        console.log(
          'Initial Db Connection'
        );
      })
      .catch((err) => {
        console.log(
          `Initial Distribution API Database connection error occured -`,
          err
        );
      });
 
}
export default dbConnection
