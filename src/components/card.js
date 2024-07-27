import "../style.css";

export default function Card(prop) {
  console.log(prop.item);
  return (
    <div class="card">
      <div class="product-container">
        <img class="prod-img" src={prop.item.image_url} />
        <h1 class="title">{prop.item.title}</h1>
        <p class="price">${prop.item.price}</p>
        <button class="btn">Log Details</button>
      </div>
    </div>
  );
}
