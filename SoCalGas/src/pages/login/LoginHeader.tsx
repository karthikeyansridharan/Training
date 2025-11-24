import Logo from '../../components/common/Logo'


const LoginHeader = () => {
  return (
    <div className='bg-linear-to-b from-[#00256C] to-[#0041A3] pt-20 pb-10 md:py-2'>
        <Logo src='/socal-logo.png' alt='socal-logo' className='mx-auto h-14'/>
    </div>
  )
}

export default LoginHeader