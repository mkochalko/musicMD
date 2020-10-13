import * as TMAPIUtil from '../util/songkick_api_util';


export const RECEIVE_EVENTS = "RECEIVE_EVENTS";


const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
})



export const getMetroIdByClick = latlng => dispatch => {
    return ( 
        TMAPIUtil.getMetroIdByClick(latlng)
            .then(events => dispatch(receiveEvents(events._embedded.events)))
        )
        .catch(error => {
            alert("No Events Found. Due to Covid-19, Your city may not have any events to display.");
        })
};


export const getMetroIdByText = text => dispatch => {
    return (
    TMAPIUtil.getMetroIdByText(text)
        .then(events => {
            dispatch(receiveEvents(events._embedded.events))
            return events._embedded.events
        })
        .catch(error => {
            alert("City Not Found");
            return [];
        })
    )
}