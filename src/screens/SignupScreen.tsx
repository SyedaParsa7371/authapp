import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';

import LoadingOverlay from '../components/ui/LoadingOverlay';
import { CreateUser } from '../util/auth';
import { Alert } from 'react-native';
import { AuthContext } from '../../store/auth-context';

function SignupScreen() {

  const [isAuthenticating, setIsAuthenticating]  = useState(false)

  const authCtx= useContext(AuthContext)

  async  function signupHandler({email,password}:any) {

  setIsAuthenticating(true)
  try {
    
    const token =await CreateUser(email,password);
    authCtx.authenicate(token)
  } catch (error) {
    Alert.alert('Authenication failed',
        'Could not create User. Please check your credentials or try again later!')
        setIsAuthenticating(false)
  }
  }

  if(isAuthenticating){
    return <LoadingOverlay message='Creating User....'/>
  }
  return <AuthContent isLogin={undefined} onAuthenticate={signupHandler} />;
}

export default SignupScreen;
