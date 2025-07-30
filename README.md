# IT Academy - Sprint N°3: Testing

### Project Overview

The following project demonstrates the implementation of Unit Test for different functionalities that have been developed to follow specific steps to verify the correct return of the requested information.

The JavaScript testing library Jest was used to execute the tests. This library can be installed through the NPM package system.

### Getting Started

**Prerequisites:**

 * Node.js installed on your machine.
 * A code editor like Visual Studio Code.

### Installation

1. Clone this repository:
```
git clone https://github.com/EdgarZerpaZG/sprint-3-testing.git
cd sprint-3-testing
```

2. Install dependencies:
```
npm install
```

### Directory
```
Sprint 3: Testing/
├── src/
│   └── main.js
├── tests/
│   └── films.spec.js
├── package.json
└── README.md
```

### Running Tests
```
npm run test:watch
```

### Exercises

## Level I

1. Get the array of all directors.

Description:
Return an array with the names of all directors from the movie array.

2. Get the films of a certain director.

Description:
Return an array with the films of one specific director.

3. Calculate the average of the films of a given director.

Description:
Return an array with the average score of differents movies.

4. Alphabetic order by title.

Description:
Return an array with the movies in alphabatic order.

5. Order by year, ascending.

Description:
Return an array with the movies sorted by year in ascending order.

6. Calculate the average of the movies in a category.

Description:
Return an array with the average score of one category from differents movies.

## Level II

7. Modify the duration of movies to minutes.

Description:
Return an array with the duration modified from a string to number in minutes.

## Level III

8. Get the best film of a year.

Description:
Return an array with the best movie by score in a certain year.