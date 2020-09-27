import React, { useEffect, useState } from 'react'

import { Avatar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'
import ButtonFollow from '../Utils/ButtonFollow'


import './tofollow.scss'
function ToFollow(props) {
    const [toFollow, setToFollow] = useState([]);

    useEffect(() => {

        let token = localStorage.getItem('token');
        fetch('api/v1/user/tofollow', {
            headers: new Headers({
                'Authorization': token
            })
        })
            .then((response) => {
                return response.json()
            }).then((data) => {
                setToFollow(data);
            })
    }, [])


    return (
        <div className="wrap-list-to-follow">
            <p className="sugerencias">Sugerencias para ti</p>
            <div className="list-to-follow">
                {toFollow.map((follow, index) => {
                    return (
                        <div className="wrap-to-follow" key={index}>
                            <div className="name-avatar">
                                <Link to={"/" + follow.userName} className="enlace-to-follow">
                                    <Avatar src={follow.img} style={{ width: "30px", height: "30px" }}></Avatar>
                                </Link>
                                <p className="nombre-to-follow" >{follow.userName}</p>
                            </div>
                            <ButtonFollow variant="text" color="blue" userPerfil={follow}></ButtonFollow>
                        </div>
                    )
                })}

            </div>
            <p className="p-by">
                De LATAM con 💚 para el mundo. By Braian Lopez
            </p>
        </div >
    )

}

export default ToFollow;