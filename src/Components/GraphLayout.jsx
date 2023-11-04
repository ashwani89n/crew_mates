import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GraphLayout = ({ breweryTypeCounts }) => {
    return (
        <ResponsiveContainer >
          <BarChart width="100%" 
          height={300}
            data={breweryTypeCounts}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="0" stroke="black" /> 
            <YAxis stroke="black"/>
            <Tooltip />
            <Bar dataKey="1" fill="black" />
          </BarChart>
        </ResponsiveContainer>
      );
};

export default GraphLayout;