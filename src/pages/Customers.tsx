import React, { useState, useMemo } from 'react';
import { Search, Filter, Download, MoreHorizontal, ChevronLeft, ChevronRight, ArrowUpDown } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Modal } from '../components/ui/Modal';
import { useToast } from '../components/ui/Toast';

const initialCustomersData = [
  { id: 1, company: 'Acme Corp', contact: 'john@acme.com', mrr: '$1,200', status: 'Active', health: 'Good', lastActive: '2 hours ago' },
  { id: 2, company: 'Globex', contact: 'sarah@globex.io', mrr: '$850', status: 'At Risk', health: 'Poor', lastActive: '3 days ago' },
  { id: 3, company: 'Soylent', contact: 'mike@soylent.com', mrr: '$2,400', status: 'Active', health: 'Excellent', lastActive: '10 mins ago' },
  { id: 4, company: 'Initech', contact: 'peter@initech.net', mrr: '$3,100', status: 'Churned', health: 'Critical', lastActive: '2 weeks ago' },
  { id: 5, company: 'Umbrella Corp', contact: 'alice@umbrella.com', mrr: '$5,000', status: 'Active', health: 'Good', lastActive: '1 hour ago' },
  { id: 6, company: 'Stark Industries', contact: 'tony@stark.com', mrr: '$12,000', status: 'Active', health: 'Excellent', lastActive: 'Just now' },
  { id: 7, company: 'Wayne Enterprises', contact: 'bruce@wayne.com', mrr: '$8,500', status: 'Active', health: 'Good', lastActive: '5 hours ago' },
  { id: 8, company: 'Cyberdyne', contact: 'miles@cyberdyne.com', mrr: '$4,200', status: 'At Risk', health: 'Poor', lastActive: '1 day ago' },
];

export const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [customers, setCustomers] = useState(initialCustomersData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const { addToast } = useToast();

  const filteredCustomers = useMemo(() => {
    return customers.filter(c => {
      const matchesSearch = c.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            c.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            c.status.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [customers, searchTerm, statusFilter]);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      addToast('Customer list exported successfully.', 'success');
    }, 1000);
  };

  const handleAddCustomer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newCustomer = {
      id: customers.length + 1,
      company: formData.get('company') as string,
      contact: formData.get('contact') as string,
      mrr: formData.get('mrr') as string,
      status: 'Active',
      health: 'Good',
      lastActive: 'Just now'
    };
    setCustomers([newCustomer, ...customers]);
    setIsModalOpen(false);
    addToast('New customer added successfully.', 'success');
  };

  return (
    <DashboardLayout>
      <div className="flex-1 overflow-auto p-4 md:p-8 bg-paper">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-2xl font-display font-semibold mb-1">Customers</h1>
            <p className="text-ink-muted text-sm">Manage your customer base and monitor account health.</p>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2" 
              onClick={handleExport}
              disabled={isExporting}
            >
              <Download className="w-4 h-4" /> {isExporting ? 'Exporting...' : 'Export'}
            </Button>
            <Button size="sm" onClick={() => setIsModalOpen(true)}>Add Customer</Button>
          </div>
        </div>

        <Card>
          {/* Table Toolbar */}
          <div className="p-4 border-b border-line flex justify-between items-center bg-white">
            <div className="relative w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted" />
              <input 
                type="text" 
                placeholder="Search customers..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 bg-paper border border-line rounded-lg text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Filter className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none" />
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="pl-9 pr-8 py-1.5 bg-paper border border-line rounded-lg text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all appearance-none cursor-pointer"
                >
                  <option value="All">All Statuses</option>
                  <option value="Active">Active</option>
                  <option value="At Risk">At Risk</option>
                  <option value="Churned">Churned</option>
                </select>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-line bg-paper/50">
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-ink-muted cursor-pointer hover:text-ink transition-colors group">
                    <div className="flex items-center gap-1">Company <ArrowUpDown className="w-3 h-3 opacity-0 group-hover:opacity-100" /></div>
                  </th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-ink-muted">Contact</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-ink-muted cursor-pointer hover:text-ink transition-colors group">
                    <div className="flex items-center gap-1">MRR <ArrowUpDown className="w-3 h-3 opacity-0 group-hover:opacity-100" /></div>
                  </th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-ink-muted">Status</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-ink-muted">Health</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-ink-muted">Last Active</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-ink-muted text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.length > 0 ? (
                  filteredCustomers.map((row) => (
                    <tr key={row.id} className="border-b border-line last:border-0 hover:bg-paper transition-colors group cursor-pointer">
                      <td className="p-4 font-medium">{row.company}</td>
                      <td className="p-4 text-sm text-ink-muted">{row.contact}</td>
                      <td className="p-4 font-mono text-sm">{row.mrr}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                          row.status === 'Active' ? 'bg-success/10 text-success' : 
                          row.status === 'At Risk' ? 'bg-warning/10 text-warning' : 
                          'bg-danger/10 text-danger'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            row.health === 'Excellent' ? 'bg-success' :
                            row.health === 'Good' ? 'bg-success/60' :
                            row.health === 'Poor' ? 'bg-warning' : 'bg-danger'
                          }`} />
                          <span className="text-sm text-ink-muted">{row.health}</span>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-ink-muted">{row.lastActive}</td>
                      <td className="p-4 text-right">
                        <button className="p-1 text-ink-muted hover:text-ink transition-colors rounded hover:bg-line/50">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="p-12 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-12 h-12 bg-paper rounded-full flex items-center justify-center mb-4">
                          <Search className="w-6 h-6 text-ink-muted" />
                        </div>
                        <h3 className="text-lg font-semibold mb-1">No customers found</h3>
                        <p className="text-sm text-ink-muted max-w-sm">
                          We couldn't find any customers matching your current search and filter criteria. Try adjusting them.
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

          {/* Pagination */}
          <div className="p-4 border-t border-line flex items-center justify-between bg-white">
            <div className="text-sm text-ink-muted">
              Showing <span className="font-medium text-ink">{filteredCustomers.length > 0 ? 1 : 0}</span> to <span className="font-medium text-ink">{filteredCustomers.length}</span> of <span className="font-medium text-ink">{customers.length}</span> results
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="w-8 h-8" disabled>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8 bg-paper">1</Button>
              <Button variant="ghost" size="icon" className="w-8 h-8" disabled>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Customer">
        <form onSubmit={handleAddCustomer} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-ink">Company Name</label>
            <input name="company" required type="text" className="w-full px-3 py-2 bg-paper border border-line rounded-lg text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" placeholder="Acme Corp" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-ink">Contact Email</label>
            <input name="contact" required type="email" className="w-full px-3 py-2 bg-paper border border-line rounded-lg text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" placeholder="contact@acme.com" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-ink">Initial MRR</label>
            <input name="mrr" required type="text" className="w-full px-3 py-2 bg-paper border border-line rounded-lg text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" placeholder="$1,000" />
          </div>
          <div className="pt-4 flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button type="submit">Add Customer</Button>
          </div>
        </form>
      </Modal>
    </DashboardLayout>
  );
};
