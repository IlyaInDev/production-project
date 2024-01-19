import { Route, Routes, Link } from 'react-router-dom';
import './styles/index.scss';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPageAsync';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

export const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>TOGGLE</button>
			<Link to='/'>Главная</Link>
			<Link to='/about'>О сайте</Link>
			<Suspense fallback='Loading...'>
				<Routes>
					<Route path='/about' element={<AboutPageAsync />} />
					<Route path='/' element={<MainPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	)
}
