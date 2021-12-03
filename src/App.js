
import './App.css';

function App() {

   const nextjoke = async ()=>{
      let api = await (await fetch("https://type.fit/api/quotes")).json();
      const no = Math.round(Math.random()*1000);

      console.log(no);
      console.log(api[no].text);
      document.getElementById('joke_holder').innerHTML = api[no].text;
    }

  return (
  <>
  <div className= "main_container"> 
    <div className = "container">

    <h1 id="joke_holder"> click to quote</h1>
    <button onClick={nextjoke}>Next</button>
    </div>



  </div>
  </>
  );
}

export default App;
