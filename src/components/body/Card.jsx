export const Card = ({ urlImg, title, description }) => {
  return (
    <div>
      <img src={urlImg} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
