import './index.scss';
import '@babel/polyfill';
import HelloPage from './pages/HelloPage';

document.getElementById('app').append(new HelloPage().render("World"));
