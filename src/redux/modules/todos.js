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
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const EDIT_TODO = "CHANGE_TODO";

// Action Creators
// todo format
// {title : Productivity, todos: { todo: "운동하기", complete: false, id: "1"}}
// 이런 식으로 데이터를 받아야, 해당 title을 찾아 todo를 추가할 수 있을 듯
export const addTodo = (todo) => {
  return { type: ADD_TODO, todo };
};

// {title : Productivity, id}
export const updateTodo = (todo) => {
  return { type: UPDATE_TODO, todo };
};

// {title : Productivity, id}
export const deleteTodo = (todo) => {
  return { type: DELETE_TODO, todo };
};

export const editTodo = () => {};

// Reducers

// {title : Productivity, todos: { todo: "운동하기", complete: false, id: "1"}}
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_TODO":
      const addedObj = state.map((item) => {
        if (item.title === action.todo.title) {
          const newTodos = [...item.todos, action.todo.todos];
          return { ...item, todos: newTodos };
        }
        return item;
      });
      return addedObj;

    // {title : Productivity, id}
    case "UPDATE_TODO":
      const changedObj = state.map((item) => {
        if (item.title === action.todo.title) {
          const updatedTodos = item.todos.map((list) => {
            if (list.id === action.todo.id) {
              return { ...list, complete: !list.complete };
            }

            return list;
          });
          return { ...item, todos: updatedTodos };
        }

        return item;
      });
      return changedObj;

    // {title : Productivity, id}
    case "DELETE_TODO":
      const deletedObj = state.map((item) => {
        if (item.title === action.todo.title) {
          const deletedTodos = item.todos.filter(
            (list) => list.id !== action.todo.id
          );

          return { ...item, todos: deletedTodos };
        }
        return item;
      });

      return deletedObj;

    case "EDIT_TODO":
      return null;

    default:
      return state;
  }
}
