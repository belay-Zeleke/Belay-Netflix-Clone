// import { axios } from './../node_modules/axios/dist/esm/axios';

import axios from "axios";

const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});
export default instance;