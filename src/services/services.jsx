import axios from "axios";
import { URL_BACKEND } from "../environments/environments";
import { authAxios } from "./axiosHelper";


export const getAllAreas = async () => {
    const rpta = await authAxios.get(`${URL_BACKEND}/area/getAllAreas`, {
    });
    return rpta
}