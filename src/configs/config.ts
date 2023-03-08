import { config } from "dotenv";

config();

export const configs = {
    PORT: process.env.PORT || 5001,
    DB_URL: process.env.DB_URL || `mongodb+srv://Alifoxy:<nf380676045540>@cluster0.isch7bg.mongodb.net/?retryWrites=true&w=majority`,
};