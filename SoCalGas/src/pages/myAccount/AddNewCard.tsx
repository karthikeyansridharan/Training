import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Logo from '../../components/common/Logo';
import useUserStore from '../../store/userStore';
import ModalOpenContext from './ModalOpen';

const AddNewCard = () => {
    const { userData, addCard } = useUserStore();
    const { setIsModalOpen } = useContext(ModalOpenContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        addCard(data);
        console.log(data);

        setIsModalOpen(false);
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);


    return (
        <div className="bg-white min-h-screen absolute inset-0 z-50">
            <div className="bg-[#00256C] p-4">
                <div className="flex gap-5 items-center ">
                    <Logo src="/back-arrow.png" className="h-10 w-10 cursor-pointer" onClick={() => setIsModalOpen(false)} />
                    <h1 className="font-semibold text-[20px]">Add New Card</h1>
                </div>
                <p className="font-medium text-[18px] mt-6">
                    Total &nbsp; <span className="font-bold">${userData.currMonth.amount}</span>
                </p>
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:w-1/3 md:mx-auto md:my-auto">
                <div className="px-4 py-6 flex flex-col gap-5">
                    <div className="flex flex-col">
                        <label
                            className={` ${errors.number ? 'text-red-500' : 'text-[#6B7285]'} font-medium text-sm`}
                            htmlFor="number"
                        >
                            {errors.number ? String(errors.number.message) : "Card Number"}
                        </label>
                        <input
                            {...register("number", {
                                required: "Required",
                                validate: (value) =>
                                    value.length === 16 || "Enter a valid card number",
                            })}
                            className={`border px-4 py-2 rounded-lg text-black outline-none ${errors.number ? 'border-red-500' : ''}`}
                            type="text"
                            placeholder="Enter your card number"
                            name="number"
                        />
                    </div>
                    <div className="flex gap-5">
                        <div className="flex flex-col w-3/4">
                            <label
                                className={` ${errors.date ? 'text-red-500' : 'text-[#6B7285]'} font-medium text-sm`}
                                htmlFor="date"
                            >
                                {errors.date ? String(errors.date.message) : "Valid Through"}
                            </label>
                            <input
                                {...register("date", {
                                    required: "Required",
                                    validate: (value) =>
                                        value.length === 4 || "Enter a valid date",
                                })}
                                className={`border px-4 py-2 rounded-lg text-black outline-none ${errors.date ? 'border-red-500' : ''}`}
                                type="text"
                                placeholder="MMYY"
                                name="date"
                            />
                        </div>
                        <div className="flex flex-col w-1/4">
                            <label
                                className={` ${errors.cvv ? 'text-red-500' : 'text-[#6B7285]'} font-medium text-sm`}
                                htmlFor="cvv"
                            >
                                {errors.cvv ? String(errors.cvv.message) : "CVV"}
                            </label>
                            <input
                                {...register("cvv", {
                                    required: "Required",
                                    validate: (value) =>
                                        value.length === 3 || "Enter a valid cvv",
                                })}
                                className={`border px-4 py-2 rounded-lg text-black outline-none ${errors.cvv ? 'border-red-500' : ''}`}
                                type="text"
                                placeholder="xxx"
                                name="cvv"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label
                            className={` ${errors.nameOnCard ? 'text-red-500' : 'text-[#6B7285]'} font-medium text-sm`}
                            htmlFor="nameOnCard"
                        >
                            {errors.nameOnCard ? String(errors.nameOnCard.message) : "Name on Card"}
                        </label>
                        <input
                            {...register("nameOnCard", {
                                required: "Required",
                            })}
                            className={`border px-4 py-2 rounded-lg text-black outline-none ${errors.nameOnCard ? 'border-red-500' : ''}`}
                            type="text"
                            placeholder="Enter your name"
                            name="nameOnCard"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            className={` ${errors.nickName ? 'text-red-500' : 'text-[#6B7285]'} font-medium text-sm`}
                            htmlFor="nickName"
                        >
                            {errors.nickName ? String(errors.nickName.message) : "Card Nickname (optional)"}
                        </label>
                        <input
                            {...register("nickName", {
                                required: "Required",
                            })}
                            className={`border px-4 py-2 rounded-lg text-black outline-none ${errors.nickname ? 'border-red-500' : ''}`}
                            type="text"
                            placeholder="Enter your name"
                            name="nickName"
                        />
                    </div>
                </div>
                <div className="px-4">
                    <button type="submit" className="bg-[#F27321] w-full px-4 py-2 rounded-3xl font-bold text-sm cursor-pointer">Proceed</button>
                </div>
            </form>
        </div>
    );
};

export default AddNewCard;
