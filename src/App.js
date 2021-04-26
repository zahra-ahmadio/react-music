import React, {useRef, useState} from 'react';
import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';
import Library from "./components/Library";
import Nav from "./components/Nav";
import data from './data';

function App() {
    //ref
    const audioRef = useRef(null);
    //states
    const [songs,setSongs]=useState(data());
    const [currentSong,setCurrentSong]=useState(songs[0]);
    const [isPlaying,setIsPlaying]=useState(false);
    const [songInfo,setSongInfo]=useState({
        currentTime : 0,
        duration :0,
        animationPercentage :0,
    });
    const [libraryStatus,setLibraryStatus]=useState(false)
    const timeUpdateHandler = (e)=>{
        const current = e.target.currentTime;
        const duration = e.target.duration;
        //Caculate Percentag
        const roundCurrent =Math.round(current);
        const roundDuration =Math.round(duration);
        const animationPercentage  =Math.round((roundCurrent / roundDuration)*100);
         console.log(animationPercentage);
        setSongInfo({...songInfo,currentTime : current, duration ,animationPercentage :animationPercentage}) ;//the same name of duration
    }
  return (
    <div className="App">
        <Nav
            libraryStatus={libraryStatus}
             setLibraryStatus={setLibraryStatus}
                 />
        <Song currentSong={currentSong}/>
        <Player
            setSongInfo={setSongInfo}
            songInfo={songInfo}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentSong={currentSong}
            songs={songs}
            setSongs={setSongs}
            setCurrentSong={setCurrentSong}
        />
        <Library
            audioRef={audioRef}
            songs={songs}
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
            setSongs={setSongs}
            libraryStatus={libraryStatus}
        />
        <audio onTimeUpdate={timeUpdateHandler}
               onLoadedMetadata={timeUpdateHandler}
               ref={audioRef}
               src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
