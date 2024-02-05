import { useGoogleLogin } from '@react-oauth/google';
const GoogleLoginButton = () => {
    const onSignIn = useGoogleLogin({
      onSuccess: (codeResponse) => console.log(codeResponse),
      flow: 'auth-code',
    });
  
    return (
      <div className='items-center justify-center flex gap-3' style={{ minHeight: '90vh' }}>
        <button
          className="px-8 bg-transparent hover:bg-google text-google font-semibold hover:text-white py-2 px-4 border border-google hover:border-transparent hover:border-white rounded"
          onClick={onSignIn}
        >
          Google Login
        </button>
      </div>
    );
  };
  
  export default GoogleLoginButton;