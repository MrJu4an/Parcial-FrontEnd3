import { useState } from 'react'
import MessageError from './MesaggeError'
import Card from './Card'
import FormStyles from '../Styles/Form.module.css'

const Form = () => {

  const [customer, setCustomer] = useState({
    name: "",
    artist: "",
    album: ""
  })

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(customer)
    if( customer.name.trim().length > 3 && customer.artist.trim().length > 6 && customer.album.trim().length > 3) {
      setShow(true)
      setError(false)
    } else {
      setShow(false)
      setError(true)
    }
  }

  const handleChange = (e) => {
    setCustomer({...customer, [e.target.name]: e.target.value})
  }

  return (
    <>
      {
        <>
          <form className={FormStyles.formContainer} onSubmit={handleSubmit}>
              <div>
                <label>Nombre:</label>
                <input name='name' type='text' value={customer.name} onChange={handleChange} autoComplete='off' />
              </div>
              <div>
                <label>Artista:</label>
                <input name='artist' type='text' value={customer.artist} onChange={handleChange} autoComplete='off' />
              </div>
              <div>
                <label>Album:</label>
                <input name='album' type='text' value={customer.album} onChange={handleChange} autoComplete='off' />
              </div>
              <button type='submit'>Enviar</button>
          </form>
        </>
      }

      { 
        error && (
          <>
            <MessageError />
          </>
        )
      }
      
      {
        show && (
          <>
            <Card customer={customer} />
          </>
        )
      } 
        
    </>
  )
}

export default Form
