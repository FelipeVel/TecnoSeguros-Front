import "./Card.scss";

const Card = (props) => {
  const {
    className,
    title,
    description,
    image,
    button,
    imagePosition,
    orientation,
    link,
    onClickHandler,
  } = props;
  const cardImage = image ? (
    <div
      className={`card__image${
        imagePosition ? ` card__image__${imagePosition}` : ""
      }`}
    >
      <img src={image} alt="Card image" />
    </div>
  ) : (
    ""
  );
  const cardButton = button ? (
    <div className="card__button">
      <a href={link}>
        <button href={link} onClick={() => onClickHandler ? onClickHandler(props.value) : ""}>{button}</button>
      </a>
    </div>
  ) : (
    ""
  );
  return (
    <div
      className={`card ${
        orientation ? ` card__${orientation}` : ""
      } ${className}`}
    >
      {cardImage}
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        {cardButton}
      </div>
    </div>
  );
};

export default Card;
