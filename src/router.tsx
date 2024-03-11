import { createBrowserRouter, Navigate } from 'react-router-dom';
import RouterWrapper from './components/router-wrapper/router-wrapper';
import LoginPage from './pages/login-page/login-page.tsx';
import HomePage from './pages/home-page/home-page.tsx';
import AppointmentPage from './pages/appointment-page/appointment-page.tsx';
import TimetablePage from './pages/timetable-page/timetable-page.tsx';
import { AppointmentHistoryPage } from './pages/appointment-history/appointment-history.tsx';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
    const res = localStorage.getItem('doctorid');
    if (!res) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/',
        element: <RouterWrapper />,
        children: [
            {
                path: '',
                element: (
                    <ProtectedRoute>
                        <HomePage />
                    </ProtectedRoute>
                )
            },
            {
                path: 'appointment/:timecellid',
                element: (
                    <ProtectedRoute>
                        <AppointmentPage />
                    </ProtectedRoute>
                )
            },
            {
                path: 'appointment-history/',
                element: (
                    <ProtectedRoute>
                        <AppointmentHistoryPage />
                    </ProtectedRoute>
                )
            },
            {
                path: 'timetable/',
                element: (
                    <ProtectedRoute>
                        <TimetablePage />
                    </ProtectedRoute>
                )
            },
            {
                path: 'documentation',
                element: 'Sorry... Not implemented yet'
            }
        ]
    }
]);

export default router;
