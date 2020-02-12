import * as SongAPI from '../util/song_api_util';

export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS = "RECEIVE_SONGS";

const receiveSong = song => ({
    type: RECEIVE_SONG,
    song
})

const receiveSongs = (songs) => ({
    type: RECEIVE_SONGS,
    songs
})


export const createSong = song => dispatch => (
    SongAPI.postSong(song)
        .then(song => dispatch(receiveSong(song)))
);

export const fetchSongs = () => dispatch => (
    SongAPI.getSongs()
        .then((songs) => dispatch(receiveSongs(songs)))
)

