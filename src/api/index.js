import axios from 'axios'
            
const URL_API = "http://localhost:3000/api";
export const API = {
    getAll(request) {
        return axios.get(URL_API + '/autoflow/getall?token=' + request + '&p=1&limit=50', {});
    },
    getFlowById(request) {
        return axios.get(URL_API + '/autoflow/get?token=' + request.token + '&id=' + request.flowid, {});
    },
    updateFlowById(request) {
        return axios.post(URL_API + '/autoflow/update', request, {});
    },
    getTriggerById(request) {
        return axios.get(URL_API + '/triggeremail/get?token=' + request.token + '&id=' + request.id, {});
    },
    getAllTrigger(request) {
        return axios.get(URL_API + '/triggeremail/getall?token=' + request.token + '&flowid=' + request.flowid, {});
    },

    /* request of triggeremail/create
        token
        active
        createdate
        //ownerid
        name
        triggertype
        triggerhours
        triggerinterval
        queueid
        statid
        autostatid
        autoflowid
        priority
        is_yes_or_noYES
        y_trigger
        n_trigger
        time_active_no_trigger
    */
    createTrigger(request) {
        return axios.post(URL_API + '/triggeremail/create', request, {});
    },

    /* request of triggeremail/active
        token
        id
    */
    activeTrigger(request) {
        return axios.post(URL_API + '/triggeremail/active', request, {});
    },

    /* request of triggeremail/copy
        token
        id
    */
    copyTrigger(request) {
        return axios.post(URL_API + '/triggeremail/copy', request, {});
    },

    /* request of triggeremail/update
        triggertype
        triggerhours
        triggerinterval
        queueid
        statid
        autostatid
        autoflowid
        priority
        is_yes_or_no
        y_trigger
        n_trigger
        time_active_no_trigger
    */
    updateTrigger(request) {
        return axios.post(URL_API + '/triggeremail/update', request, {});
    },

    /* request of triggeremail/remove
        token
        id
    */
    removeTrigger(request) {
        return axios.post(URL_API + '/triggeremail/remove', request, {});
    },
}