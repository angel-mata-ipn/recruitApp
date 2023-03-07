import './styles/card.css'

export const Card = ({name,img,resumen,caracteriaticas,}) => {
  return (
    <>
<div class="card" style={{width:'18rem'}}>
  <img src='https://www.vipnet360.com/wp-content/uploads/2021/06/La-importancia-de-contar-con-un-desarrollador-o-programador-para-Wordpress_Vipnet360-1000x500.png' class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" style={{color:"black"}}>{name}</h5>
    <p class="card-text" style={{color:"black"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    </>
  )
}
