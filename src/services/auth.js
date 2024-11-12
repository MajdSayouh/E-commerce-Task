export const signUp = (username, password) => {
    localStorage.setItem('user', JSON.stringify({ username, password }));
  };
  
  export const signIn = (username, password) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.username === username && user.password === password) {
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  };
  
  export const signOut = () => {
    localStorage.removeItem('isAuthenticated');
  };
  
  export const isAuthenticated = () => localStorage.getItem('isAuthenticated') === 'true';
  