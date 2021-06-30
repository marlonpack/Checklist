const API_URL = 'http://192.168.0.99:71/GLOBAL/Controller/';

export default{
  VERSION:async()=>{
    const req= await fetch(`${API_URL}/CCPP/AppVersion.php?id=13`,{
      method:'GET',
    });
    const json = await req.json();
    const version= json.data[0].version;
    const appVersion = '0.1a';
    if(version !== appVersion){
      return 'Versão desatualizada, versão atual'+json.data[0].version +'versão da sua aplicação'+ appVersion;
    } 
    return null;
  },

  USER_PHOTO:async(session,id)=>{
    const req= await fetch(`${API_URL}CCPP/EmployeePhoto.php?AUTH=${session}&app_id=13&id=${id}`,{
      method:'GET',
    });
    const json = await req.json();
    return json;
  },

  TOKEN_POST:async(body)=>{
    const req= await fetch(`${API_URL}CCPP/Login.php?login&app_id=13`,{
      method:'POST',
      body: JSON.stringify(body),
    });
    const json = await req.json();
    return json;
  },

  PASSWORD_PATTERN:async(body)=>{
    const req= await fetch(`${API_URL}CCPP/Login.php?login&app_id=13`,{
      method:'PUT',
      body: JSON.stringify(body),
    });
    const json = await req.json();
    return json;
  },

  GET_CHECKLIST_HOME:async(id)=>{
    const req = await fetch(`${API_URL}CLPP/Checklist.php?userId=${id}`,{
      method:'GET',
    });
    const json = await req.json();
    return json;
  },

  GET_CHECKLIST_ALL:async(id)=>{
    const req = await fetch(`${API_URL}CLPP/Checklist.php?all&userId=${id}`,{
      method:'GET',
    });
    const json = await req.json();
    return json;
  },

  GET_QUESTIONS:async(id)=>{
    const req = await fetch(`${API_URL}CLPP/Question.php?id=${id}`,{
      method:'GET'
    });
    const json = await req.json();
    return json;
  }
  
}

