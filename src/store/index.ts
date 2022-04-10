export interface state {
  loading: boolean;
  data: Array<any>;
  error: string;
}

export const initialState: state = {
  loading: false,
  data: [],
  error: "",
};

export const reducer = (state: state, action: any) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, loading: true };
    case "STOP_LOADING":
      return { ...state, loading: false };
    case "STORE_DATA":
      return { ...state, data: action.payload };
    case "SET_ERROR":
      return { ...state, error: "Something went wrong..." };
    default:
      return state;
  }
};
