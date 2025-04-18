'use client';
import React from 'react';
import { PanelType } from '@/enums/PanelType';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import SpinnerMini from '@/components/SpinnerMini';

const LoginPanel: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        handleLogin();
    };

    const handleLogin = async () => {
        setError('');
        setIsLoading(true);

        if (email === '' || password === '') {
            setError('You must fill in all fields.');
        }

        const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });

        if (result?.error) {
            setError('Invalid credentials.');
        } else {
            router.push('/');
        }

        setIsLoading(false);
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-600">
                <img
                    src="/airplane2.svg"
                    alt="airplane"
                    className="inline h-9 w-9"
                />
                Login
            </h2>

            <form onSubmit={handleSubmit}>
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
                    onClick={handleLogin}
                    className="w-full py-2 px-4 bg-cyan-500  text-white rounded hover:bg-cyan-500/70 active:bg-cyan-500/40 transition font-medium flex justify-center"
                >
                    {isLoading ? <SpinnerMini /> : 'Login'}
                </button>
            </form>

            {error && <p className="text-red-500 font-medium mt-4">{error}</p>}

            <p className="mt-6 text-center">
                Don&apos;t have an account?{' '}
                <button
                    className="font-semibold hover:cursor-pointer text-cyan-600 hover:underline"
                    onClick={() => router.push('/register')}
                >
                    Register
                </button>
            </p>
        </div>
    );
};

export default LoginPanel;
