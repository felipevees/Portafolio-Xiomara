import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./Layouts";
import { Home, Error404 } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="*"
          element={
            <MainLayout>
              <Error404 />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
