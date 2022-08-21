import './ItemListContainer.css'
function ItemListContainer(props){
    return(
        <div>
        <h2>{props.titulo}</h2>
        <p>{props.slogan}</p>
        
        </div>
    )
}
export default ItemListContainer