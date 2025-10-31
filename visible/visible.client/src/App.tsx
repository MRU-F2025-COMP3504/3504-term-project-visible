import { useEffect, useState, createContext } from 'react';
import './App.css';
import { GigListings } from './modules/interfaces';
import DevComponent from './components/DevComponent';

export const Context = createContext<any>([])

function App() {
    //data state declarations
    const [gigs, setGigs] = useState<GigListings[]>();

    //context object
    const contextObj = {
        gigs:[gigs, setGigs]
    }

    return (
        <main>
            <Context.Provider value={contextObj}>
                <DevComponent />
            </Context.Provider>
        </main>
        
    );
}

export default App;