import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {

        // profilePage:{
        //     posts: [
        //         {
        //             "text":"hello, my name is Matvey",
        //             "likes":"100",
        //             "id":"0"
        //         },
        //         {
        //             "text":"hey",
        //             "likes":"5",
        //             "id":"1"
        //         },
        //         {
        //             "text":"Chelsea champion",
        //             "likes":"1",
        //             "id":"2"
        //         },
        //         {
        //             "text":"have a good day",
        //             "likes":"100",
        //             "id":"3"
        //         },
        //         {
        //             "text":"react",
        //             "likes":"10",
        //             "id":"4"
        //         },
        //         {
        //             "text":"first post!",
        //             "likes":"1213",
        //             "id":"5"
        //         }
        //     ],
        //     newPostText:{}
        // },

        // dialogsPage: {
        //     dialogs:[
        //         {"name": "Matvey", "id": 1,"photo": "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"},
        //         {"name": "Kirill", "id": 2 , "photo": "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg" },
        //         {"name": "Maksim", "id": 3 , "photo":"https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg" },
        //         {"name": "Stas", "id": 4 , "photo": "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"},
        //         {"name": "Ivan", "id": 5 , "photo": "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"},
        //         {"name": "Artem", "id": 6 ,"photo": "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"}
        //     ],
        //     messages: [
        //
        //         {"id":1 , "text":"hi"},
        //         {"id":2 , "text":"yo"},
        //         {"id":3 ,"text":"how are you"},
        //         {"id":4 , "text":"im nice , what about you?"},
        //         {"id":5 , "text":"ohh, cool"},
        //         {"id":6 , "text":"goodbye"},
        //         {"id":7 , "text":"okay"}
        //
        //     ],
        //     newMessagesBody: ''
        // },



    },

    _callSubscriber() {
        console.log("state change")
    } ,

    subscribe(observer){
        this._callSubscriber = observer;
    },

    getState(){
        return this._state;
    },

    dispatch(action){
         this._state.profilePage = profileReducer(this._state.profilePage , action);
         this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage , action);

        this._callSubscriber(this._state);
    }

}


export default store;
window.store = store;