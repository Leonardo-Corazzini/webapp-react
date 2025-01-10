function ReviewCard({ review }) {

    const { vote, name, text } = review
    return (
        <div className=''>
            <p className=''>{text}</p>
            <div className=''>
                <strong>Voto:{vote}</strong>
            </div>
            <div className=''>
                By {name}
            </div>
        </div>
    )

}

export default ReviewCard;