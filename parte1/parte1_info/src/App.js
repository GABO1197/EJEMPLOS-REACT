import logo from './logo.svg';
import './App.css';
import Mensaje from './mensaje.js'


function Descripcion (){
  return <p> ESTA ES LA APP DEL CURSO DE FULLSTACK BOOTCAMP</p>
}


function App() {

  return (
    <div className="App">
      <Mensaje color='red' message='ESTAMOS TRABJANAPD EN ELLO'/>
      <Mensaje color='yellow' message='EN UN CURSO'/>
      <Mensaje color='green' message='DE REACT'/>
      <Descripcion/>
    </div>
  );
}

export default App;
