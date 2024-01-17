import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "00ec1dbd9a244027963efc259141e60a"
    }
})