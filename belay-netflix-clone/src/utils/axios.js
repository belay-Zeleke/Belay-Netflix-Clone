// import { axios } from './../node_modules/axios/dist/esm/axios';

import axios from "axios";

const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});
//  var abe = instance.get("/discover/tv?api_key=ccc9c56a676a577d2e284609511076a4&with_networks=213")
// console.log(abe)

export default instance;