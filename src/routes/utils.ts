import { SECRET_TOKEN, API_URL } from "$env/static/private";

export const SERVER = API_URL;
export const PROJECT_API_URL = `${SERVER}/api/projects`;
export const TOKEN = SECRET_TOKEN;
