import './App.css';

import { useState,useEffect} from "react";

let id;

const App = () => {
  
    const [actors,setActors]=useState("");
    const [song,setSong]=useState("");
    const [datax,setData]=useState();

    const handleActors=(e)=>{
        setActors(e.target.value);
    }

    const handleSong=(e)=>{
        setSong(e.target.value);
    }

    const loadApi=()=>{
        console.log(`${song} ${actors}`)

        id=0;
        setTimeout(()=>{
        const url = `https://itunes.apple.com/search?term=${actors}&media=music&entity=${song}`;

        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            console.log(data.results);
            setData(data.results);

        
        }
        );

    },2000)
    
    }
  
    useEffect(()=>{
        if(actors.length===0) return;
        console.log("Actors",actors);
      },[actors])


    return (
      <div>
        <h2>LIsta </h2>
    
    <div className="forma">
    <label htmlFor="actors">Unesi ime</label>
    <input type="text" id="actors" value={actors} onChange={handleActors}/>
    </div>

    <div className="forma">
    <label htmlFor="song">Unesi zanr</label>
    <input type="text" id="song" value={song} onChange={handleSong}/>
    </div>
    <div className="forma">
    <button onClick={loadApi} >Stisni</button>
    </div>
    
   {datax && 
        (datax.length!==0?(
            <div className="tablex">
             <table className="tabla1">
                <thead>
                
                </thead><tbody>{datax.map(item=>{
            return(
            <tr key={id++}>
                <td>{item.artistName}</td>
                <td>{item.collectionCensoredName}</td>
                <td>{item.collectionName}</td>
                <td>{item.collectionPrice}</td>
            </tr>);
        }

        )}</tbody></table> </div>):(<div>Nema rezultata</div>))

        }

    
 
  
      </div>
    );
  };


  export default App;
