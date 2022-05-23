import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://pius:pius@cluster0-shard-00-00.g0tld.mongodb.net:27017/robertshop?ssl=true&replicaSet=atlas-qcfcpk-shard-0&authSource=admin&retryWrites=true&w=majority", {
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
