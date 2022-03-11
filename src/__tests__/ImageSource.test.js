import ImageSource from '../Components/ImageSource/ImageSource';

const output = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/ng/vector.svg';

describe('ImageSource function', () => {
  test('should return country source link', () => {
    const country = 'Nigeria';
    expect(ImageSource(country)).toBe(output);
  });
});
