import { createRandomAdverts } from './random-adverts.js';
// import { addCard, activateMap, deactivateMap } from './map.js';
import './map.js';
import './form.js';

const randomAdverts = createRandomAdverts(10);

addCard(randomAdverts[5]);
