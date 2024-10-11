import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { CreateUser, Login } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../../store/auth-context';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating]  = useState(false)

  const authCtx = useContext(AuthContext)
  
  async  function LoginHandler({email,password}:any) {
    setIsAuthenticating(true)
    try {
      
     const token = await Login(email,password)
      authCtx.authenicate(token)

    } catch (error) {
      Alert.alert('Authenication failed',
        'Could not log you in. Please check your credentials or try again later!')
        setIsAuthenticating(false)
    }
 
    }
  
    if(isAuthenticating){
      return <LoadingOverlay message='Logging you In ....'/>
    }
  return <AuthContent isLogin onAuthenticate={LoginHandler} />;
}

export default LoginScreen;
