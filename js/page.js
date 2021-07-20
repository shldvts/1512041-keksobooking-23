import { deactivateFilter, activateFilter } from './filter.js';
import { deactivateForm, activateForm } from './form.js';

export const deactivatePage = () => {
  deactivateFilter();
  deactivateForm();
};

export const activatePage = () => {
  activateFilter();
  activateForm();
};
