import React,{useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faAngleDoubleLeft, faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons";

const  PLayer = ({currentSong,isPlaying,setIsPlaying})=> {
    //ref
    const audioRef = useRef(null);
    //event handlers
    const playSongHandler =()=>{
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying)
        }
        else {
            audioRef.current.play();
            setIsPlaying(!isPlaying)
        }

    }
    return (
        <div className="player">
            <div className="time-control">
                <p>start time</p>
                <input type="range"/>
                <p>end time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
              <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay} />
                <FontAwesomeIcon className="skip-forward" size="2x"  icon={faAngleRight} />
            </div>
            <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default PLayer;