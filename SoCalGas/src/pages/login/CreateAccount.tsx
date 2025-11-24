import { Link, useNavigate } from 'react-router'
import {useForm} from 'react-hook-form';
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import {useUser} from '../../context/UserContext'



const CreateAccount = () => {
    const navigate = useNavigate();
        const user = useUser();
        const {register, handleSubmit, formState:{errors}} = useForm();
        const onSubmit = (data)=>{
            user.register(data.Email,data.Password);
            navigate("/");
        };
  return (
    <div className="flex flex-col justify-between h-[74vh] md:h-[88vh] bg-white">
        <div className='flex flex-col gap-2 mt-5 md:w-[30%] md:mx-auto'>
            <h1 className='font-bold text-[22px] text-[#1E263C] text-center'>Create New Account</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-4 px-3">
                    <Input style={{
                        div:'flex flex-col',
                        input:'text-[#0000004D] text-sm font-medium border border-[#475CA34D] px-3 py-2 rounded-md mt-2',
                        label:'text-[#6B7285] text-sm font-medium',
                    }}
                    name='Email'
                    htmlFor='email'
                    placeholder='Enter your Email'
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

                    <div className="flex gap-2 text-black text-xs font-semibold">
                        <input type="checkbox" name="remember"/>
                        <label htmlFor="remember">Remember Me</label>
                    </div>
                    <Button type='submit' className='bg-[#F27321] cursor-pointer font-extrabold text-sm py-2 w-full rounded-2xl' name='Sign Up'/>
                </div>
            </form>
        </div>
        <div className="text-center border-t border-[#00456B4D] py-4 md:w-[30%] md:mx-auto">
            <p className='text-sm text-[#333333]'>Already have an account ? <Link className='text-[#4671FF] font-bold' to='/login'>Login</Link></p>
        </div>
    </div>
  )
}   

export default CreateAccount