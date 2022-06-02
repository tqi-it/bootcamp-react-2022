import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import BooksApi from "./services/books";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    BooksApi.page({}, 0, 5)
      .then((data) => {
        setData(data);

        // TODO: exemplo para fetch
        console.log(data);
      })
      .catch((error) => console.log("Erro", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <ul>
          {data?.books?.map((item) => (
            <li key={item.code}>
              <p>{item?.author}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;