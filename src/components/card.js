import '../style.css'

export default function Card(prop) {
    console.log(prop.item)
    return (
        <div class='card'>
            <div class='container' style={{padding:'2rem'}}>
                <img src={prop.item.image_url} width='200rem'/>
               <h1 style={{fontSize:'2.5rem'}}>{prop.item.title}</h1>
               <p style={{fontSize:'1.5rem'}}>${prop.item.price}</p>
               <button>Log Details</button>
            </div>
        </div>
    )
} 