import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="Nav">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
      <div class="container text-center">
        <div class="row row-cols-2">
          <div class="col">
            <img src="./fotonom.jpeg" class="img-fluid rounded-start" width="250" height="250" />
          </div>
          <div class="col">
            <br />
            <h5 class="card-title">Micol Iara Herrera Salerno</h5>
            <br />
            <p className="text-end">Desarrolladora de citio web. En buscqueda de un buen ambiente laboral con grandes desafio y mas que todo con muchas ganas de aprender cosas nuevas , donde la cratividad sea un elemento fundamental para el desarrollo del trabajo tanto individual como en el equipo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
