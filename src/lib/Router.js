import Vue from './vue.esm.browser.js'
import VueRouter from './vue-router.esm.browser.js';

import LoginForm from '../Components/LoginForm.js';
import TodoList from '../Components/TodoList.js';
import AddTodoItem from '../Components/AddTodoItem.js';
import EditTodoItem from '../Components/EditTodoItem.js';

Vue.use(VueRouter);

const routes = [
    {path: '', redirect: '/todos'},
    {path: '/todos', component: TodoList},
    {path: '/login', component: LoginForm},
    {path: '/todos/add', component: AddTodoItem},
    {path: '/todos/edit/:id', component: EditTodoItem}
];

export default new VueRouter({routes})