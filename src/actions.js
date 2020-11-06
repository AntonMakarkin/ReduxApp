export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const rnd = () => {
    return {type: 'INC', value: Math.floor(Math.random() * 10)}
};