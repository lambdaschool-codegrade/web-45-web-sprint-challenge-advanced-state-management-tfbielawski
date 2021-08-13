import axios from 'axios';

//Fetch smurf function
export const fetchSmurf = () =>
{
    return(dispatch) =>
    {
        //
        dispatch(fetchStart());

        //
        axios.get("http://localhost:3333/smurfs")

        //
        .then(res =>
            {
                console.log(res.data)
                dispatch(fetchSuccess(res.data));
            })

        //
        .catch(err =>{dispatch(fetchFail(err)); })
        
    }
}

//Define and export fetchStart
export const FETCH_START = "FETCH_START";
export const fetchStart = ()=> 
{
    return({type: FETCH_START});
}

//Define and export fetchSmurf
export const ADD_SMURF = "ADD_SMURF";
export const addSmurf = (smurf)=> 
{
    return({type: ADD_SMURF, payload: smurf});
}

//Define and export fetchSuccess
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = (smurf)=> 
{
    return({type: FETCH_SUCCESS, payload: smurf});
}

//Define and export fetchFail
export const FETCH_FAIL = "FETCH_FAIL";
export const fetchFail = (error)=> 
{
    return({type: FETCH_FAIL, payload: error});
}

//
export const SET_ERROR = "SET_ERROR";
export function setError = (error) =>
{
    return ({FETCH_FAIL, payload: error})
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.