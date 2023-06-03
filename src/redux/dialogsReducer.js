const SEND_MESSAGES = "SEND_MESSAGES";
const UPDATE_NEW_MESSAGES = "UPDATE_NEW_MESSAGES";

let init = {
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
    },}

const dialogsReducer = (state = init,action) => {

    if(action.type === UPDATE_NEW_MESSAGES){
        state.newMessagesBody = action.body;
    }else if(action.type === SEND_MESSAGES){

        let body = state.newMessagesBody;

        state.newMessagesBody = '';

        state.dialogsPage.messages.push( {"id":8 , "text": body });
    }

    return state;
}


export const addNewMessagesActionCreator = () => ({
    type:SEND_MESSAGES
})

export const newMessages = (newText) => ({
    type:UPDATE_NEW_MESSAGES, body: newText
})


export default dialogsReducer;