import axios from "axios"
export const getAllData=async(url)=>{
    let res = await axios.get(url)
    let data = res.data
    return data
}