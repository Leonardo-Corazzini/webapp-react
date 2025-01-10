import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card/Card';



export default function HomePage() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('http://localhost:3000/api/movies')
            console.log(data)
            setMovies(data)
        }
        fetchData()

    }, [])
    return (
        <section>
            <div className="container">
                <h2>elenco film</h2>
                <div className="row">
                    {movies.map(movie =>
                        <div className="col" key={movie.id}>
                            <Card movie={movie} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}