import axios from "axios";

const lmsAPIHostProd = "https://api.lms.net"; //this is a dummy URL
const lmsAPIHostDev = "http://localhost:3001";
const lmsAPIHost =
    process.env.NODE_ENV === "development" ? lmsAPIHostDev : lmsAPIHostProd;

const instance = axios.create({
    baseURL: lmsAPIHost,
});

export default instance;
