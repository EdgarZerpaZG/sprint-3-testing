function getAllDirectors(array) {
  let resultOne =  [];
  const director = array.map(item => item.director);
  resultOne.push(...director);
  console.log("EXERCICE 1 ->", resultOne);
  return resultOne;
}

function getMoviesFromDirector(array, director) {
  let resultTwo = [];
  const directorMovie = array.filter(item => item.director === director);
  const directorMovieTitle = directorMovie.filter(item => item.title !== undefined && item.title !== null);
  resultTwo.push(...directorMovieTitle);
  console.log("EXERCICE 2 ->", resultTwo);
  return resultTwo;
}

function moviesAverageOfDirector(array, director) {
  let resultThree = 0;
  const directorScore = array.filter(item => item.director === director);
  const directorScoreTotal = directorScore.filter(item => item.score !== undefined && item.score !== null);
  resultThree = parseFloat((directorScoreTotal.reduce((accu, value) => accu + value.score, 0) / directorScoreTotal.length).toFixed(2));
  console.log("EXERCICE 3 ->", resultThree);
  return resultThree;
}

function orderAlphabetically(array) {
  let resultFour =  [];
  for(let i = 0; i < array.length; i++) {
    resultFour.push(array[i].title);
  }
  console.log("EXERCICE 4 ->", resultFour); 
  resultFour.sort();
  return resultFour.slice(0, 20);
}

function orderByYear(array) {
  let resultFive =  [];
  const yearMovie = array.filter(item => item.year !== undefined && item.score !== null);
  resultFive.push(...yearMovie);
  console.log("EXERCICE 5 ->", resultFive); 
  resultFive.sort((a, b) => {
     if (a.year !== b.year) {
       return a.year - b.year;
     }
     return a.title.localeCompare(b.title);
    });
  return resultFive;
}

function moviesAverageByCategory(array, genre) {
  let resultSix = 0;
  const avarageCategory = array.filter(item => item.genre.find(gen => gen === genre));
  const avarageCategoryTotal = avarageCategory.filter(item => item.score !== undefined && item.score !== null);
  resultSix = parseFloat((avarageCategoryTotal.reduce((accu, value) => accu + value.score, 0) / avarageCategoryTotal.length).toFixed(2));
  console.log("EXERCICE 6 ->", resultSix);
  return resultSix;
}

function hoursToMinutes(array) {
  let resultSeven = array.map(item => {
    const duration = item.duration;
    let hours = 0;
    let minutes = 0;

    const hoursMatch = duration.match(/(\d+)h/);
    if (hoursMatch) {
      hours = parseInt(hoursMatch[1], 10);
    }

    const minutesMatch = duration.match(/(\d+)m/);
    if (minutesMatch) {
      minutes = parseInt(minutesMatch[1], 10);
    }

    const totalMinutes = hours * 60 + minutes;
    const updatedMovie = { ...item, duration: totalMinutes };

    console.log("EXERCISE 7 ->", updatedMovie);
    return updatedMovie;
  });

  return resultSeven;
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let resultEight = [];
  let yearFilmsScore = []
  const yearFilm = array.filter(item => item.year === year);
  const yearFilms = yearFilm.filter(item => item.score !== undefined && item.score !== null);
  yearFilmsScore.push(...yearFilms);
  resultEight.push(yearFilmsScore.reduce((max, objeto) => {
    return objeto.score > max.score ? objeto : max;
  }, yearFilmsScore[0]))
  console.log("EXERCISE 8 ->", resultEight);
  return resultEight;
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