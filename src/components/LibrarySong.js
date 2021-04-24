import React from "react";


const  LibrarySong = ({song ,songs, setCurrentSong,audioRef,isPlaying })=> {
    const songSelectHandler = (e) =>{
        // const selectedSong =songs.filter((state)=> state.id === id );
        setCurrentSong(song);
        //check if tha song is playing
        if(isPlaying){
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined){
                playPromise.then((audio) =>{
                    audioRef.current.play();
                });
            }
        }
    }
    return (
        <div onClick={songSelectHandler} className="library-song">
            <img alt={song.name}  src={song.cover}></img>
            <div className="song-description">
            <h3> {song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;