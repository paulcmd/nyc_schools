import axios from "axios";


const schoolsData = "https://data.cityofnewyork.us/resource/s3k6-pzi2.json"

const scoresData =  "https://data.cityofnewyork.us/resource/f9bf-2cp4.json"

export const schoolsApi =  {
    getSchools: async() => {
        const res = await axios.get(schoolsData);
        return res.data
    }
}

export const scoresApi =  {
    getScores: async() => {
        const res = await axios.get(scoresData);
        return res.data
    }
}



