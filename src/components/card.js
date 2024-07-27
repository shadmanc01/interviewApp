import '../style.css'

export default function Card(prop) {
    console.log(prop.item)
    return (
        <div class='card'>
            <div class='container'>
                <img src={prop.item.image_url} width='50%'/>
               <h1>{prop.item.title}</h1>
               <p>{prop.item.subtitle}</p>
               <p>${prop.item.price}</p>
            </div>
        </div>
    )
} 