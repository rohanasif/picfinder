import Image from "./Image";

const Images = ({ imageSources }) => {
  return (
    <div>
      {imageSources.map((src, index) => (
        <Image key={index} src={src} />
      ))}
    </div>
  );
};

export default Images;
