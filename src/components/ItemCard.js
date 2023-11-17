import { Link } from "react-router-dom";

function ItemCard(props) {
  const { data } = props;

  return (
    <div data-testid="item-card" className="card">
      <img
        data-testid="item-card-img"
        src={data.thumbnail}
        className="card-img-top"
        alt={data.title}
      />
      <div className="card-body">
        <h5 className="card-title">
          {data.title}
        </h5>
        <p className="card-text">
          {data.description}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          {data.brand}
        </li>
        <li className="list-group-item">
          {data.category}
        </li>
        <li className="list-group-item">
          {data.price}
        </li>
      </ul>
      <div data-testid="card-body" className="card-body">
        <Link
          to={`/products/${data.id}`}
          className="card-link"
          data-testid="link"
        >
          Read
        </Link>
      </div>
    </div>
  );
}

export default ItemCard;
