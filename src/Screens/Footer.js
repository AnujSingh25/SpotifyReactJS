import React from "react";
import { Grid, Slider } from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import '../css/Footer.css'

const Footer = () => {

    return (
        <>
            <div className="footer">
                <div className="footer_left">
                    <img
                        className="footer_albumLogo"
                        src='#'
                        alt=''
                    />

                    <div className="footer_songInfo">
                        <h4>Heading</h4>
                        <p>Paragraph</p>
                    </div>

                </div>

                <div className="footer_center">
                    <ShuffleIcon className='footer_green' />
                    <SkipPreviousIcon className='footer_icon' />

                    <PauseCircleOutlineIcon fontSize='large' className='footer_icon' />

                    <PlayCircleOutlineIcon className='footer_icon' fontSize='large' />

                    <SkipNextIcon className='footer_icon' />
                    <RepeatIcon className='footer_green' />

                </div>

                <div className='footer_right'>
                    <Grid container spacing={2} >

                        <Grid item>
                            <PlaylistPlayIcon className='footer_icon'/>
                        </Grid>

                        <Grid item >
                            <VolumeDownIcon className='footer_icon' />
                        </Grid>

                        <Grid item xs >
                            <Slider aria-labelledby='continuous-slider' className='MuiSlider' />
                        </Grid>

                    </Grid>

                </div>
            </div>
        </>
    )
}

export default Footer