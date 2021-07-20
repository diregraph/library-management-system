import { getRequest, postRequest } from "./utils";

const BASE_URL = "/member";

export const getMembers = () => getRequest(BASE_URL);

export const addMember = (data) =>
    postRequest(`${BASE_URL}`, data);
