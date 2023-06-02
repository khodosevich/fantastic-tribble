
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const SEND_MESSAGES = "SEND_MESSAGES";
const UPDATE_NEW_MESSAGES = "UPDATE_NEW_MESSAGES";

let store = {
    _state: {

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
        },

        dialogsPage: {
            dialogs:[
                {"name": "Matvey", "id": 1,"photo": "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"},
                {"name": "Kirill", "id": 2 , "photo": "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg" },
                {"name": "Maksim", "id": 3 , "photo":"https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg" },
                {"name": "Stas", "id": 4 , "photo": "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"},
                {"name": "Ivan", "id": 5 , "photo": "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"},
                {"name": "Artem", "id": 6 ,"photo": "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"}
            ],
            messages: [

                {"id":1 , "text":"hi"},
                {"id":2 , "text":"yo"},
                {"id":3 ,"text":"how are you"},
                {"id":4 , "text":"im nice , what about you?"},
                {"id":5 , "text":"ohh, cool"},
                {"id":6 , "text":"goodbye"},
                {"id":7 , "text":"okay"}

            ],
            newMessagesBody: ''
        },

        sideBar:{
            friends:[
                {"name": "Matvey", "id": 1,"photo": "https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854" },
                {"name": "Kirill", "id": 2 ,"photo": "https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854"},
                {"name": "Maksim", "id": 3, "photo": "https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854"},
                {"name": "Matvey", "id": 1,"photo": "https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854" },
                {"name": "Kirill", "id": 2 ,"photo": "https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854"},
                {"name": "Maksim", "id": 3, "photo": "https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854"},

            ]
        }
    },

    _callSubscriber() {
        console.log("state change")
    } ,

    // addPost(postMessage){
    //
    //     let newPost ={
    //         text: postMessage,
    //         likes:"0",
    //         id:"7"
    //     };
    //
    //     this._state.profilePage.posts.push(newPost);
    //     this._callSubscriber(this._state);
    // },
    //
    // updateNewPostText (textMessages) {
    //     this._state.profilePage.newPostText = textMessages;
    //     this._callSubscriber(this._state);
    // },

    subscribe(observer){
        this._callSubscriber = observer;
    },

    getState(){
        return this._state;
    },

    dispatch(action){
        if(action.type === ADD_POST){
            let newPost ={
                text: action.text,
                likes:"0",
                id:"7"
            };
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
        }else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.body;
            this._callSubscriber(this._state);
        }

        else if(action.type === UPDATE_NEW_MESSAGES){
            this._state.dialogsPage.newMessagesBody = action.body;
            this._callSubscriber(this._state);
        }else if(action.type === SEND_MESSAGES){

            let body = this._state.dialogsPage.newMessagesBody;

            this._state.dialogsPage.newMessagesBody = '';

            this._state.dialogsPage.messages.push( {"id":8 , "text": body });
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = (text) => ({
    type:ADD_POST,
    text:text
})

export const updateNewPostTextActionCreator = (newPost) => ({
        type:UPDATE_NEW_POST_TEXT, text:newPost
})


export const addNewMessagesActionCreator = () => ({
    type:SEND_MESSAGES
})

export const newMessages = (newText) => ({
    type:UPDATE_NEW_MESSAGES, body: newText
})



export default store;
window.store = store;