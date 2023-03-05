import * as actions from '../types/exerciseActionsTypes';
import db from './../../db.json'; 
    function authReducer ( state = {
      loading: false,
      exercises: db.exercises,
      bodyPart: 'all',
      bodyParts: db.bodyPartList,
      searchTerm: '',
      error: null
      }, action) {
        switch(action.type){ 

            
          case actions.GET_EXERCISES_REQUEST: return { ...state, loading: true};
          case actions.GET_EXERCISES_SUCCESS: return { ...state, loading: false, searchTerm: '', exercises: action.payload, error: null};
          case actions.GET_EXERCISES_FAIL: return { ...state, loading: false, searchTerm: '', exercises: [], error: action.payload };


          case actions.SET_BODYPART_REQUEST: return { ...state, loading: true};
          case actions.SET_BODYPART_SUCCESS: return { ...state, loading: false, bodyPart: action.payload, error: null};
          case actions.SET_BODYPART_FAIL: return { ...state, loading: false, bodyPart: 'all' };

          case actions.SEARCH_EXERCISES_REQUEST: return { ...state, loading: true};
          case actions.SEARCH_EXERCISES_SUCCESS: return { ...state, loading: false, exercises: action.payload.exercises, searchTerm: action.payload.searchTerm, 
            error: null};
          case actions.SEARCH_EXERCISES_FAIL: return { ...state, loading: false, searchTerm: '', exercises: [], error: action.payload };
          

           


            default: return state;
        }
      }

      export default authReducer;