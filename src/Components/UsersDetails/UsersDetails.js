import React from 'react';

import css from './UsersDetails.module.css'

const UsersDetails = ({user, getUserId}) => {

    const {id, name, username, email, address:{city, zipcode}, phone, website} = user;

    return (
        <div className={css.wrap}>
            <div>Id: {id}</div>
            <div>{name}</div>
            <div>Nick: {username}</div>
            <div>E-mail: {email}</div>
            <div>City: {city}</div>
            <div>ZipCode: {zipcode}</div>
            <div>Phone N: {phone}</div>
            <div>WebSite: {website}</div>
            <button onClick={()=>getUserId(id)}>Posts</button>
        </div>
    );
};

export default UsersDetails;