const USER_KEY = 'kodixUser';         
const AUTH_KEY = 'kodixIsAuth';       

export function saveUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getUser() {
  const raw = localStorage.getItem(USER_KEY);
  return raw ? JSON.parse(raw) : null;
}


export function login(email, password) {
  const user = getUser();
  if (!user) return false;

  const ok = user.email === email && user.password === password;
  if (ok) {
    localStorage.setItem(AUTH_KEY, 'true');
  }
  return ok;
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
}

export function isAuthenticated() {
  return localStorage.getItem(AUTH_KEY) === 'true';
}