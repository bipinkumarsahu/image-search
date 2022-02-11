import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 24Tv3q6iIi_xYvdCpq26S7Z4OXij3rslI4iZuqMFey8",
      },
})