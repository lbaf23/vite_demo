import { apiRequest} from "./request.js";
import qs from 'qs';


const UserAPI = {
  getUser(id) {
    return apiRequest({
      url: `/user/${id}`,
      method: 'get',
    })
  },
  createUser(id, username, password) {
    return apiRequest({
      url: `/user`,
      method: 'post',
      data: qs.stringify({
        id,
        username,
        password,
      })
    })
  },
}


export default UserAPI;
