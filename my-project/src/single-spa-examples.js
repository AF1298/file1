import {declareChildApplication, start} from 'single-spa';
import {loadEmberApp} from 'single-spa-ember';
import 'babel-polyfill';

declareChildApplication('navbar', () => import('./navbar/navbar.app.js'), () => true);
declareChildApplication('home', () => import('./home/home.app.js'), () => location.pathname === "" || location.pathname === "/");
declareChildApplication('react', () => import('./react/react.app.js'), pathPrefix('/react'));
declareChildApplication('vue', () => import('src/vue/vue.app.js'), pathPrefix('/vue'));
declareChildApplication('ant', () => import('./ant/ant.app.js'), pathPrefix('/ant'));
// declareChildApplication('ember', () => loadEmberApp("ember-app", '/build/ember-app/assets/ember-app.js', '/build/ember-app/assets/vendor.js'), pathPrefix('/ember'));

start();

function pathPrefix(prefix) {
    return function(location) {
        let fx = location.pathname.indexOf(`${prefix}`) === 0; 
        return fx;
    }
}
