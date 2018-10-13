const minLength = value => value && value.length < 2 ? false : true;
const movieYear = value => value && value < 1895 ? false : true;
const numeric = value => value && isNaN(Number(value)) ? false : true;
const alphaNumeric = value => value && /[^a-zA-Z0-9 ]/i.test(value) ?  false : true;
const longMovie = value => value && value.replace(/\D/g, "") > 360 ? false : true;
const alphabetic = value => value && /[^a-zA-Z ,]/i.test(value) ? false : true;
const shortMovie = value => value && value.replace(/\D/g, "") < 5 ? false : true;

const requiredDescription = 'Well, this field is required';
const minLengthDescription = `Must be 2 characters or more`;
const minYearDescription = 'Well, the first ever movie created in 1895...';
const notNumberDescription = 'Must be a number' 
const alphaNumericDescription = 'Only alphabetic and numeric characters allowed';
const longMovieDescription = 'Wow! longer then 6 hours??';
const alphabeticDescription = 'Only alphabetic characters and commas allowed';
const alreadyExistsTitleDescription = 'Well, this title already exists.. ';
const shortMovieDescription = 'This movie is pretty short..';

export const warn = values => {
    const warnings = {}
    if (!movieYear(values.Year)) {
        warnings.Year = minYearDescription;
    }
    if(!longMovie(values.Runtime)) {
        warnings.Runtime = longMovieDescription;
    }    
    else if(!shortMovie(values.Runtime)) {
        warnings.Runtime = shortMovieDescription;
    }    

    return warnings
}

export const validate = (values, props) => {
    const errors = {}

    if (!values.Title) {
        errors.Title = requiredDescription;
    }
    else if (props.movies.find(movie => movie.Title.toLowerCase() === values.Title.toLowerCase())) {
        errors.Title = alreadyExistsTitleDescription;
    }
    else if (!minLength(values.Title)) {
        errors.Title = minLengthDescription;
    }
    else if (!alphabetic(values.Title)) {
        errors.Title = alphabeticDescription;
    }

    if (!values.Director) {
        errors.Director = requiredDescription;
    }
    else if (!minLength(values.Director)) {
        errors.Director = minLengthDescription;
    }
    else if (!alphabetic(values.Director)) {
        errors.Director = alphabeticDescription;
    }

    if (!values.Year) {
        errors.Year = requiredDescription;
    }
    else if (!numeric(values.Year)) {
        errors.Year = notNumberDescription;
    }

    if (!values.Runtime) {
        errors.Runtime = requiredDescription;
    }
    else if (!minLength(values.Runtime)) {
        errors.Runtime = minLengthDescription;
    }
    else if (!alphaNumeric(values.Runtime)) {
        errors.Runtime = alphaNumericDescription;
    }

    if (!values.Genre) {
        errors.Genre = requiredDescription;
    }
    else if (!minLength(values.Genre)) {
        errors.Genre = minLengthDescription;
    }
    else if (!alphabetic(values.Genre)) {
        errors.Genre = alphabeticDescription;
    }

    return errors
}


