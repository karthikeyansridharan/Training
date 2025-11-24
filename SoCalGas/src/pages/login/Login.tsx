import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Logo from '../../components/common/Logo';
import { useUser } from '../../context/UserContext';
import { FORM_INPUT_STYLES, BUTTON_STYLES } from '../../constants/styleConstants';

interface LoginFormData {
  Email: string;
  Password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const userContext = useUser();

  // Safe destructuring with fallback
  const current = userContext?.current;
  const login = userContext?.login;

  // Redirect if already logged in
  useEffect(() => {
    if (current) {
      navigate('/');
    }
  }, [current, navigate]);

  // Login mutation with react-query
  const loginMutation = useMutation({
    mutationFn: async (data: LoginFormData) => {
      if (!login) {
        throw new Error('Login function not available');
      }
      return await login(data.Email, data.Password);
    },
    onSuccess: () => {
      toast.success('Login successful! Redirecting...');
      navigate('/');
    },
    onError: (error: any) => {
      toast.error(error?.message || 'Login failed. Please check your credentials.');
    },
  });

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data);
  };

  const { isPending, isError, error } = loginMutation;

  return (
    <div className="bg-white">
      <div className="flex flex-col gap-5 px-3 py-5 md:w-[30%] min-h-screen md:mx-auto justify-between">
        <h1 className="font-bold text-[22px] text-[#1E263C] text-center">
          Login to My Account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="flex flex-col gap-2">
            <Input
              style={{
                div: FORM_INPUT_STYLES.container,
                input: FORM_INPUT_STYLES.input,
                label: FORM_INPUT_STYLES.label,
              }}
              name="Email"
              htmlFor="email"
              placeholder="Enter your email"
              type="text"
              register={register('Email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^@]+@[^@]+\.[^@]+$/,
                  message: 'Invalid email format',
                },
              })}
              errors={errors}
            />

            <Input
              style={{
                div: FORM_INPUT_STYLES.container,
                input: FORM_INPUT_STYLES.input,
                label: FORM_INPUT_STYLES.label,
              }}
              name="Password"
              htmlFor="password"
              placeholder="Enter your password"
              type="password"
              register={register('Password', {
                required: 'Password is required',
              })}
              errors={errors}
            />

            <Button
              className={BUTTON_STYLES.text}
              name="Forgot Password?"
              type="button"
              onClick={() => { }}
            />

            <div className="flex gap-2 text-black text-xs font-semibold">
              <input type="checkbox" name="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>

            {isError && (
              <div className="text-red-500 text-sm text-center p-2 bg-red-50 rounded">
                {(error as any)?.message || 'Login failed. Please try again.'}
              </div>
            )}

            <Button
              type="submit"
              className={`${BUTTON_STYLES.primary} ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
              name={
                isPending ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Logging in...
                  </div>
                ) : (
                  'Login'
                )
              }
              onClick={() => { }}
            />
          </div>
        </form>

        <div className="flex items-center gap-4">
          <div className="w-full h-px bg-[#00456B4D]"></div>
          <p className="text-[#00456B] text-sm">Or</p>
          <div className="w-full h-px bg-[#00456B4D]"></div>
        </div>

        <div className="flex flex-col text-black gap-3">
          <Button
            className={BUTTON_STYLES.secondary}
            name="Login with Phone Number"
            type="button"
            onClick={() => { }}
          />

          <Button
            className={BUTTON_STYLES.outlined}
            name={
              <>
                <Logo src="/apple.png" className="w-6 h-6" onClick={() => { }} /> Login with Apple
              </>
            }
            type="button"
            onClick={() => { }}
          />

          <Button
            className={BUTTON_STYLES.outlined}
            name={
              <>
                <Logo src="/google.png" className="w-6 h-6" onClick={() => { }} /> Login with Google
              </>
            }
            type="button"
            onClick={() => { }}
          />
        </div>

        <div className="text-center border-t border-[#00456B4D] mt-4 pt-4">
          <p className="text-sm text-[#333333]">
            Don't have an account?{' '}
            <Link className="text-[#4671FF] font-bold" to="/login/create-account">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
