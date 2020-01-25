import * as SongAPI from '../util/song_api_util';

export const RECEIVE_SONG = "RECEIVE_SONG";

const receiveSong = song => ({
    type: RECEIVE_SONG,
    song
})


export const fetchSong = song => dispatch => (
    SongAPI.postSong(song)
        .then(song => dispatch(receiveSong(song)))
);

