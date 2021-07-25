import { deactivateFilter } from './filter.js';
import { deactivateForm } from './form.js';
import { resetMainMarkerPosition } from './map.js';

export const deactivatePage = () => {
  deactivateFilter();
  deactivateForm();
  resetMainMarkerPosition();
};
