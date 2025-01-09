export default function Card({ movie }) {
    const { title, director } = movie
    return (
        <div>
            <p>{title}</p>
            <p>{director}</p>
        </div>
    )
}