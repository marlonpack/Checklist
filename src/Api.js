const API_URL = 'http://192.168.0.99:71/GLOBAL/Controller/';
// const API_URL = 'http://187.35.128.157:71/GLOBAL/Controller/';

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

  EMPLOYEE_USER:async(session,id)=>{
    const req= await fetch(`${API_URL}CCPP/Employee.php?AUTH=${session}&app_id=13&id=${id}`,{
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


  GET_CHECKLIST_HOME:async(id, session)=>{
    const req = await fetch(`${API_URL}CLPP/Checklist.php?app_id=13&AUTH=${session}&userId=${id}`,{
      method:'GET',
    });
    const json = await req.json();
    // console.log(json)
    return json;
  },

  GET_CHECKLIST_ALL:async(id, session)=>{
    const req = await fetch(`${API_URL}CLPP/Checklist.php?all&app_id=13&AUTH=${session}&userId=${id}`,{
      method:'GET',
    });
    const json = await req.json();
    return json;
  },

  GET_QUESTIONS:async(id, session)=>{
    const req = await fetch(`${API_URL}CLPP/Question.php?app_id=13&AUTH=${session}&id=${id}`,{
      method:'GET'
    });
    const json = await req.json();
    return json;
  },

  GET_OPTION:async(id, session)=>{
    const req = await fetch(`${API_URL}CLPP/Option.php?app_id=13&AUTH=${session}&id=${id}`)
    const json = await req.json();
    return json;
  }, 

  POST_SUPPORT:async(body,session)=>{
    const req = await fetch(`${API_URL}CLPP/Support.php?app_id=13&AUTH=${session}`,{
      method:'POST',
      body: JSON.stringify(body)
    })
    const json = await req.json();

    return json;
  },

  GET_MESSAGE_USER:async(session, page, send, user)=>{
    const req = await fetch(`${API_URL}CLPP/Message.php?app_id=13&AUTH=${session}&pages=${page}&id_send=${send}&id_user=${user}`)
    const json = await req.json();
    return json;
  },

  GET_MESSAGE_GROUP:async(session, page, send, group)=>{
    const req = await fetch(`${API_URL}CLPP/Message.php?app_id=13&AUTH=${session}&pages=${page}&id_send=${send}&id_group=${group}`)
    const json = await req.json();
    return json;
  }, 
  
  GET_NOTIFY:async(session, id)=>{
    const req = await fetch(`${API_URL}CLPP/Message.php?app_id=13&AUTH=${session}&id=${id}`);
    const json = await req.json();
    return json;
  },

  POST_USER:async(body,session)=>{
    const req= await fetch(`${API_URL}CLPP/Message.php?app_id=13&AUTH=${session}`,{
      method:'POST',
      body: JSON.stringify(body)
    });
    const json = await req.json();
    return json;
  }

}

