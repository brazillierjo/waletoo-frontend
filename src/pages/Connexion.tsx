import { useState } from "react";
import LoginForm from "../components/Connexions/LoginForm";
import SignUpForm from "../components/Connexions/SignUpForm";

export default function Connexion() {
    const [hasAccount, setHasAccount] = useState(true);

    return (
        <>
            <div className='relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-200'>
                <div className='m-auto w-11/12 rounded-md bg-white p-6 shadow-md lg:w-full lg:max-w-xl'>
                    <h1 className='text-center text-3xl font-semibold'>{hasAccount ? "Se connecter" : "S'inscrire"}</h1>

                    {hasAccount ? <LoginForm /> : <SignUpForm />}
                    <p className='mt-8 text-center text-xs font-light text-gray-700'>
                        {hasAccount ? "Pas encore de compte ? 🤗 " : "Vous avez déjà un compte ? 😎 "}
                        <button onClick={() => setHasAccount(!hasAccount)} className='font-medium hover:underline'>
                            {hasAccount ? "Créez-en un" : "Connectez-vous"}
                        </button>
                    </p>
                </div>
            </div>
        </>
    );
}
