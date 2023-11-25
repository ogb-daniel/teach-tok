import mcq from "../api/mcq";
import createDataContext from "./createDataContext";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "get_mcqs":
      if (state.find((question: any) => question.id === action.payload.id)) {
        return state;
      }
      return [...state, action.payload];
    case "markMCQ":
      return state.map((question: any) =>
        question.id === action.payload.id
          ? { ...question, choice: action.payload.choice }
          : question
      );
    default:
      return state;
  }
};

const getMCQs = (dispatch: ({}) => any) => {
  return async () => {
    const response = await mcq.get("/for_you");

    dispatch({ type: "get_mcqs", payload: response.data });
  };
};

const markMCQ = (dispatch: ({}) => any) => {
  return (id: string, choice: string) => {
    dispatch({ type: "markMCQ", payload: { id, choice } });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { getMCQs, markMCQ },
  []
);
