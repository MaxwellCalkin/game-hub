import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '7fcc5db6de584da99e7636becc154671'
    }
})