import React from "react";
import '../css/Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SidebarOption from "./SidebarOption";

const Sidebar = () => {

    return (
        <>
            <div className="sidebar">
                <img
                    className="sidebar_logo"
                    src="#"
                    alt=""
                />

                <SidebarOption Icon={HomeIcon} title="Home" />
                <SidebarOption Icon={SearchIcon} title="Search" />
                <SidebarOption Icon={LibraryMusicIcon} title="Library" />

                <br />
                <strong className="sidebar_title">Playlist</strong>
                <hr />

            </div>
        </>
    )
}

export default Sidebar