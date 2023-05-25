import React, { useEffect, useState } from "react";
import '../css/Body.css'
import Header from './Header'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import SongRow from "./SongRow";

const Body = () => {

    const [songs, setSongs] = useState()

    const GetApi = async () => {
        try {
            const playlistApi = await fetch('http://192.168.20.116:8080/get', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                return response.json();
            }).catch(err => {
                return err
            })
            return playlistApi
        } catch (error) {
            return error
        }
    }

    useEffect(() => {
        const ApiCall = async () => {
            const api = await GetApi('http://192.168.20.116:8080/get')
            setSongs(api)
        }
        ApiCall()
    },[])

    console.log(songs);


    return (
        <>
            <div className="body" >
                <Header />

                <div className="body_info">
                    <img src="#" alt="" />
                    <div className="body_infoText" >
                        <strong>PLAYLIST</strong>
                        <h2>Discover Weekly</h2>
                        <p>Song Description</p>
                    </div>
                </div>

                <div className="body_songs" >
                    <div className="body_icons">
                        <PlayCircleFilledIcon className='body_shuffle' onClick={''} />
                        <FavoriteIcon fontSize='large' />
                        <MoreHorizIcon />
                    </div>
                </div>
                {/* 
                {
                    songs?.map((item) => (
                        <h4>{item.song}</h4>))
                } */}

                {
                    songs?.map((item) => (
                        <div className="songList"
                        // onClick={() => playSong(item.id)}
                        >
                            {/* <img className="songList_album" alt='' src={item.img} /> */}

                            <div className="songList_info">
                                <h4>{item.song}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    ) 
}

export default Body