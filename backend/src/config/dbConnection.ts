import mongoose, { ConnectOptions } from "mongoose";

const dbConnection = async () => {
  const url=process.env.MONGO_URL
await mongoose
      .connect('mongodb://localhost:27017/todos', {
        useNewUrlParser: true,
        useUnifiedTopology: true
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
