import { useState } from "react";
import ComicsPage from "../comicsPage/comicsPage";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from '../../resources/img/vision.png';

const App = () => {
    const [selectedChar,setSelectedChar] = useState(null);

    const onCharCelected = (id) =>{
        setSelectedChar(id);
    }
    
    return (
        <div className="app">
            <AppHeader/> 
            {/* <main>
               <ErrorBoundary>
                    <RandomChar/>
              </ErrorBoundary>
                <div className="char__content">
                   <ErrorBoundary>
                        <CharList onCharCelected= {onCharCelected}/>
                   </ErrorBoundary>
                    <ErrorBoundary>
                        <CharInfo charId ={selectedChar}/>
                    </ErrorBoundary>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>  */}
           <ComicsPage/>  
        </div>
    )
}

export default App;