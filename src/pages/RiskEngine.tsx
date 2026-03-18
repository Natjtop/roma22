import React, { useState } from 'react';
import { Activity, AlertTriangle, ArrowRight, Zap, ShieldAlert, TrendingDown, Plus } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Modal } from '../components/ui/Modal';
import { useToast } from '../components/ui/Toast';

export const RiskEngine = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToast } = useToast();

  const handleCreatePlaybook = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    addToast('New playbook created and activated.', 'success');
  };

  return (
    <DashboardLayout>
      <div className="flex-1 overflow-auto p-4 md:p-8 bg-paper">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-2xl font-display font-semibold mb-1">Risk Engine</h1>
            <p className="text-ink-muted text-sm">AI-powered churn prediction and automated recovery workflows.</p>
          </div>
          <div className="flex gap-3">
            <Button size="sm" className="gap-2" onClick={() => setIsModalOpen(true)}>
              <Plus className="w-4 h-4" /> Create Playbook
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-ink text-white">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-5 h-5 text-brand" />
              <h3 className="font-semibold">Model Confidence</h3>
            </div>
            <div className="text-4xl font-display font-semibold mb-2">98.4%</div>
            <p className="text-white/60 text-sm">Based on 1.2M data points analyzed in the last 24 hours.</p>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="w-5 h-5 text-warning" />
              <h3 className="font-semibold">High Risk Accounts</h3>
            </div>
            <div className="text-4xl font-display font-semibold mb-2">42</div>
            <p className="text-ink-muted text-sm flex items-center gap-1">
              <TrendingDown className="w-4 h-4 text-success" /> 12% decrease from last week
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-5 h-5 text-brand" />
              <h3 className="font-semibold">Active Playbooks</h3>
            </div>
            <div className="text-4xl font-display font-semibold mb-2">8</div>
            <p className="text-ink-muted text-sm">Currently running automated retention workflows.</p>
          </Card>
        </div>

        <h2 className="text-lg font-semibold mb-4">Active Playbooks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Failed Payment Recovery', trigger: 'Payment Failed', actions: 3, success: '84%' },
            { title: 'Low Usage Warning', trigger: 'Logins < 2 per week', actions: 2, success: '62%' },
            { title: 'Executive Sponsor Left', trigger: 'Contact Email Bounced', actions: 4, success: '41%' },
            { title: 'NPS Detractor', trigger: 'NPS Score < 6', actions: 2, success: '55%' },
          ].map((playbook, i) => (
            <Card key={i} className="p-6 group cursor-pointer hover:border-brand/30 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-lg">{playbook.title}</h3>
                <div className="w-2 h-2 bg-success rounded-full mt-2" />
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Trigger</span>
                  <span className="font-medium">{playbook.trigger}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Actions</span>
                  <span className="font-medium">{playbook.actions} Steps</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Recovery Rate</span>
                  <span className="font-medium text-success">{playbook.success}</span>
                </div>
              </div>
              <div className="flex items-center text-sm font-medium text-brand group-hover:text-brand-hover transition-colors">
                Edit Playbook <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Playbook">
        <form onSubmit={handleCreatePlaybook} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-ink">Playbook Name</label>
            <input required type="text" className="w-full px-3 py-2 bg-paper border border-line rounded-lg text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" placeholder="e.g., High Value Churn Risk" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-ink">Trigger Condition</label>
            <select className="w-full px-3 py-2 bg-paper border border-line rounded-lg text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all appearance-none">
              <option>Usage dropped by 50%</option>
              <option>Payment Failed</option>
              <option>NPS Score &lt; 6</option>
              <option>No login for 14 days</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-ink">Action Sequence</label>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-3 border border-line rounded-lg bg-paper/50">
                <div className="w-6 h-6 rounded-full bg-brand/10 text-brand flex items-center justify-center text-xs font-medium">1</div>
                <span className="text-sm">Send automated email</span>
              </div>
              <div className="flex items-center gap-2 p-3 border border-line rounded-lg bg-paper/50">
                <div className="w-6 h-6 rounded-full bg-brand/10 text-brand flex items-center justify-center text-xs font-medium">2</div>
                <span className="text-sm">Create task in Salesforce</span>
              </div>
              <button type="button" className="text-sm text-brand hover:text-brand-hover font-medium flex items-center gap-1 mt-2">
                <Plus className="w-4 h-4" /> Add Action
              </button>
            </div>
          </div>
          <div className="pt-4 flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button type="submit">Activate Playbook</Button>
          </div>
        </form>
      </Modal>
    </DashboardLayout>
  );
};
