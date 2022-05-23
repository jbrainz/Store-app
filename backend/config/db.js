import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://pius:pius1234@cluster0-shard-00-00.g0tld.mongodb.net:27017,cluster0-shard-00-01.g0tld.mongodb.net:27017,cluster0-shard-00-02.g0tld.mongodb.net:27017/?ssl=true&replicaSet=atlas-qcfcpk-shard-0&authSource=admin&retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(`mongoDB connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(`Error:. ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
