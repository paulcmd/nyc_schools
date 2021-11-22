import React, { useState, useEffect } from 'react';
import { schoolsApi, scoresApi } from '../api/data';

export default () => {
    const [schools, setSchools] = useState([]);
    const [schoolScores, setSchoolScores] = useState([]);
    
    const getAllSchools =  async() => {
    const data =  await schoolsApi.getSchools();
        setSchools(data);
    }

    const getAllScores = async() => {
        const data = await scoresApi.getScores();
        setSchoolScores(data);
    }

    useEffect(() => {
        getAllSchools();
        getAllScores();
    },[])
    
    return {
        schools,
        schoolScores
    };
}