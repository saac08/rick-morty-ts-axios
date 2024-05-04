import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Theme } from '@radix-ui/themes';
import { CharacterInterceptor } from './interceptors/character.interceptor.tsx';
import Navbar from './components/generics/Navbar.tsx';

CharacterInterceptor();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Theme appearance='light'>
		<Navbar />
		<App />
	</Theme>
);
