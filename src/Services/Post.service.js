import {axiosService} from "./Axios.service";
import {urls} from "../Configs/Urls";

export const postService={
    getAll:()=>axiosService.get(urls.posts).then(value => value.data),
    getById:(id)=>axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
    getByComments:(id)=>axiosService.get(`${urls.comments}/${id}`).then(value => value.data)
}