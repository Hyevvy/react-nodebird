export const initialState ={
    mainPosts:[{
        id: 1,
        User:{
            id:1,
            nickname:'제로초',
        },
        content:'첫번째 게시글 #해시태그 #익스프레스',
        Images:[
            {src: 'https://images.app.goo.gl/biC6mM7WzBApNwNR7'},
            {src:'https://images.app.goo.gl/bMfV8H8zA1tZWogo9'},
            {src:'https://images.app.goo.gl/TRVJwFZD6YUGxNjr5'}
        ],
        Comments:[{
            User:{
                nickname:'nero'
            },
            content:'우왕'
        },{
            User:{
                nickname:'dumbo'
            },
            content:'안뇽'
        }]
    }],
    imagePaths:[],
    postAdded: false
}

const ADD_POST= 'ADD_POST'
export const addPost = {
    type:ADD_POST
}

const dummyPost = {
    id:2,
    content:'더미데이터입니다',
    user:{
        id:1,
        nickname:'혜삐'
    },
    Images:[],
    Comments:[]
}

const reducer =(state=initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                mainPosts:[dummyPost, ...state.mainPosts],
                postAdded:true
            }
        default:
            return state;
    }
}
export default reducer;