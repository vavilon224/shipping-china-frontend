export const saveToLocalStorage = (key, state, stringify = true) => {
  try {
    const serializedState = stringify ? JSON.stringify(state) : state;
    localStorage.setItem(key, serializedState);
  } catch (e) {
    //
  }
};

export const loadFromLocalStorage = (key, parse = true) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return parse ? JSON.parse(serializedState) : serializedState;
  } catch (e) {
    return undefined;
  }
};

export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    //
  }
};


export const saveToSessionStorage = (key, state, stringify = true) => {
  try {
    const serializedState = stringify ? JSON.stringify(state) : state;
    sessionStorage.setItem(key, serializedState);
  } catch (e) {
    //
  }
};

export const loadFromSessionStorage = (key, parse = true) => {
  try {
    const serializedState = sessionStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return parse ? JSON.parse(serializedState) : serializedState;
  } catch (e) {
    return undefined;
  }
};

export const removeFromSessionStorage = (key) => {
  try {
    sessionStorage.removeItem(key);
  } catch (e) {
    //
  }
};
