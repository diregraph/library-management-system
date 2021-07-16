import { getRequest } from "./utils";

const BASE_URL = "/member";

//tested
export const getMembers = () => getRequest(BASE_URL);
