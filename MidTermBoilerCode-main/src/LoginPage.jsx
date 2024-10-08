
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react'; 

const LoginPage = () => {

  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate('/landing'); // Navigate to the Login page
  };

  function LoginForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 

    const handleSubmit = (event) => {
      event.preventDefault(); 
      console.log('submitted:', username, password); 
    };
  }

    return (
      <div>
        <h1>Login Here</h1>
        <p>This is the Login Page.</p>
        <button onClick={goToLoginPage}>Take Qualifier Quiz</button>
        <form>
          <div>
            <label>username: </label>
            <input 
            type = "text" 
            value = {username}
            onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password: </label>
            <input 
            type = "password" 
            value ={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type = "submit">Login</button>
        </form>
      </div>
    );
  };
  
  export default LoginPage;
  