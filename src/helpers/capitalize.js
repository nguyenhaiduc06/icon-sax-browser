const capitalize = (string) => {
  const a = string.split('');
  a[0] = a[0].toUpperCase();
  return a.join('');
}

export default capitalize;
