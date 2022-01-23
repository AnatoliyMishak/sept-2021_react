import axios from "axios";

import baseUrl from "../Configs/Urls";

export const axiosService = axios.create({
    baseURL:baseUrl
});