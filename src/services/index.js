export const getAuth = () => {
  let data = {};
  try {
    data = JSON.parse(localStorage.getItem('auth'));
  } catch {}
  return data;
}

export const setAuth = (obj) => {
  localStorage.setItem('auth', JSON.stringify(obj));
}

export const deleteAuth = () => {
  localStorage.removeItem('auth');
}

export const generateRandomStr = (length) => {
  const result = [];
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++ ) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
 return result.join('').toUpperCase();
}
