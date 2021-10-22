import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <span className="flex-container">
      <div className={classes.card}>{props.children}</div>
    </span>
  );
};

export default Card;
