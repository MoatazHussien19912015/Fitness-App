import * as actions from '../types/exerciseActionsTypes';
import db from './../../db.json';
/* export const getAllExercises = () => (dispatch, getState) => {
    dispatch({type: actions.GET_ALL_EXERCISES_REQUEST});
    try { 
        dispatch({type: actions.GET_ALL_EXERCISES_SUCCESS, payload: db.exercises});
    }
    catch(err) {
        console.log(err); dispatch({type: actions.GET_ALL_EXERCISES_FAIL, payload: err});
    };
}; */


export const setBodyPart = (bodyPart) => (dispatch, getState) => {
    dispatch({type: actions.SET_BODYPART_REQUEST});
    try { 
        
        dispatch({type: actions.SET_BODYPART_SUCCESS, payload: bodyPart });
    }
    catch(err) {
        console.log(err); dispatch({type: actions.SET_BODYPART_FAIL, payload: err});
    };
};

export const getExercises = () => (dispatch, getState) => { const bodyPart = getState().exercisesReducer.bodyPart;
    dispatch({type: actions.GET_EXERCISES_REQUEST});
    try { 
        if(bodyPart == 'all') {
            dispatch({type: actions.GET_EXERCISES_SUCCESS, payload: db.exercises});
          } else {
            dispatch({type: actions.GET_EXERCISES_SUCCESS, payload: db.exercises.filter(item=>item.bodyPart == bodyPart)});
           
    }}
    catch(err) {
        console.log(err); dispatch({type: actions.GET_EXERCISES_FAIL, payload: err});
    };
};


export const searchExercises = (searchTerm) => (dispatch, getState) => {
    dispatch({type: actions.SEARCH_EXERCISES_REQUEST});
    try { 
        const search_result = db.exercises.filter(item=>item.name.toLowerCase().includes(searchTerm) || item.bodyPart.toLowerCase().includes(searchTerm)
        || item.equipment.toLowerCase().includes(searchTerm) || item.target.toLowerCase().includes(searchTerm));
        dispatch({type: actions.SEARCH_EXERCISES_SUCCESS, payload: {exercises: search_result, searchTerm}});
    }
    catch(err) {
        console.log(err); dispatch({type: actions.SEARCH_EXERCISES_FAIL, payload: err});
    };
};
