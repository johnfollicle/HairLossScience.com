import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TreatmentComparison from "./TreatmentComparison";
import TreatmentDetails from "./TreatmentDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TreatmentComparison />} />
        <Route path="/treatment/:id" element={<TreatmentDetails />} />
      </Routes>
    </Router>
  );
};

export default App;