import { deactivateFilter } from './filter.js';
import { deactivateForm, activateForm } from './form.js';
import { resetMainMarkerPosition } from './map.js';

export const deactivatePage = () => {
  deactivateFilter();
  deactivateForm();
  resetMainMarkerPosition();
};

export const activatePage = () => {
  activateForm();
};
