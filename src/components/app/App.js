import AppHeader from "../appHeader/AppHeader";
import MainPage from "../pages/MainPage";
import CommicsPage from "../pages/ComicsPage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/> 
                <main>
                    <Routes>
                        <Route path='/' element={<MainPage/>}/>
                        <Route path ='/comics' element={ <CommicsPage/>}/>
                    </Routes>
                </main> 
            </div>
        </Router>  
    )
}

export default App;