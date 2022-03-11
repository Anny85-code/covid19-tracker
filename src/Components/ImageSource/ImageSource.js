import CountryCode from './CountryCode';

const ImageSource = (country) => {
  const code = CountryCode[country].toLowerCase();
  const url = `https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/${code}/vector.svg`;
  return url;
};

export default ImageSource;
