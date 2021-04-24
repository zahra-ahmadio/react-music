import React from 'react';
import LibrarySong from "./LibrarySong";

const Library = ({songs,setCurrentSong , audioRef,isPlaying ,setSongs})=> {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song )=> <LibrarySong
                    song={song}
                    songs={songs}
                    audioRef={audioRef}
                    setCurrentSong={setCurrentSong}
                    id ={song.id}
                    key={song.id}
                    isPlaying={isPlaying}
                    setSongs={setSongs}
                />)}
            </div>
        </div>
    )
}


export default Library ;