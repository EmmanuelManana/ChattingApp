import dotenv from "dotenv";

dotenv.config();

const config = {
  HOST: process.env.host || "127.0.0.1",
  PORT: parseInt(process.env.PORT || 5000, 10),
  get url() {
    return `http://${this.HOST}:${this.PORT}`;
  },
};

export default config;
