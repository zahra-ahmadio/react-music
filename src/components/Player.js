import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay,
    faAngleRight,
    faAngleLeft,
    faPause,
} from "@fortawesome/free-solid-svg-icons";

const  PLayer = ({currentSong,
                     isPlaying,
                     setIsPlaying ,
                     audioRef,
                     songInfo
                     ,setSongInfo
                     ,songs
                     ,setSongs
                     ,setCurrentSong
                           })=> {
       const activeLibraryHandler = (nextprev)=> {
           const newSongs = songs.map((song)=> {
           if(song.id === nextprev.id){
               return {
                   ...song,
                   active : true,
               } ;
           }else {
               return {
                   ...song,
                   active : false,
               };
           }
       });
           setSongs(newSongs);
           console.log("hey you are using useEffect!")

       }
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
    //handler

    const getTime = (time)=>{
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor (time % 60)).slice(-2)
        );
    };
    const dragHandler =(e) => {
        audioRef.current.currentTime = e.target.value ;
        setSongInfo({...songInfo, currentTime : e.target.value });
    };
    const skipTrackHandler = async (direction) =>{
        let currentIndex = songs.findIndex((song)=> song.id === currentSong.id);
        if(direction === "skip-forward"){
          await  setCurrentSong(songs[(currentIndex + 1) % songs.length] );//back to 0 when arrive to the number of songs length
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length] );
        }
        if(direction === "skip-back"){
            if((currentIndex -1) % songs.length === -1 ){
               await setCurrentSong(songs[songs.length -1]);//the length is 5 but last index is 4
                activeLibraryHandler(songs[songs.length -1]);
                if(isPlaying) audioRef.current.play();
                return;
            }
             await setCurrentSong(songs[(currentIndex - 1) % songs.length] );
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
        }
        if(isPlaying) audioRef.current.play();
              };
 // Add styles
    const trackAnim = {
        transform :`translateX(${songInfo.animationPercentage}%)`// % is for transform is a css property
    }
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                 <div style={{background: `linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})`}} className="track">
                         <input min={0}
                       max={songInfo.duration || 0 }
                       value={songInfo.currentTime}
                       onChange={dragHandler}
                       type="range"
                           />
                    <div  style={trackAnim} className="animate-track"></div>
                </div>

                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                    onClick={()=> skipTrackHandler("skip-back")}
                    className="skip-back"
                    size="2x"
                    icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon
                    onClick={()=> skipTrackHandler("skip-forward")}
                    className="skip-forward"
                    size="2x"
                    icon={faAngleRight} />
            </div>
        </div>
    )
}



export default PLayer;