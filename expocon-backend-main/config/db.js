import mongoose from 'mongoose'; 
import colors from 'colors';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://expoUser:expoPassword@expocluster.ddeqx.mongodb.net/?retryWrites=true&w=majority&appName=ExpoCluster");
        console.log("Connected to the database".bgMagenta);

    } catch (error) {

        console.error(`Error connecting to the database: ${error.message}`.bgRed);
    }
};

export default connectDB;