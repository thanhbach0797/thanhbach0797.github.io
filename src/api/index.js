import axios from 'axios'

// let config = {
    //     headers: {
        //         "Content-Type": "application/json",
        //         'Access-Control-Allow-Origin': '*',
        //         'Referer': 'http://localhost:3000/'
        //         },
        //     proxy: {
            //         'host': 'https://app.zetamail.vn'
            //         }
            //     }
            
const URL_API = "http://localhost:3000/api";
export const API = {
    getAll(request) {
        return axios.get(URL_API + '/autoflow/getall?token=' + request + '&p=1&limit=50', request, {});
    },
    getFlowById(request) {
        return axios.get(URL_API + '/autoflow/get?token=' + request.token + '&id=' + request.flowId, request, {});
    },
    updateFlowById(request) {
        return axios.post(URL_API + '/autoflow/update', request, {});
    },

}