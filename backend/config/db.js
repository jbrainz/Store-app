import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://store:store@ac-06r567y-shard-00-00.jgagxog.mongodb.net:27017/store?ssl=true&replicaSet=atlas-74wdwk-shard-0&authSource=admin&retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(`mongoDB connected: ${conn.connection.user}`.cyan.underline)
  } catch (error) {
    console.log(`Error:. ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}
export default connectDB
