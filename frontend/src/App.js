import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreateQuestions from './components/CreateQuestions';
import Navbar from './components/Navbar';
import Card from './components/Card';
import EditQuestion from './components/EditQuestion';
function App() {
  return (

    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Card />} />

          <Route path="/card" element={<Card />} />


          <Route path="/createquestions" element={<CreateQuestions />} />


          <Route path="/updatequestion" element={<EditQuestion />} />
        </Routes>


      </BrowserRouter>


    </>
  );
}

export default App;
