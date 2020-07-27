export default function Sort(attr, attr_two, attr_three) { // data, sorting type, isDescending

  if (attr_two === 'id') {
    attr.sort(function(a, b) { // sorting by id
      return a.id - b.id;
    })

    if (attr_three === true) { // reverses the data if the sorting is descending
      attr = attr.reverse()
    }

  } else if (attr_two === 'name') {
    attr.sort(function(a, b) { // sorting by name
      var nameA = a.firstName.toUpperCase();
      var nameB = b.firstName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    if (attr_three === true) {
      attr = attr.reverse()
    }

  } else if (attr_two === 'surname') {
    attr.sort(function(a, b) { // sorting by surname
      var nameA = a.lastName.toUpperCase();
      var nameB = b.lastName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    if (attr_three === true) {
      attr = attr.reverse()
    }
  }

  return attr;
}
