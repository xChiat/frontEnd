class Genero {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }
  
  // Getter for id
  get id() {
    return this._id;
  }

  // Setter for id
  set id(value) {
    this._id = value;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(value) {
    this._name = value;
  }
}

export default Genero;
