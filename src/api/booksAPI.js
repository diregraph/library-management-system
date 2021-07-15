import { getRequest } from "./utils";

const BASE_URL = "/book";

export const getBooks = () => getRequest(`${BASE_URL}`);