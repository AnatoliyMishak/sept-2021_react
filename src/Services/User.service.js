
import {urls} from '../Configs/Urls'

let getAll = ()=>{
return fetch(urls.users)
    .then(value => value.json())
}

let getById = (id) =>{
    return  fetch(`${urls.users}/${id}`)
        .then(value => value.json())
}

export const userService ={
    getAll,
    getById
}