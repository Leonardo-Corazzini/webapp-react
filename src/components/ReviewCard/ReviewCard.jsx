import style from "./ReviewCard.module.css"
function ReviewCard({ review }) {

    const { vote, name, text } = review
    return (
        <div className={style.card}>
            <p className={style.text}>{text}</p>
            <div className={style.vote}>
                <strong>Voto:{vote}</strong>
            </div>
            <div className={style.name}>
                - {name}
            </div>
        </div>
    )

}

export default ReviewCard;