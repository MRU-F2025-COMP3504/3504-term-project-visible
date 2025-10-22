import { useEffect, useState } from 'react';
import './App.css';

interface GigListings {
    id: number;
    author: string;
    description: string;
    budget: string;
}

function App() {
    const [gigs, setGigs] = useState<GigListings[]>();

    useEffect(() => {
        populateGigPostings();
    }, []);

    const contents = gigs === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Description</th>
                    <th>Budget</th>
                </tr>
            </thead>
            <tbody>
                {gigs.map(gig =>
                    <tr key={gig.id}>
                        <td>{gig.author}</td>
                        <td>{gig.description}</td>
                        <td>{gig.budget}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tableLabel">Recent Gigs</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );

    async function populateGigPostings() {
        const response = await fetch('api/giglistings');
        const data = await response.json();
        setGigs(data);
    }
}

export default App;