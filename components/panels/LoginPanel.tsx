'use client';
import { PanelType } from '@/enums/PanelType';
import React from 'react';
import { useState } from 'react';

interface LoginPanelProps {
    goToPanel: (panel: PanelType) => void;
}

const LoginPanel: React.FC<LoginPanelProps> = ({ goToPanel }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (email === 'admin' && password === '1234') {
            goToPanel(PanelType.SearchFlight);
        } else if (email === '' || password === '') {
            setError('You must fill in all fields.');
        } else {
            setError('Invalid credentials');
        }
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
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border border-cyan-500 rounded-2xl antialiased focus:outline-none focus:ring-2 shadow-cyan-100 focus:ring-cyan-500 placeholder:text-cyan-600"
                />
            </div>

            <button
                onClick={handleLogin}
                className="w-full py-2 px-4 bg-cyan-500  text-white rounded hover:bg-cyan-500/70 active:bg-cyan-500/40 transition font-medium"
            >
                Login
            </button>

            {error && <p className="text-red-500 font-medium mt-4">{error}</p>}

            <p className="mt-6 text-center">
                Don&apos;t have an account?{' '}
                <button
                    className="font-semibold hover:cursor-pointer text-cyan-600 hover:underline"
                    onClick={() => goToPanel(PanelType.Register)}
                >
                    Register
                </button>
            </p>
        </div>
    );
};

export default LoginPanel;
