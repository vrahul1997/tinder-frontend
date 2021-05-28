import axios from "axios";
import config from "./constant";

const instance = axios.create(config);

export default instance;