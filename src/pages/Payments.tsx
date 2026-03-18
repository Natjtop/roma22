import React, { useState, useMemo } from 'react';
import { CreditCard, ArrowUpRight, ArrowDownRight, RefreshCw, Download, Filter, Search } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { useToast } from '../components/ui/Toast';

const initialTransactions = [
  { id: 1, customer: 'Acme Corp', amount: '$1,200', date: 'Oct 24, 2026', status: 'Succeeded', method: 'Visa •••• 4242' },
  { id: 2, customer: 'Globex', amount: '$850', date: 'Oct 24, 2026', status: 'Failed', method: 'Mastercard •••• 5555' },
  { id: 3, customer: 'Soylent', amount: '$2,400', date: 'Oct 23, 2026', status: 'Succeeded', method: 'Amex •••• 1234' },
  { id: 4, customer: 'Initech', amount: '$3,100', date: 'Oct 23, 2026', status: 'Recovered', method: 'Visa •••• 9876' },
  { id: 5, customer: 'Umbrella Corp', amount: '$5,000', date: 'Oct 22, 2026', status: 'Succeeded', method: 'Visa •••• 4242' },
];

export const Payments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [isExporting, setIsExporting] = useState(false);
  const { addToast } = useToast();

  const filteredTransactions = useMemo(() => {
    return initialTransactions.filter(t => {
      const matchesSearch = t.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            t.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            t.method.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'All' || t.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      addToast('Payments report exported successfully.', 'success');
    }, 1000);
  };

  return (
    <DashboardLayout>
      <div className="flex-1 overflow-auto p-4 md:p-8 bg-paper">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-2xl font-display font-semibold mb-1">Payments</h1>
            <p className="text-ink-muted text-sm">Monitor revenue, failed transactions, and recovery efforts.</p>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2"
              onClick={handleExport}
              disabled={isExporting}
            >
              <Download className="w-4 h-4" /> {isExporting ? 'Exporting...' : 'Export CSV'}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-4">Total Revenue</div>
            <div className="text-3xl font-display font-semibold mb-2">$124,500</div>
            <div className="flex items-center text-success text-sm font-medium">
              <ArrowUpRight className="w-4 h-4 mr-1" /> +12.5%
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-4">Failed Payments</div>
            <div className="text-3xl font-display font-semibold mb-2">$8,200</div>
            <div className="flex items-center text-danger text-sm font-medium">
              <ArrowUpRight className="w-4 h-4 mr-1" /> +2.1%
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-4">Recovered</div>
            <div className="text-3xl font-display font-semibold mb-2">$6,800</div>
            <div className="flex items-center text-success text-sm font-medium">
              <ArrowUpRight className="w-4 h-4 mr-1" /> +15.3%
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-4">Recovery Rate</div>
            <div className="text-3xl font-display font-semibold mb-2">82.9%</div>
            <div className="flex items-center text-success text-sm font-medium">
              <ArrowUpRight className="w-4 h-4 mr-1" /> +4.2%
            </div>
          </Card>
        </div>

        <Card>
          <div className="p-4 border-b border-line flex justify-between items-center bg-white">
            <div className="relative w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted" />
              <input 
                type="text" 
                placeholder="Search transactions..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 bg-paper border border-line rounded-lg text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
              />
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Filter className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none" />
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="pl-9 pr-8 py-1.5 bg-paper border border-line rounded-lg text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all appearance-none cursor-pointer"
                >
                  <option value="All">All Statuses</option>
                  <option value="Succeeded">Succeeded</option>
                  <option value="Failed">Failed</option>
                  <option value="Recovered">Recovered</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-line bg-paper/50">
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-ink-muted">Customer</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-ink-muted">Amount</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-ink-muted">Date</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-ink-muted">Status</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-ink-muted text-right">Method</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((row) => (
                    <tr key={row.id} className="border-b border-line last:border-0 hover:bg-paper transition-colors cursor-pointer">
                      <td className="p-4 font-medium">{row.customer}</td>
                      <td className="p-4 font-mono text-sm">{row.amount}</td>
                      <td className="p-4 text-sm text-ink-muted">{row.date}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                          row.status === 'Succeeded' ? 'bg-success/10 text-success' : 
                          row.status === 'Recovered' ? 'bg-brand/10 text-brand' : 
                          'bg-danger/10 text-danger'
                        }`}>
                          {row.status === 'Recovered' && <RefreshCw className="w-3 h-3 mr-1" />}
                          {row.status}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-ink-muted text-right flex items-center justify-end gap-2">
                        <CreditCard className="w-4 h-4" /> {row.method}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="p-12 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-12 h-12 bg-paper rounded-full flex items-center justify-center mb-4">
                          <Search className="w-6 h-6 text-ink-muted" />
                        </div>
                        <h3 className="text-lg font-semibold mb-1">No transactions found</h3>
                        <p className="text-sm text-ink-muted max-w-sm">
                          We couldn't find any transactions matching your current search and filter criteria. Try adjusting them.
                        </p>
                        <Button variant="outline" size="sm" className="mt-4" onClick={() => { setSearchTerm(''); setStatusFilter('All'); }}>
                          Clear Filters
                        </Button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};
