const filterProps = (obj, props) =>
  obj.map((item) => {
    const modified = {};
    props.forEach((prop) => (modified[prop] = item[prop]));
    return modified;
  });
export default filterProps;
