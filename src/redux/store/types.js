// ------------ designData ------------ \\
export const SET_NEW_JSON = 'designData/setNewSideJson';

// ------------ SIDE IMAGE ------------ \\
export const SET_IMAGE_BY_SIDE = 'designer-images/setImageStateBySide';
export const UPDATE_HISTORY = 'history-slice/updateHistory';

// ------------ HISTORY CANVAS ------------ \\
export const INIT_HISTORY = '"history-slice/initHistory"';

export const CANVAS_OBJECT = 'canvas-object/setNewObjectParams';

export const REDUX_LONG_BLOB_HANDLER = (arg) => {
  return [SET_NEW_JSON, SET_IMAGE_BY_SIDE, UPDATE_HISTORY, INIT_HISTORY, CANVAS_OBJECT].includes(arg);
};
