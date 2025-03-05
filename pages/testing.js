import { useState, useEffect } from "react";

export default function App() {
    const [randomSurvey, setRandomSurvey] = useState(null); 

    useEffect(() => {
        const fetchRandomSurvey = async () => {
            try {
                const response = await fetch("/api/random-survey"); 
                if (!response.ok) throw new Error("Failed to fetch random survey");
                const data = await response.json();
                setRandomSurvey(data); 
            } catch (error) {
                console.error("Error fetching random survey:", error);
            }
        };

        fetchRandomSurvey();
    }, []); 
    console.log("Random Survey Data:", randomSurvey);

    return (
        <div>
            <h1>Check the console for testing survey data</h1>
        </div>
    );
}
