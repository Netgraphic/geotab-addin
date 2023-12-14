import { Route, Routes } from "react-router-dom";
import Setup from "./routes/Setup";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Setup />} />
      </Routes>
    </main>
  );
};

export default App;
