interface IUser {
  fullName: string;
  loggedIn: boolean;
}

export const fetchCurrentUser = ({ fullName, loggedIn }: IUser) => {
  const username = document.querySelector('#username');

  if (loggedIn) {
    username && (username.innerHTML = `${fullName} - Logged In`);
    return;
  }

  username && (username.innerHTML = `${fullName} - Failed In`);
};

const handleClick = (event: any) => {
  fetchCurrentUser({
    fullName: 'Black raven',
    loggedIn: false,
  });
};

export const displayUser = () => {
  const button = document.querySelector('#button');
  button?.addEventListener('click', handleClick);
};
