import axios from "axios";

class authApi {
  loginUser(user) {
    return axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/api/admin/login`, user)
      .then((res) => res.data);
  }
}

export default new authApi();
