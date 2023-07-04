import './App.css';
import Header from "../src/components/Header"
import  Body from "../src/components/Body"
import { useState, React } from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import { Provider } from "react-redux";
import store from './components/utils/store';
import SearchVideos from './components/SearchVideos.js';
import { MyContext } from "./components/context";



const App = () => {
  const [text, setText] = useState("Home");

  return (
    <MyContext.Provider value={{ text, setText }}>
    <Provider store={store}>
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" exact element={<Body/>}/>
            <Route path="/watch" element={<WatchPage/>}/>
            <Route path="/search/:searchTerm" element={<SearchVideos/>}/>
        </Routes>
    </BrowserRouter>
    </Provider>
    </MyContext.Provider>
  )
} 

export default App
