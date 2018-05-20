export const isAdult = age => age>=18 ? 'Adult' : 'Minor';

export const canDrink = age => age>=21 ? 'Can drink' : 'Too young'

const isSenior = age => age>=65;

export default isSenior;