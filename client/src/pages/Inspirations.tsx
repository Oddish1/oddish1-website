'use client'
import Interest from '../components/Interest';
import { useEffect, useState } from 'react';

export default function Inspirations() {

    const [inspirations, setInspirations] = useState([]);
    useEffect(() => {
	const fetchInspirations = async () => {
	    const res = await fetch('/api/v1/inspirations');
	    const data = await res.json();
	    setInspirations(data);
	};
	fetchInspirations();
    }, []);
    
    console.log(`inspirations: ${JSON.stringify(inspirations)}`);

    return (
        <>
            <main className="content">
                    <h1 className="title">Inspiration</h1>
                    <img className="gif" src="/images/inspired-by-myself.gif" alt="'I am big enough to admit that I am often inspired by myself.' GIF from Parks and Rec."></img>
                    <p className="text blurb">
                        LOL, Feeling inspired yet?
                    </p>
                    <br />
                    <div className="inspirations-container">
                        {inspirations.map((inspiration) => (
                            <Interest key={inspiration.id} item={inspiration} />
                        ))}
                    </div>
            </main>
        </>
    )
}
