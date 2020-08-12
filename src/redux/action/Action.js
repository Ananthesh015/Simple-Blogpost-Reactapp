import * as ActionTypes from '../index';

export const postsLoading = () => ({
    type: ActionTypes.POSTS_LOADING
});
export const addpost = (data) => ({  
     type: ActionTypes.ADD_POSTS,  
     payload: data  
        
}); 
