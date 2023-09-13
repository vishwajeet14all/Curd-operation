import mongoose from "mongoose";

mongoose.connect('mongodb+srv://user:user@cluster0.gaqmv3e.mongodb.net/crudapp')

const db = mongoose.connection

db.once('open',() => {
    console.log("DB Connected Successfully!")
})

export default db


