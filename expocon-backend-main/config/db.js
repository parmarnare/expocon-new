import mongoose from 'mongoose'; 
import colors from 'colors';

const connectDB = async () => {
    try {
         const conn = await mongoose.connect("mongodb+srv://expoUser:expoPassword@expocluster.ddeqx.mongodb.net/expocon-db?retryWrites=true&w=majority&appName=ExpoCluster");
        // const conn = await mongoose.connect("mongodb://localhost:27017/expocon_db");
        console.log("Connected to the database".bgMagenta);

    } catch (error) {

        console.error(`Error connecting to the database: ${error.message}`.bgRed);
    }
};

export default connectDB;