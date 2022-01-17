import {axiosService} from './Axios.service';

import {urls} from '../Configs/Urls';

export const postService = {
    getByUserId: (id) => axiosService.get(`${urls.posts}?userId=${id}`).then(value => value.data)
}