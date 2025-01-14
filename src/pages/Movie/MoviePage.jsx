import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import style from './MoviePage.module.css'
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import FormReview from '../../components/FormReview/FormReview';
import { useContext } from 'react';
import globalContext from '../../context/globalContext';

export default function MoviePage() {
    const [movie, setMovie] = useState([])
    const { id } = useParams()
    const { setIsLoading } = useContext(globalContext)
    function fetchData() {
        setIsLoading(true)
        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then(res => {
                setMovie(res.data)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setIsLoading(false)
            })


    }
    useEffect(() => {
        fetchData()

    }, [id])
    return (
        movie ? <>
            <section>
                <div className="container">
                    <div>
                        <img className={style.image} src={movie.image} alt="" />
                    </div>
                    <div>
                        <h1 className={style.image}>{movie.title}</h1>
                        <div className={style.image}>
                            {movie.author}
                        </div>
                        <p className={style.image}>
                            {movie.abstract}
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <h2 className=''>Tutte le recensioni</h2>
                    <div className=''>
                        <strong className=''>Media:{movie.avg_vote}</strong>
                    </div>
                </div>
                {movie.reviews ?
                    <ul className="container">
                        {movie.reviews.map(review => (
                            <ReviewCard review={review} key={review.id} />
                        ))}
                    </ul> :
                    <div>Nessuna recensione</div>}
            </section>
            <section>
                <FormReview id={id} onSuccess={fetchData} />
            </section>

        </>
            : <div>Error...</div>
    )

}