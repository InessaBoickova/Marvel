import { lazy, Suspense } from "react";
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const Page404 = lazy (()=> import('../pages/404'));
const MainPage = lazy (()=> import('../pages/MainPage'));
const ComicsPage = lazy (()=> import('../pages/ComicsPage'));
const SingleComicPage = lazy (()=> import('../pages/SingleComicPage'));

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/> 
                <main>
                   <Suspense fallback= {<span><Spinner/></span>}>
                        <Routes>
                            <Route path='/Marvel/' element={<MainPage/>}/>
                            <Route path ='/comics' element={ <ComicsPage/>}/>
                            <Route path ='/comics/:comicId' element={ <SingleComicPage/>}/>
                            <Route path='*' element ={<Page404/>}/>
                        </Routes>
                   </Suspense>
                </main> 
            </div>
        </Router>  
    )
}

export default App;