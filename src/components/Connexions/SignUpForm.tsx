export default function SignUpForm() {
    return (
        <>
            <form className='mt-6'>
                <div className='mb-2'>
                    <label htmlFor='email' className='block text-sm font-semibold text-gray-800'>
                        Email ✉️
                    </label>
                    <input
                        type='email'
                        className='mt-2 block w-full rounded-md border px-4 py-2 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor='password' className='block text-sm font-semibold text-gray-800'>
                        Mot de passe 🔑
                    </label>
                    <input
                        type='password'
                        className='mt-2 block w-full rounded-md border px-4 py-2 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor='password' className='block text-sm font-semibold text-gray-800'>
                        Confirmer mot de passe ✔
                    </label>
                    <input
                        type='password'
                        className='mt-2 block w-full rounded-md border px-4 py-2 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                </div>
                <div className='mt-6'>
                    <button className='w-full transform rounded-md bg-black px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none'>
                        Créer mon wallet
                    </button>
                </div>
            </form>
        </>
    );
}
