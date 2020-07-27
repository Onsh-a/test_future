export default function Search(attr, attr_two, attr_three){ // data, search query
  if (attr_two === ''){
    attr = attr_three;
  } else {
    attr = attr.filter((item) => {
      return item.firstName.toLowerCase().includes(attr_two.toLowerCase()) || item.lastName.toLowerCase().includes(attr_two.toLowerCase())
    })
  }

  console.log(attr)
  return attr;

}
