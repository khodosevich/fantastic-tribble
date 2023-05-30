
let rerenderEntireTree = () => {
    console.log("state change")
}

let state = {

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
            {"name": "Matvey", "id": 1,"photo": "https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854"},
            {"name": "Kirill", "id": 2},
            {"name": "Maksim", "id": 3},
            {"name": "Stas", "id": 4},
            {"name": "Ivan", "id": 5},
            {"name": "Artem", "id": 6}
        ],
        messages: [

            {"id":1 , "text":"> hi"},
            {"id":2 , "text":"> yo"},
            {"id":3 ,"text":"> how are you"},
            {"id":4 , "text":"> im nice , what about you?"},
            {"id":5 , "text":"> ohh, cool"},
            {"id":6 , "text":"> goodbye"},
            {"id":7 , "text":"> okay"}

        ]
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
}

export let addPost = (postMessage) => {

    let newPost ={
        text: postMessage,
        likes:"0",
        id:"7"
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export let updateNewPostText = (textMessages) => {
    state.profilePage.newPostText = textMessages;
    rerenderEntireTree(state);
}

export const subscribe = (observer) =>{
    rerenderEntireTree = observer;

}

export default state;