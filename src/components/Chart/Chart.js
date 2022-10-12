import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const data = useLoaderData()
    const data1 = data.data;

    return (

        <div>
            <LineChart width={730} height={250} data={data1}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />

                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="total" stroke="#8884d8" />

            </LineChart>
        </div>

    );
};

export default Chart;