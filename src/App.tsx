import "./App.css";
import { SparklesPreview } from "./pages/HeaderDemo";
import SearchWithPagination from "./pages/SearchPagination";

function App() {
  return (
    <div className="bg-black">
      <SparklesPreview />
      <div >
        <SearchWithPagination />
      </div>
    </div>
  );
}

export default App;
