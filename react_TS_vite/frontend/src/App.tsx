import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <ul>
        <li>
          <a href="/"> Home </a>
        </li>
        <li>
          <a href="/features"> features </a>
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Hello</h1>
            </div>
          }
        ></Route>
        <Route path="/features">
          <div>
            <h1>features</h1>
          </div>
        </Route>
      </Routes>
    </>
  );
};

export default App;
