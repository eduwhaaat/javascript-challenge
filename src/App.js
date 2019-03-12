import React, { memo } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import { GroceriesProvider } from "./Context";
import GroceriesContainer from "./container/GroceriesContainer";

const App = memo(props => {

 /* 
  const globalStore = usePersistedContext(useContext(Store));

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore)
  );
 */
  return (
    <GroceriesProvider>
      <Layout>
        <GroceriesContainer />
      </Layout>
    </GroceriesProvider>
  );
});

export default App;
