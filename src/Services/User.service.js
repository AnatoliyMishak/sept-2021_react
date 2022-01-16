import {axiosService} from './Axios.service';

import {urls} from '../Configs/Urls';

export const userService = {
    getAll:() => axiosService.get(urls.users).then(value => value.data)
}