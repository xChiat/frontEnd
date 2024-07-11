class Movie {
    constructor(id, title, year, duration, genres, director) {
      this._id = id;
      this._title = title;
      this._year = year;
      this._duration = duration;
      this._genres = genres;
      this._director = director;
    }
    
    // Getter for id
    get id() {
      return this._id;
    }
  
    // Setter for id
    set id(value) {
      this._id = value;
    }
  
    // Getter for title
    get title() {
      return this._title;
    }
  
    // Setter for title
    set title(value) {
      this._title = value;
    }
  
    // Getter for year
    get year() {
      return this._year;
    }
  
    // Setter for year
    set year(value) {
      this._year = value;
    }
  
    // Getter for duration
    get duration() {
      return this._duration;
    }
  
    // Setter for duration
    set duration(value) {
      this._duration = value;
    }
  
    // Getter for genres
    get genres() {
      return this._genres;
    }
  
    // Setter for genres
    set genres(value) {
      this._genres = value;
    }
  
    // Getter for director
    get director() {
      return this._director;
    }
  
    // Setter for director
    set director(value) {
      this._director = value;
    }
  }

  export default Movie;
