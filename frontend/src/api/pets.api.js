import axios from 'axios';

const petsApi = axios.create({
    baseURL: "http://127.0.0.1:8000/pets/",
});

export const getAllPets = () => petsApi.get("pet/");

