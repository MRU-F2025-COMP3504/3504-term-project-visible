//This component is used for rapid development debugging & testing - it serves as a isolated environment to use for testing, that can be added or removed from the app's component tree as needed
import { useEffect, useContext } from "react"
import { Context } from "@/App"
import { Button } from "@/components/ui/button";
import { fetchAllGigListings } from "@/modules/data";
import { MouseEvent } from 'react';

const DevComponent = ()=>{
    const [gigs, setGigs] = useContext(Context).gigs
    console.log(gigs)
    
    const contents = gigs === undefined
        ?
        <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        :
        <table className="table table-striped" aria-labelledby="tableLabel">
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
        </table>

    useEffect(()=>{
        fetchAllGigListings(setGigs)
    }, [])

    return(
        <div>
            <h1 id="tableLabel">Recent Gigs</h1>
                            <p>This component demonstrates fetching data from the server.</p>
                            {contents}
                            <div className='bg-sky-800 m-4 p-2 rounded-md hover:bg-sky-600'>
                                <p>If this div is blue, tailwind is working.</p>
                            </div>
                            <Button onClick={(e: MouseEvent<HTMLButtonElement>)=>{
                                e.preventDefault();
                                console.log("Button was pressed.")
                            }}>If this button exists, shadcn installed properly.</Button>
        </div>
    )
}

export default DevComponent