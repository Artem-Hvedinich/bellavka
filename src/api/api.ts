import axios from "axios";

export const config = {
    baseURL: 'https://rest.bellavka.by/api/v1/',
    data: {},
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}

export const API = {
    productCard() {
        return axios.get(`products/57791673?include=brand,category,collections,
        colors,fabrics,heights,kits,season,sizes,photos,videos,styles`, config)
            .then(res => res.data.data)
    },
    feedbacks() {
        return axios.get(`feedbacks?type=review&product=57791673&include=answers,characteristics`,
            config)
            .then(res => res.data)
    }
}
