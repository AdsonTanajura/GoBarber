import { ValidationError } from 'yup';

interface Errors {
    [Key: string]: string;
}


export default function getValidationError(err: ValidationError) {
    const validationErrors: Errors = {};

    err.inner.forEach(error => {
        if (error.path) {validationErrors[error.path] = error.message}

        else{
            return console.log(error)
        }
    })

    return validationErrors;
}