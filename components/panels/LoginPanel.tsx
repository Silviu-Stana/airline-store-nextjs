'use client';
import { PanelType } from '@/enums/PanelType';
import React from 'react';
import { useState } from 'react';

interface LoginPanelProps {
    goToPanel: (panel: PanelType) => void;
}

const LoginPanel: React.FC<LoginPanelProps> = ({ goToPanel }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === '1234') {
            goToPanel(PanelType.SearchFlight);
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="max-w-sm mx-auto mt-10 p-6 rounded-4xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border rounded-2xl antialiased focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
            </div>

            <button
                onClick={handleLogin}
                className="w-full py-2 px-4 bg-cyan-600  text-white rounded hover:bg-blue-700 transition"
            >
                Login
            </button>

            {error && <p className="tex-red-500 mt-4">{error}</p>}

            <p className="mt-6 text-center">
                Don&apos;t have an account?{' '}
                <button
                    className="text-blue-600 hover:underline"
                    onClick={() => goToPanel(PanelType.Register)}
                >
                    Register
                </button>
            </p>
        </div>
    );
};

export default LoginPanel;
