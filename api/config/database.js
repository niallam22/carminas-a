const mongoose = require('mongoose')

const connectDB = async () => {
  let retryCount = 0;

  for (retryCount = 0; retryCount < 3; retryCount++) {
    try {
      const conn = await mongoose.connect(process.env.DB_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log(`MongoDB Connected: ${conn.connection.host}`)
      return; // connection successful, return from the function
    } catch (err) {
      console.error(`Failed to connect to the database. Retry count: ${retryCount + 1}`)
      console.error(err)
    }
  }

  console.error(`Failed to connect to the database after ${retryCount} retries.`)
  process.exit(1)
}

module.exports = connectDB
