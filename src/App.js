
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState,createContext} from 'react';
import './index.css';
import { Profile } from './Pages/Profile';
import { Dashboard } from './Pages/Dashboard';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()
export const AppContext= createContext();
const App = () => {
  const [publicKey,setPublickey]=useState("")

  return (
    <div className="App"> 
    <AppContext.Provider value={{publicKey,setPublickey}}>
      <QueryClientProvider client={queryClient}>
      <Router>
      <Routes>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='*' element={<div><h1>404 PAGE NOT FOUND</h1></div>}></Route>
      </Routes>
    </Router>  
    </QueryClientProvider>
    </AppContext.Provider>
    
    </div>

  );
};

export default App;
