class Director {
    constructor(id, firstName, lastName, dob) {
      this._id = id;
      this._firstName = firstName;
      this._lastName = lastName;
      this._dob = dob;
    }
    
    // Getter for id
    get id() {
      return this._id;
    }
  
    // Setter for id
    set id(value) {
      this._id = value;
    }
  
    // Getter for firstName
    get firstName() {
      return this._firstName;
    }
  
    // Setter for firstName
    set firstName(value) {
      this._firstName = value;
    }
  
    // Getter for lastName
    get lastName() {
      return this._lastName;
    }
  
    // Setter for lastName
    set lastName(value) {
      this._lastName = value;
    }
  
    // Getter for dob
    get dob() {
      return this._dob;
    }
  
    // Setter for dob
    set dob(value) {
      this._dob = value;
    }
  }

  export default Director;
  