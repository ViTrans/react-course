// eslint-disable-next-line react/prop-types
const Card = ({ image, title, desc }) => {
  return (
    <div>
      <div className="card">
        <img className="h-[200px]" src={image} alt="img" />
        <h2 className="">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
