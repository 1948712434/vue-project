import base from '../base';//基础url
import axios from '../../request/http';//引入封装的axios

export function getData(params) {
    return axios.get(`${base}/topics`, { params })
}
