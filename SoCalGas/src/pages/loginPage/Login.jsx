import React, { useContext, useEffect } from 'react'
import Button from '../../dumb-components/Button'
import Input from '../../dumb-components/Input'
import { Link, useNavigate } from 'react-router'
import Logo from '../../dumb-components/Logo'
import {useForm} from 'react-hook-form';
import {useUser} from '../../lib/context/user'


const Login = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, formState:{errors}} = useForm();
    const user = useUser();

    useEffect(()=>{
        if (user.current) {
            navigate('/');
        }
    },[user]);

    const onSubmit = async (data) => { 
        try {
            await user.login(data.Email, data.Password);
        } catch (err) {
            alert(err.message);
        }
    };

  return (
    <div className='bg-white '>
        <div className="flex flex-col gap-5 px-3 py-5 md:w-[30%] min-h-screen md:mx-auto justify-between">
            <h1 className='font-bold text-[22px] text-[#1E263C] text-center '>Login to My Account</h1>
            <form action=""  onSubmit={handleSubmit(onSubmit)} className=''>
                <div className="flex flex-col gap-2 ">
                        <Input style={{
                                div:'flex flex-col',
                                input:'text-[#0000004D] text-sm font-medium border border-[#475CA34D] px-3 py-2 rounded-md mt-2',
                                label:'text-[#6B7285] text-sm font-medium',
                            }}
                            name='Email'
                            htmlFor='email'
                            placeholder='Enter your email'
                            type='text'
                            register={register("Email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^@]+@[^@]+\.[^@]+$/,
                                message: "Invalid email format"
                            }
                        })}
                            errors={errors}
                            />
                        <Input style={{
                            div:'flex flex-col',
                            input:'text-[#0000004D] text-sm font-medium border border-[#475CA34D] px-3 py-2 rounded-md mt-2',
                            label:'text-[#6B7285] text-sm font-medium',
                        }}
                        name='Password'
                        htmlFor='password'
                        placeholder='Enter your password'
                        type='text'
                        register={register("Password",{
                            required : "Password is required",
                        })}
                            errors={errors}
                        />
                        <Button className='text-[#00335C] ml-auto text-xs font-medium' name='Forgot Password?'/>
                        <div className="flex gap-2 text-black text-xs font-semibold">
                            <input type="checkbox" name="remember"/>
                            <label htmlFor="remember">Remember Me</label>
                        </div>
                        <Button type='submit' className='bg-[#F27321] cursor-pointer font-extrabold text-sm py-2 w-full rounded-2xl' name='Login'/>
                </div>
            </form>
            <div className="flex items-center gap-4">
                <div className="w-full h-px bg-[#00456B4D]"></div>
                <p className='text-[#00456B] text-sm'>Or</p>
                <div className="w-full h-px bg-[#00456B4D]"></div>
            </div>
            <div className="flex flex-col text-black gap-3">  
                <Button className='border border-[#00256C80] px-4 py-2 rounded-3xl text-sm font-semibold cursor-pointer' name='Login with Phone Number'/>
                <Button className='border border-black px-4 py-2 rounded-3xl text-sm font-semibold flex justify-center items-center gap-2 cursor-pointer' name={<>
        <Logo src="/apple.png " className='w-6 h-6' /> Login with Apple
        </>}/>
                <Button className='border border-socal-light-blue px-4 py-2 rounded-3xl text-sm font-semibold flex justify-center items-center gap-2 cursor-pointer' name={<>
        <Logo src="/google.png " className='w-6 h-6' /> Login with Google
        </>}/>
            </div>
            <div className="text-center border-t border-[#00456B4D] mt-4 pt-4 ">
                <p className='text-sm text-[#333333]'>Don't have an account ? <Link className='text-[#4671FF] font-bold' to='/login/create-account'>Register Now</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login