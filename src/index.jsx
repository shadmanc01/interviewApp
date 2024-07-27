import { hydrate, prerender as ssr } from "preact-iso";
import { useState, useEffect } from "preact/hooks";
import Card from "./components/card";
import Header from "./components/header";
import "./style.css";

export function App() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetch(
        "https://www.ikea.com/global/assets/variera/shopping-experience-dev/se_test/data.json"
      );
      const jsonData = await data.json();
      setResult(jsonData.items);
    }
    getData();
  }, []);

  // console.log(result)

  return (
    <>
      <div class="header">
        <Header />
      </div>
      <div class="body">
        {result.map((product) => (
          <Card item={product} />
        ))}
      </div>
    </>
  );
}

function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
