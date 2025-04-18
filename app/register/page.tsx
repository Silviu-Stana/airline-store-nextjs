'use client';
import SpinnerMini from '@/components/SpinnerMini';
import { PanelType } from '@/enums/PanelType';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useState } from 'react';

const RegisterPanel: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleRegister = async () => {
        setError('');
        setIsLoading(true);

        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                username,
                password,
            }),
        });

        setIsLoading(false);

        if (!res.ok) {
            const { error } = await res.json();

            //Show first error (from zod or server)
            const firstError =
                error?.username?.[0] ||
                error?.email?.[0] ||
                error?.password?.[0] ||
                error?.general?.[0] ||
                'Something went wrong.';

            setError(firstError);
            return;
        }

        //Register was successful!
        signIn('credentials', {
            redirect: true,
            callbackUrl: '/',
            email,
            password,
        });
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-600">
                <img
                    src="/airplane2.svg"
                    alt="airplane"
                    className="inline h-9 w-9"
                />
                Register
            </h2>

            <div className="mb-2">
                <input
                    formNoValidate
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border border-cyan-500 rounded-2xl antialiased focus:outline-none focus:ring-2 shadow-cyan-100 focus:ring-cyan-500 placeholder:text-cyan-600"
                />
            </div>
            <div className="mb-2">
                <input
                    formNoValidate
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-cyan-500 rounded-2xl antialiased focus:outline-none focus:ring-2 shadow-cyan-100 focus:ring-cyan-500 placeholder:text-cyan-600"
                />
            </div>
            <div className="mb-2">
                <input
                    formNoValidate
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border border-cyan-500 rounded-2xl antialiased focus:outline-none focus:ring-2 shadow-cyan-100 focus:ring-cyan-500 placeholder:text-cyan-600"
                />
            </div>

            <button
                onClick={handleRegister}
                disabled={isLoading}
                className="w-full py-2 px-4 bg-cyan-500  text-white rounded hover:bg-cyan-500/70 active:bg-cyan-500/40 transition font-medium"
            >
                {isLoading ? <SpinnerMini /> : 'Register'}
            </button>

            {error && <p className="text-red-500 font-medium mt-4">{error}</p>}

            <p className="mt-6 text-center">
                Already have an account?{' '}
                <button
                    className="font-semibold hover:cursor-pointer text-cyan-600 hover:underline"
                    disabled={isLoading}
                    onClick={() => router.push('/login')}
                >
                    Login
                </button>
            </p>
        </div>
    );
};

export default RegisterPanel;
