import * as TMAPIUtil from '../util/songkick_api_util';


export const RECEIVE_EVENTS = "RECEIVE_EVENTS";


const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
})



export const getMetroIdByClick = latlng => dispatch => {
    return ( 
        TMAPIUtil.getMetroIdByClick(latlng)
            .then(events =>{
<<<<<<< HEAD
=======
                // debugger;
>>>>>>> master
                dispatch(receiveEvents(events._embedded.events))
            })
    )
};


export const getMetroIdByText = text => dispatch => (
    TMAPIUtil.getMetroIdByText(text)
        .then(events => {
            dispatch(receiveEvents(events._embedded.events))
        })
)