import express from "express";
import mongoose from 'mongoose'; 
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = 5000;
app.listen(port, () => {
    console.log("server started successfully");
});


mongoose.connect('mongodb://localhost:27017/expocon_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
    console.error(err);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
    user_email: String,
    user_password: String,
});

const User = mongoose.model('User ', userSchema);

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (err) {
        res.status(500).send(err);
    }
});