import { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react';
import globalContext from '../../context/globalContext';

const initialFormData = {
    vote: 1,
    name: '',
    text: ''
}

function FormReview({ id, onSuccess = () => { } }) {

    const [formData, setFormData] = useState(initialFormData)
    const { setIsLoading } = useContext(globalContext)

    function onFormChange(e) {
        const { value, name } = e.target


        setFormData({
            ...formData,
            [name]: value
        })


    }

    function storeReview(e) {
        e.preventDefault()
        setIsLoading(true)

        axios.post(`http://localhost:3000/api/movies/${id}/reviews`, formData)
            .then(res => {
                console.log(res)
                setFormData(initialFormData)
                onSuccess()
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <div className="">
            <div className=''>
                <div className=''>
                    <strong>
                        Aggiungi recensione
                    </strong>
                </div>
            </div>
            <div className=''>
                <form onSubmit={storeReview} className=''>
                    <p className=''>
                        <label htmlFor="name">Nome *</label>
                        <input required type="text" placeholder='inserisci il tuo nome' name='name' id='name' value={formData.name} onChange={onFormChange} />
                    </p>
                    <p className=''>
                        <label htmlFor="text">Recensione</label>
                        <textarea rows="4" name="text" id="text" placeholder='Scrivi la tua recensione' value={formData.text} onChange={onFormChange}></textarea>
                    </p>
                    <p className=''>
                        <label htmlFor="vote">Voto *</label>
                        <select required name="vote" id="vote" value={formData.vote} onChange={onFormChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </p>
                    <div className=''>
                        <button className=''>Invia
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormReview