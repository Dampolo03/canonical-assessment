import { useEffect, useReducer } from "react";
import { DataContext } from "./context/DataContext";
import { initialState, reducer } from "./store";
import { Header } from "./components/Header/Header";
import { MainBody } from "./components/MainBody/MainBody";
import { ErrorComponent } from "./components/Error/Error";
import { Loader } from "./components/Loader/Loader";
import { fetchApi } from "./api/api";
import "./App.scss";

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, error } = state;

  useEffect(() => {
    dispatch({ type: "START_LOADING" });
    const getData = async () => {
      try {
        const obtainedData = await fetchApi();
        dispatch({ type: "STORE_DATA", payload: obtainedData });
        dispatch({ type: "STOP_LOADING" });
      } catch {
        dispatch({ type: "SET_ERROR" });
        dispatch({ type: "STOP_LOADING" });
      }
    };

    getData();
  }, []);

  return (
    <DataContext.Provider value={state}>
      <div className="app">
        <Header />
        {loading ? <Loader /> : error ? <ErrorComponent /> : <MainBody />}
      </div>
    </DataContext.Provider>
  );
};
