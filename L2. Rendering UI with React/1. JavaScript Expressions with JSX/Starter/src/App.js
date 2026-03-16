import logo from "./logo192.png";
import "./App.css";

const App = () => {
  const name = "React";

  const facts = {
    releaseDate: "May 2013",
    language: "JavaScript",
    license: "MIT",
  };

  const aboutReact = (facts) =>
    `Release date: ${facts.releaseDate}. Language: ${facts.releaseDate}. License: ${facts.license}.`;



  return <div className="container">
    <img src={logo} alt="react logo"></img>
    <h1>{name}</h1>

    <h3>Some fact about React</h3>
    <p>{aboutReact(facts)}</p>
    
    {/*what is wrong in below code? 
      <ol>
        <li key={facts.releaseDate}>Release Date: {facts.releaseDate}</li>
        <li key={facts.language}>Language: {facts.language}</li>
        <li key={facts.license}>Liscence: {facts.license}</li>

      </ol>
    */ }

  </div>;
};

export default App;
