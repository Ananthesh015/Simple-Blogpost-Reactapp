import * as ActionTypes from '../index';
const initialstate = {  
    posts: [  
        { id: 1, title: "What is React.js?", text: "React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications" },  
       
    ]  
}; 

const reducer = (state = initialstate, action) => {  
    switch (action.type) {  
        case ActionTypes.POSTS_LOADING:  
            return {  
                ...state  
            };
        case 'ADD_POSTS':    
            return {    
                ...state,    
                posts: state.posts.concat(action.payload)    
            };  
        default:  
            return state;  
    }  
};  
  
export default reducer; 