import React from "react";
import { Provider } from "react-redux";
import TaskManager from "./src/components/TaskManager";
import store from "./store";
import NavigationPage from "./Naigation";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationPage />
    </Provider>
  );
};

export default App;