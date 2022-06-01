import axios from "axios";

export const config = {
    data: {},
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}

export const API = {
    productCard() {
        return axios.get(`https://rest.bellavka.by/api/v1/products/57791673?include=brand,category,collections,
        colors,fabrics,heights,kits,season,sizes,photos,videos,styles`, config)
            .then(res=>res.data.data)
    },
    feedbacks() {
        return axios.get(`https://rest.bellavka.by/api/v1/feedbacks?type=review&product=57791673&include=answers,characteristics`,
            config)
    }
}

