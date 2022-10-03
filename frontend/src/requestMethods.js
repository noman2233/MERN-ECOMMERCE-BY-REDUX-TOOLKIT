import axios from "axios"

const BASE_URL="http://localhost:80/api/"
// const Token=(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken)
const Token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOnsiaWQiOiI2MzBlYTFkMjcwY2EzYmU3NGNjMTJhMWIifX0sImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjMxMzk3MjB9.cDoDrou-WWVILVLfZkip5V_HCNuteCMVsCMJJpYkIfc"
// console.log(JSON.parse(JSON.parse(localStorage.getItem("persisit:root")).currentUser).accessToken)
export const publicRequest=axios.create({

    baseURL:BASE_URL,
    })

export const userRequest=axios.create({
    
    baseURL:BASE_URL,
    headers:{token:`Bearer ${Token}`}
})

