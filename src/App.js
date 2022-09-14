import { useEffect, useState } from "react";
import ListadeMonstros from "./components/listadeMonstros";
import ButtonLimpar from "./components/buttonLimpar";

function App() {
  
  const [dados, setDados] = useState([]);

  const apagarDados = () => {
    setDados([]);
  };

  /*const [dadosFake, setDadosFake] = useState(dados); //olhar
  const apagarDados = () => {
    setDadosFake([]);
  }
  */

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((dadosAPI) => setDados(dadosAPI.slice(0, 5))); //slice: deixar só 5 gatos
  }, [])

  return (
    <main>
      <section className="container">
        <h1>{dados.length} monstros</h1>

        <ListadeMonstros dados={dados} />

        <ButtonLimpar apagarDados={apagarDados} />
      </section>
    </main>
  );
}

export default App;