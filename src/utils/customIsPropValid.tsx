import isPropValid from '@emotion/is-prop-valid';


export const customIsPropValid = (propName: string) => {
    // Permitir o uso da prop `tilte`
    if (propName === 'tilte') {
        return true;
    }
 
    return isPropValid(propName);
 };