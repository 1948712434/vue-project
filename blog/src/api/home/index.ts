import http from '../http';

export const getValue = (params={id:1})=>{
    return http.get("/api/getValue",{
        params:params
    })
}
