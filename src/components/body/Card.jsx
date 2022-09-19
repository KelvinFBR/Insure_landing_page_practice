export const Card = ({ urlImg, title, description }) => {
  return (
    <div className="flex flex-col justify-center lg:items-start items-center mt-20 lg:text-left text-center max-w-xs">
      <img src={urlImg} alt={title} />
      <h3 className="text-4xl text-dark-violet font-headings my-7">{title}</h3>
      <p className="font-body text-dark-grayish-violet">{description}</p>
    </div>
  );
};
