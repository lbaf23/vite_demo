import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL


export const apiRequest = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
})

apiRequest.interceptors.response.use(res=>authMiddleware(res))

function authMiddleware(res) {
  if (res.data.code === 500) {
    // do sth.
  } else if (res.data.code === 404) {
    // do sth.
  } else {
    // allow cross origin
    res.headers["Access-Control-Allow-Origin"] =  "*"
    return res
  }
}
