import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, TrendingDown, AlertCircle, CheckCircle2, Loader2
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from 'recharts';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { useToast } from '../components/ui/Toast';

const data = [
  { name: 'Jan', mrr: 4000, churn: 240 },
  { name: 'Feb', mrr: 4500, churn: 139 },
  { name: 'Mar', mrr: 5100, churn: 980 },
  { name: 'Apr', mrr: 5800, churn: 390 },
  { name: 'May', mrr: 6500, churn: 480 },
  { name: 'Jun', mrr: 7200, churn: 380 },
  { name: 'Jul', mrr: 8100, churn: 430 },
];

const riskData = [
  { company: 'Acme Corp', risk: 'High', mrr: '$1,200', status: 'Action Required' },
  { company: 'Globex', risk: 'Medium', mrr: '$850', status: 'Monitoring' },
  { company: 'Soylent', risk: 'Low', mrr: '$2,400', status: 'Healthy' },
  { company: 'Initech', risk: 'High', mrr: '$3,100', status: 'Action Required' },
];

export const Dashboard = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { addToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      addToast('Dashboard report exported successfully.', 'success');
    }, 1000);
  };

  return (
    <DashboardLayout>
      <div className="flex-1 overflow-auto p-4 md:p-8 bg-paper">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-2xl font-display font-semibold mb-1">Dashboard Overview</h1>
            <p className="text-ink-muted text-sm">Welcome back. Here's what's happening with your revenue today.</p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleExport}
              disabled={isExporting || isLoading}
            >
              {isExporting ? 'Exporting...' : 'Export Report'}
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-brand animate-spin mb-4" />
            <p className="text-ink-muted">Loading dashboard data...</p>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-4">Total MRR</div>
                <div className="flex items-end gap-4">
                  <div className="text-3xl font-display font-semibold">$124,500</div>
                  <div className="flex items-center text-success text-sm font-medium mb-1">
                    <TrendingUp className="w-4 h-4 mr-1" /> +12.5%
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-4">Active Customers</div>
                <div className="flex items-end gap-4">
                  <div className="text-3xl font-display font-semibold">1,429</div>
                  <div className="flex items-center text-success text-sm font-medium mb-1">
                    <TrendingUp className="w-4 h-4 mr-1" /> +4.2%
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-4">Churn Risk</div>
                <div className="flex items-end gap-4">
                  <div className="text-3xl font-display font-semibold">2.4%</div>
                  <div className="flex items-center text-danger text-sm font-medium mb-1">
                    <TrendingDown className="w-4 h-4 mr-1" /> -0.8%
                  </div>
                </div>
              </Card>
            </div>

            {/* Charts Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card className="lg:col-span-2 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-base font-semibold">Revenue Growth</h2>
                  <select className="bg-paper border border-line text-sm px-3 py-1.5 rounded-md outline-none cursor-pointer focus:border-brand">
                    <option>Last 6 Months</option>
                    <option>Last Year</option>
                  </select>
                </div>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorMrr" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E4E4E7" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#71717A' }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#71717A' }} tickFormatter={(value) => `$${value/1000}k`} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#FFFFFF', color: '#09090B', border: '1px solid #E4E4E7', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        itemStyle={{ color: '#4F46E5', fontWeight: 500 }}
                      />
                      <Area type="monotone" dataKey="mrr" stroke="#4F46E5" strokeWidth={2} fillOpacity={1} fill="url(#colorMrr)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>
              
              <Card className="p-6 flex flex-col">
                <h2 className="text-base font-semibold mb-6">Churn by Segment</h2>
                <div className="flex-1 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data.slice(-4)} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E4E4E7" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#71717A' }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#71717A' }} />
                      <Tooltip cursor={{fill: '#F4F4F5'}} contentStyle={{ backgroundColor: '#FFFFFF', color: '#09090B', border: '1px solid #E4E4E7', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                      <Bar dataKey="churn" fill="#09090B" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            {/* Data Table */}
            <Card>
              <div className="p-5 border-b border-line flex justify-between items-center bg-white">
                <h2 className="text-base font-semibold">At-Risk Accounts</h2>
                <Link to="/customers" className="text-sm font-medium text-brand hover:text-brand-hover cursor-pointer">View All</Link>
              </div>
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-line bg-paper/50">
                      <th className="p-4 text-xs font-semibold uppercase tracking-wider text-ink-muted">Company</th>
                      <th className="p-4 text-xs font-semibold uppercase tracking-wider text-ink-muted">MRR</th>
                      <th className="p-4 text-xs font-semibold uppercase tracking-wider text-ink-muted">Risk Level</th>
                      <th className="p-4 text-xs font-semibold uppercase tracking-wider text-ink-muted">Status</th>
                      <th className="p-4 text-xs font-semibold uppercase tracking-wider text-ink-muted">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {riskData.map((row, i) => (
                      <tr key={i} className="border-b border-line last:border-0 hover:bg-paper transition-colors group cursor-pointer">
                        <td className="p-4 font-medium">{row.company}</td>
                        <td className="p-4 font-mono text-sm">{row.mrr}</td>
                        <td className="p-4">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                            row.risk === 'High' ? 'bg-danger/10 text-danger' : 
                            row.risk === 'Medium' ? 'bg-warning/10 text-warning' : 
                            'bg-success/10 text-success'
                          }`}>
                            {row.risk}
                          </span>
                        </td>
                        <td className="p-4 text-sm flex items-center gap-2">
                          {row.status === 'Healthy' ? <CheckCircle2 className="w-4 h-4 text-success" /> : <AlertCircle className="w-4 h-4 text-warning" />}
                          <span className="text-ink-muted">{row.status}</span>
                        </td>
                        <td className="p-4">
                          <button className="text-sm font-medium text-brand hover:text-brand-hover opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                            Review
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};
