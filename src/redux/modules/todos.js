// Initial State
const initialState = [
  {
    title: "Productivity",
    todos: [
      { todo: "책 읽기", complete: true, id: "1" },
      { todo: "공부하기", complete: true, id: "2" },
      { todo: "운동하기", complete: false, id: "3" },
    ],
  },
  {
    title: "Assignments",
    todos: [
      { todo: "리액트 발표준비하기", complete: true, id: "1" },
      { todo: "토이 프로젝트 하기", complete: true, id: "2" },
      { todo: "파이널 프로젝트 하기", complete: false, id: "3" },
    ],
  },
  {
    title: "Work",
    todos: [
      { todo: "코딩 공부하기", complete: false, id: "1" },
      { todo: "TIL 작성하기", complete: false, id: "2" },
      { todo: "운동하기", complete: false, id: "3" },
    ],
  },
];

// Action

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const EDIT_TODO = "CHANGE_TODO";
const UPDATE_TODO = "UPDATE_TODO";

// Action Creators
// todo format
// {title : Productivity, todos: { todo: "운동하기", complete: false, id: "1"}}
// 이런 식으로 데이터를 받아야, 해당 title을 찾아 todo를 추가할 수 있을 듯
export const addTodo = (todo) => {
  return { type: ADD_TODO, todo };
};

export const deleteTodo = () => {};

export const editTodo = () => {};
export const updateTodo = () => {};

// Reducers

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_TODO": {
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }

    case "bucket/DELETE":
      const bucket_list = state.list.filter((l, idx) => {
        if (idx !== action.bucket) {
          return l;
        }
      });
      return { list: bucket_list };

    case "bucket/UPDATE": {
      const bucket_list = state.list.map((l, idx) => {
        if (idx === action.bucket) {
          return { ...l, completed: true };
        }
        return l;
      });
      // console.log(bucket_list); [{},{},{}] 형태
      return { list: bucket_list };
    }

    default:
      return state;
  }
}
