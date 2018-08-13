import 'whatwg-fetch';

export function getUsers() {
  return get('users');
}

const get = (url) => {
  return fetch(url).then(onSuccess, onError);
}

const onSuccess = (response) => {
  // console.log(response.json());
  return response.json();
}

const onError = (error) => {
  console.log(error); // eslint-disable-line
}
