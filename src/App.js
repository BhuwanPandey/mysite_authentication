import './App.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

function App() {
  const initialdata={
    isloggedIn:false,
    userId:'',
    name:'',
    email:'',
    picture:''
  }
let content;
let googley;

  const responseGoogle=(response)=>{
      console.log(response)
  }

  const responseFacebook=(response)=>{
      console.log(response)
  }
 

  if(initialdata.isloggedIn){
    content=null;
    googley=null;
  }else{
    content=<FacebookLogin
    // appId="422844516295297"
    
    appId="425799806145440"
    // autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook} />

    
    googley= <GoogleLogin
    // clientId="1003066084452-q8npbo35uh6tme0ct2o33fl0iaj2ifj1.apps.googleusercontent.com"
    clientId="31994795179-at6ku26c95ut4nf9sch0c0gkukmkt87b.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}

  />
  }

  return (
    <div className="App">
      
      {content}
       
      {googley}
    </div>
  );
}

export default App;

