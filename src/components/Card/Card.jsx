import style from './Card.module.css'
import { Link } from 'react-router'
export default function Card({ movie }) {
    const { id, title, director, image } = movie
    return (
        <div className={style.card}>
            <img src={image} alt="" className={style.thumb} />
            <div className='p-4 absolute bottom-0 w-full rounded-b-lg bg-blue-950/90 text-white'>
                <h3 className='font-bold text-sm'>
                    {title}
                </h3>
                <p className={style.card}>
                    {director}
                </p>
                <Link className={style.card} to={`/movies/${id}`}>Read more</Link>
            </div>
        </div>
    )
}