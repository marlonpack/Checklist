export const API_URL = 'http://192.168.0.99:71/GLOBAL/Controller/';

export function USER_DATE(session, id) {
  return {
    url: API_URL + 'CCPP/Employee.php?AUTH=' + session + '&app_id=5&id=' + id,
    options: {
      method: 'GET',
    },
  };
}

export function TOKEN_POST(body) {
  return {
    url: API_URL + 'CCPP/Login.php?login&app_id=5',
    options: {
      method: 'POST',
      body: JSON.stringify(body),
    },
  };
}