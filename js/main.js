import { createRandomAdverts } from './random-adverts.js';
// import { addCard, activateMap, deactivateMap } from './map.js';
import { addCard } from './map.js';

const randomAdverts = createRandomAdverts(10);

addCard(randomAdverts[3]);
