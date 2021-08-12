
export default (json) => {
  var message

  switch (json) {
    case 'Default password is not permited':
      message = 'Senha padrão não permitida';
      break;
    case 'This password do is not match':
      return message = 'Senha não confere';
      break;
    case 'This user does not have access to this application':
      message = 'Usuário não tem acesso a essa aplicação';
      break;
    case 'This user is blocked':
      message = 'Usuário esta bloqueado';
      break;
    case 'User or password error':
      message = 'Usuário ou senha esta errado';
      break;
    case 'Password require minimum 8 digits':
      message = 'Senha requer no minimo 8 dígitos';
      break;
    case 'Both is the same password':
      message = 'A senha é a mesma';
      break;
    case 'No data':
      message = 'Nenhum dado encontrado';
      break;
    default:
      message = json;
      break;

  }
  console.log(message)
  console.log(json)
  return message
}