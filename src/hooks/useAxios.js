import axios from "axios";
import React, { useEffect, useState } from "react";
import {v1 as uuid} from "uuid";

const useAxios = (url) => {
    const [resultsArr, setResultsArr] = useState([]);
    
    const makeRequest = async (param) => {
        const BaseURL = url
        let URL
        if(typeof(param) === 'string'){
            URL = `${BaseURL}${param}/`
        }else{
            URL = BaseURL
        }
        const response = await axios.get(URL);
        setResultsArr(cards => [...cards, {...response.data, id: uuid()}]);
    }

    return [resultsArr, makeRequest];
}

export default useAxios;