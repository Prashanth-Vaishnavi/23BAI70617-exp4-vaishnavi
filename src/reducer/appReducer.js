export const initialState = {
  theme: "light",
  tasks: [],
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };

    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((t, i) => i !== action.payload),
      };

    case "CLEAR_TASKS":
      return { ...state, tasks: [] };

    default:
      return state;
  }
};