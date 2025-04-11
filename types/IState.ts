import { JSX } from 'react';

export interface IState {
    id: number;
    display: () => JSX.Element;
    read: () => void;
    isFinal: () => boolean;
    message: () => string;
    isCorrect: () => boolean;
    process: () => void;
    execute: () => void;
}
