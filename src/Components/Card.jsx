import CardStyles from '../Styles/Card.module.css'

const Card = ({customer}) => {
  return (
    <div className={CardStyles.card} >
      <h3>Hola {customer.name}</h3>
      <h4 className={CardStyles.highlight} >✅ Ahora sabemos que tu banda o artista favorito es: {customer.artist}</h4>
      <h4>✅ Y que tú album favorito de ellos es: {customer.album}</h4>
    </div>
  )
};

export default Card;