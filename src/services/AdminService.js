import axios from "axios";
export async function login(credentials)
{
    const response = await axios.post("http://127.0.0.1:4900/admin/login",credentials);
    return response.data;
}

export async function register(credentials)
{
    const response = await axios.post("http://127.0.0.1:4900/admin/",credentials);
    return response.data;
}