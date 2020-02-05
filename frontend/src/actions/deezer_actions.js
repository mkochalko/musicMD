import * as DeezerAPIUtil from '../util/deezer_util';


export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const CLEAR_TRACKS = "CLEAR_TRACKS";



// const receiveTracks = tracks => ({
//     type: RECEIVE_TRACKS,
//     tracks
// })

const receiveTrack = track => ({
    type: RECEIVE_TRACK,
    track
})

export const clearTracks = () => ({
    type: CLEAR_TRACKS
})


export const getAllTracks = tracks => dispatch => {
    tracks.forEach(track => {
        DeezerAPIUtil.findTrack()
            .then(track => dispatch(receiveTrack(track)))
    })
}



export const getTrackByInfo = trackInfo => dispatch => {
    DeezerAPIUtil.findTrack(trackInfo)
        .then(track => dispatch(receiveTrack(track)))
}

