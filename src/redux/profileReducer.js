const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let init = {
    profilePage:{
        posts: [
            {
                "text":"hello, my name is Matvey",
                "likes":"100",
                "id":"0"
            },
            {
                "text":"hey",
                "likes":"5",
                "id":"1"
            },
            {
                "text":"Chelsea champion",
                "likes":"1",
                "id":"2"
            },
            {
                "text":"have a good day",
                "likes":"100",
                "id":"3"
            },
            {
                "text":"react",
                "likes":"10",
                "id":"4"
            },
            {
                "text":"first post!",
                "likes":"1213",
                "id":"5"
            }
        ],
        newPostText:{}
    }
}

 const profileReducer = (state = init, action) => {

    if(action.type === ADD_POST){
        let newPost ={
            text: action.text,
            likes:"0",
            id:"7"
        };
        state.profilePage.posts.push(newPost);
    }else if(action.type === UPDATE_NEW_POST_TEXT){
        state.newPostText = action.body;
    }

    return state;
}


export const addPostActionCreator = (text) => ({
    type:ADD_POST,
    text:text
})

export const updateNewPostTextActionCreator = (newPost) => ({
    type:UPDATE_NEW_POST_TEXT, text:newPost
})



export default profileReducer;