const recvAPI = res => {
  return res.json().then(json => {
    if (res.ok) {
      return Promise.resolve(json);
    }
    return Promise.reject(json);
  });
};

let UserApi = {
  searchUsers() {
    return fetch("/data/users.json").then(res => recvAPI(res));
  }
};

export default UserApi;
