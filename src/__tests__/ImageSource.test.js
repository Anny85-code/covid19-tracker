import ImageSource from '../Components/ImageSource/ImageSource';

let output = '';
describe('ImageSource function', () => {
  output = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/ng/vector.svg';
  test('should return country source link', () => {
    const country = 'Nigeria';
    expect(ImageSource(country)).toBe(output);
  });

  test('should return country source link', () => {
    output = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/ru/vector.svg';
    const country = 'Russia';
    expect(ImageSource(country)).toBe(output);
  });

  test('should return country source link', () => {
    output = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/sn/vector.svg';

    const country = 'Senegal';
    expect(ImageSource(country)).toBe(output);
  });

  test('should return country source link', () => {
    output = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/tg/vector.svg';
    const country = 'Togo';
    expect(ImageSource(country)).toBe(output);
  });

  test('should return country source link', () => {
    output = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/za/vector.svg';
    const country = 'South Africa';
    expect(ImageSource(country)).toBe(output);
  });

  test('should return country source link', () => {
    output = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/zm/vector.svg';

    const country = 'Zambia';
    expect(ImageSource(country)).toBe(output);
  });

  test('should return country source link', () => {
    output = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/es/vector.svg';
    const country = 'Spain';
    expect(ImageSource(country)).toBe(output);
  });

  test('should return country source link', () => {
    output = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/in/vector.svg';
    const country = 'India';
    expect(ImageSource(country)).toBe(output);
  });

  test('should return country source link', () => {
    output = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/cy/vector.svg';

    const country = 'Cyprus';
    expect(ImageSource(country)).toBe(output);
  });

  test('should return country source link', () => {
    output = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/ca/vector.svg';
    const country = 'Canada';
    expect(ImageSource(country)).toBe(output);
  });
});
