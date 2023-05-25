import { Avatar } from "@mui/material"
import React from "react"
import '../css/Header.css'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {

    return (
        <>
            <div className="header">
                <div className="header_left">
                    <SearchIcon />
                    <input
                        placeholder="Search for Artists, Songs, Podcasts"
                        type='text'
                    />
                </div>

                <div className="header_right">
                    <Avatar src='#' />
                    <h4>heading</h4>
                </div>

            </div>
        </>
    )
}

export default Header