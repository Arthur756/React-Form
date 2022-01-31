import './App.css';
import student_vector from './assets/student_vector.jpg';
import { Cadastro } from './components/Cadastro';

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Cadastro />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={student_vector}/>
        </div>
      </div>
    </div>
  );
}

export default App;
