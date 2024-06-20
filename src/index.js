import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'
import App from './App';
import {QueryClient, QueryClientProvider} from 'react-query'
import {setupAxios} from "./components/auth/AuthHelpers";
import {ReactQueryDevtools} from "react-query/devtools";
import {AuthProvider} from "./components/auth/AuthProvider";

setupAxios(axios)
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <App/>
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
);

