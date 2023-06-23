import {STORAGE_KEY_USER_TOKEN} from '../domain/types/StorageKeyTypes';

export const IsAuth = () => {
  if (localStorage.getItem(STORAGE_KEY_USER_TOKEN)) {
    // console.log('Si')
    return true;
  } else {
    // console.log('No')
    return false;
  }
};

export const LogOut = () => {
  localStorage.clear();
};
