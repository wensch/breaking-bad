// import Vue from 'vue'
import axios from 'axios'
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)

// const http  = axios.create({
//   baseURL: 'https://www.breakingbadapi.com/api/'
// })

// http.options.root = 'https://www.breakingbadapi.com/api/'

// console.log(axios);

export const http = axios.create({
  baseURL: 'https://www.breakingbadapi.com/api/'
})