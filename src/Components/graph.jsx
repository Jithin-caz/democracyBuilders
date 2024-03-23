import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'age group 18-25',
    age_18_25: 7700,
  }
];
const data2= [
    {
      name: 'village 1',
      village_1: 7100,
     
    }, {
        name: 'village 2',
        village_1: 6100,
       
      }, {
        name: 'village 3',
        village_1: 4100,
       
      }];
export default function GraphBar()
{
    return <div style={{ width:'100%',padding:"5rem" }}>
    <h2>General graph of voters in India</h2>
    <div style={{ width:'100%',padding:"5rem",display:'flex' }}>
    <BarChart
          width={200}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="age_18_25" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
        <BarChart
          width={600}
          height={300}
          data={data2}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="village_1" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="village_2" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="village_3" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
    </div>
       
    </div>
}