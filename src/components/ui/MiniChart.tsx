import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'Jan', mrr: 4000, churn: 400 },
  { name: 'Feb', mrr: 4500, churn: 300 },
  { name: 'Mar', mrr: 5200, churn: 200 },
  { name: 'Apr', mrr: 6100, churn: 280 },
  { name: 'May', mrr: 7000, churn: 150 },
  { name: 'Jun', mrr: 8200, churn: 100 },
];

export const MiniChart = () => {
  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorMrr" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0055FF" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#0055FF" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 10, fill: '#9CA3AF' }}
            dy={10}
          />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ 
              borderRadius: '12px', 
              border: 'none', 
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              fontSize: '12px'
            }} 
          />
          <Area 
            type="monotone" 
            dataKey="mrr" 
            stroke="#0055FF" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorMrr)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
