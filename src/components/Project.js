const Project = ({ image, imageKey, name, yearCompleted, description }) => {
  console.log(image);
  return (
    <li>
      <h2>{name}</h2>
      <p>{yearCompleted}</p>
      <p>{description}</p>
      <img src={`${image}`} alt={name} key={imageKey} />
    </li>
  );
};

export default Project;
