// Placeholder to host a component

import React from 'react';

const Hours = () => {
    // Obtener el día actual de la semana (0 es domingo, 6 es sábado)
    const dayOfWeek = new Date().getDay();

    // Definir las horas de apertura para cada día
    const hours = [
        { day: 'Sunday', open: '9:00 AM', close: '8:00 PM' },
        { day: 'Monday', open: '10:00 AM', close: '4:00 PM' },
        { day: 'Tuesday', open: '10:00 AM', close: '4:00 PM' },
        { day: 'Wednesday', open: '10:00 AM', close: '4:00 PM' },
        { day: 'Thursday', open: '10:00 AM', close: '4:00 PM' },
        { day: 'Friday', open: '10:00 AM', close: '4:00 PM' },
        { day: 'Saturday', open: '9:00 AM', close: '8:00 PM' },
    ];

    // Obtener las horas de hoy
    const todayHours = hours[dayOfWeek];

    return (
        <div>
            <h2>Hours of Operation !!</h2>
            <p>Today is {todayHours.day}</p>
            <p>We are open from {todayHours.open} to {todayHours.close}</p>
        </div>
    );
};

export default Hours;