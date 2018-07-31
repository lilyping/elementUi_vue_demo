
import axios from 'axios';

//webpack 环境变量，构建时自动替换现网动态请求域名前缀
axios.defaults.baseURL = process.env.dynamicDomain;
axios.defaults.timeout =  6000;
export default {
  get: function (url, data) {

    return new Promise(function (resolve, reject) {
      // axios.get(config.dynamicDomain+url, {
      axios.get(url, {
        params: data
      }).then(function (response) {
        resolve(response.data);
      }).catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        reject(error);
      });
    });
  },
  post: function (url, data) {

    return new Promise(function (resolve, reject) {
      // axios.post(config.dynamicDomain+url, data).then(function (response) {
      axios.post(url, data).then(function (response) {
        resolve(response.data);
      }).catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        reject(error);
      });
    });
  },
  put: function (url, data) {

    return new Promise(function (resolve, reject) {
      // axios.post(config.dynamicDomain+url, data).then(function (response) {
      axios.put(url, data).then(function (response) {
        resolve(response.data);
      }).catch(function (error) {
        debugger
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        reject(error);
      });
    });
  }
}
