import axios from "axios";
import Cookie from 'js-cookie'

class GenericService {
  constructor() {

    axios.defaults.baseURL = "https://intense-wave-96999.herokuapp.com/";
  }

  get = (url) => new Promise((resolve, reject) => {
      axios
        .get(url,{headers:{'x-auth-token':Cookie.getJSON('token')?Cookie.getJSON('token')['token']:''}})
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });

    getwithData = (url,data) => new Promise((resolve, reject) => {
      console.log(data)
      axios({method:'get',data,url,headers:{'x-auth-token':Cookie.getJSON('token')?Cookie.getJSON('token')['token']:''}})
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });


  post = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .post(url, data,{headers:{'x-auth-token':Cookie.getJSON('token')?Cookie.getJSON('token')['token']:''}})
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });

  put = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .put(url, data,{headers:{'x-auth-token':Cookie.getJSON('token')?Cookie.getJSON('token')['token']:''}})
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  delete = (url) =>
    new Promise((resolve, reject) => {
      axios
        .delete(url,{headers:{'x-auth-token':Cookie.getJSON('token')?Cookie.getJSON('token')['token']:''}})
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
}
export default GenericService;
