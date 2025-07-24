// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let resultOne =  [];
  const director = array.map(item => item.director);
  resultOne.push(...director);
  console.log("EXERCICE 1 ->", resultOne);
  return resultOne;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let resultTwo = [];
  const directorMovie = array.filter(item => item.director === director);
  const directorMovieTitle = directorMovie.filter(item => item.title !== undefined && item.title !== null);
  resultTwo.push(...directorMovieTitle);
  console.log("EXERCICE 2 ->", resultTwo);
  return resultTwo;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let resultThree = 0;
  const directorScore = array.filter(item => item.director === director);
  const directorScoreTotal = directorScore.filter(item => item.score !== undefined && item.score !== null);
  resultThree = parseFloat((directorScoreTotal.reduce((accu, value) => accu + value.score, 0) / directorScoreTotal.length).toFixed(2));
  console.log("EXERCICE 3 ->", resultThree);
  return resultThree;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let resultFour =  [];
  for(let i = 0; i < array.length; i++) {
    resultFour.push(array[i].title);
  }
  console.log("EXERCICE 4 ->", resultFour); 
  resultFour.sort();
  return resultFour.slice(0, 20);
}



// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let resultFive =  [];
  const yearMovie = array.filter(item => item.year !== undefined && item.score !== null);
  resultFive.push(...yearMovie);
  console.log("EXERCICE 5 ->", resultFive); 
  resultFive.sort((a, b) => a.year - b.year);
  resultFive.sort();
  return resultFive;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}