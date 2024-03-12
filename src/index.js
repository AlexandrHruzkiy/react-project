import {React}  from 'react';
import StateHooks from './Pages/StateHookPage/StateHook';
import ReactDOM from 'react-dom/client';
import Header from './Pages/Header/Header';
import Sidebar from './Pages/Sidebar/Sidebar';
import Welcome from './Pages/Welcome/Welcome';
import About from './Pages/About/About';
import Community from './Pages/Community/Community';
import Resources from './Pages/Resources/Resources';
import ErrorPage from './Pages/Error/Error';
import Users from './Pages/Users/Users';
import UserPage from './Pages/Users/UserPage';
import './global.css';

import{
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Outlet
} from 'react-router-dom';

const Root= ()=>{
    return(
        <div className='container'>
        <Header />
        <Sidebar />
        <Outlet />
        </div>
    )
}
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={ <Root/>}>
                <Route index element = {<Welcome/>}/>
                <Route path='statehooks' element = {<StateHooks/>}/>
                <Route path='community' element = {<Community/>}/>
                <Route path='resources' element = {<Resources/>}/>
                <Route path='about' element = {<About/>}/>
                <Route path='users' element={<Users/>}/>
                <Route path='users/:userId' loader={loader} element={<UserPage/>} errorElement={<ErrorPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Route>
        )
    )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);
function loader({ params }) {
    return fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => {

            return response.json();
        })
        .then(users => {
            const user = users.find(user => user.username === params.userId);
            return user;
        })
}

