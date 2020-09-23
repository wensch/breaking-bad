// import Vue from 'vue'
import axios from 'axios'
// import VueAxios from 'vue-axios'

const url = 'https://www.breakingbadapi.com/api/'
const limit = 63
let offset = 0

const $characters = axios.get(`${url}characters?limit=${limit}&offset=${offset}`)
  .then((response) => response.data)
  
export default $characters