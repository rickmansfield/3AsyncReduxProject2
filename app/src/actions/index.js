import axios from 'axios';
export const FETCH_START = "FETCH_START ";
export const FETCH_DOG_SUCCESS = "FETCH_DOG_SUCCESS";
export const FETCH_CAT_SUCCESS = "FETCH_CAT_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";


export const getDog = () => {
    return (dispatch) => {
        dispatch(fetchStart());
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(res=>{
            // console.log('Actions/index.js ln:8 res.data', res.data);
            dispatch(fetchDogSuccess(res.data.message))
        })
    }
}

export const getCat = () => {
    return (dispatch) => {
        dispatch(fetchStart());
        axios.get('https://cataas.com/cat?json=true')
        .then(res=>{
            // console.log('Actions/index.js ln:23 res.data', res.data.url);
            dispatch(fetchCatSuccess(`https://cataas.com/${res.data.url}`))
        })
    }
}
export const fetchStart = () => {
    return({type: FETCH_START})
}

export const fetchDogSuccess = (dog) => {
    return({type: FETCH_DOG_SUCCESS, payload:dog})
}

export const fetchCatSuccess = (cat) => {
    return({type: FETCH_CAT_SUCCESS, payload:cat})
}

export const fetchFail = () => {
    return({type: FETCH_FAIL})
}