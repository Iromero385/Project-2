import axios from "axios"; 

const API ={
    getCity: (city) => {
        return axios.get("/api/locations/city/"+ city)
    }
}

export default API; 