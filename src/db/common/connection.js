import mongoose from "mongoose";



const connectDB = async () => {
    const MongoDB_PATH = process.env.MONGODB_PATH;
    const MongoDB_CERTIFI_PATH = process.env.CERTIFICATE_PATH;
    try {
        const conn = await mongoose.connect(MongoDB_PATH, {
            useNewUrlParser: true,
            sslKey: MongoDB_CERTIFI_PATH,
            sslCert: MongoDB_CERTIFI_PATH

        });
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

export default connectDB;