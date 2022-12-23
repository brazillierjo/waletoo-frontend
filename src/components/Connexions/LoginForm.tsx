import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface ILoginData {
    email: string;
    password: string;
}

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<ILoginData>();

    const onSubmit: SubmitHandler<ILoginData> = (data) => console.log(data);

    return (
        <>
            <form className='mt-8 flex flex-col space-y-4' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className='text-md block font-semibold text-gray-800' htmlFor='email'>
                        Email
                    </label>
                    <input
                        placeholder='Email'
                        autoComplete='email'
                        type='email'
                        className='mt-2 block w-full rounded-md border px-4 py-3 text-xs text-gray-500 focus:outline-none focus:ring focus:ring-opacity-40'
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span>Ce champs est requis</span>}
                </div>

                <div>
                    <label className='text-md block font-semibold text-gray-800' htmlFor='password'>
                        Mot de passe
                    </label>
                    <input
                        type='password'
                        autoComplete='current-password'
                        placeholder='********'
                        className='mt-2 block w-full rounded-md border px-4 py-3 text-xs text-gray-500 focus:outline-none focus:ring focus:ring-opacity-40'
                        {...register("password", { required: true })}
                    />
                    {errors.password && <span>Ce champs est requis</span>}
                </div>

                <input
                    className='w-full transform rounded-md bg-black px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none'
                    type='submit'
                    value='Se connecter'
                />
            </form>
        </>
    );
}
