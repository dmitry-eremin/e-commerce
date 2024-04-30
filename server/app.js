import express from 'express'
import mongoose from 'mongoose'
import config from 'config'
import cors from 'cors'

const app = express()

const PORT = config.get('serverPort')
const URL = config.get('dbUrl')

app.use(cors())

const start = () => {
   try {
      mongoose
         .connect(URL)
         .then(() => console.log('Connected to MongoDB'))
         .catch((error) => console.log(error))

      app.listen(PORT, () => console.log('Server was started on port: ' + PORT))
   } catch (error) {
      console.log(error)
   }
}

start()
