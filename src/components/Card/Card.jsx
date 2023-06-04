import "./Card.scss";

const Card = (props) => {
  const { title, description, image, imagePosition, orientation } = props;
  return (
    <div className={`card${orientation ? ` card__${orientation}` : ""}`}>
      <div
        className={`card__image${
          imagePosition ? ` card__image__${imagePosition}` : ""
        }`}
      >
        <img src={image} alt="card" />
      </div>
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
