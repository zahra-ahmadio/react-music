import React from 'react';
import LibrarySong from "./LibrarySong";

const Library = ({songs,setCurrentSong , audioRef,isPlaying})=> {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song )=> <LibrarySong
                    song={song}
                    songs={songs}
                    audioRef={audioRef}
                    setCurrentSong={setCurrentSong}
                    key={song.id}
                    isPlaying={isPlaying}
                />)}
            </div>
        </div>
    )
}


export default Library ;