import React, { useState } from 'react';
import { User, Users, Bell, Shield, CreditCard } from 'lucide-react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useToast } from '../components/ui/Toast';

export const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isSaving, setIsSaving] = useState(false);
  const { addToast } = useToast();

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
  ];

  const handleSaveProfile = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      addToast('Profile updated successfully.', 'success');
    }, 1000);
  };

  const handleInviteMember = () => {
    addToast('Invitation sent to new team member.', 'success');
  };

  return (
    <DashboardLayout>
      <div className="flex-1 overflow-auto p-4 md:p-8 bg-paper">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-display font-semibold mb-1">Settings</h1>
            <p className="text-ink-muted text-sm">Manage your account settings and preferences.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Settings Sidebar */}
            <aside className="w-full md:w-64 shrink-0">
              <nav className="flex flex-col space-y-1">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors font-medium text-sm text-left ${
                        isActive 
                          ? 'bg-white text-brand shadow-sm border border-line' 
                          : 'text-ink-muted hover:text-ink hover:bg-white/50 border border-transparent'
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Settings Content */}
            <div className="flex-1">
              {activeTab === 'profile' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <Card className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-sm font-medium text-ink">First Name</label>
                          <input type="text" defaultValue="Jane" className="w-full px-3 py-2 bg-paper border border-line rounded-lg text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-sm font-medium text-ink">Last Name</label>
                          <input type="text" defaultValue="Doe" className="w-full px-3 py-2 bg-paper border border-line rounded-lg text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-ink">Email Address</label>
                        <input type="email" defaultValue="jane.doe@example.com" className="w-full px-3 py-2 bg-paper border border-line rounded-lg text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" />
                      </div>
                      <div className="pt-4">
                        <Button onClick={handleSaveProfile} disabled={isSaving}>
                          {isSaving ? 'Saving...' : 'Save Changes'}
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              )}

              {activeTab === 'team' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <Card className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h2 className="text-lg font-semibold">Team Members</h2>
                        <p className="text-sm text-ink-muted">Manage who has access to your workspace.</p>
                      </div>
                      <Button size="sm" onClick={handleInviteMember}>Invite Member</Button>
                    </div>
                    <div className="space-y-4">
                      {[
                        { name: 'Jane Doe', email: 'jane@example.com', role: 'Owner' },
                        { name: 'John Smith', email: 'john@example.com', role: 'Admin' },
                        { name: 'Alice Johnson', email: 'alice@example.com', role: 'Viewer' },
                      ].map((member, i) => (
                        <div key={i} className="flex items-center justify-between p-4 border border-line rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center font-medium">
                              {member.name.charAt(0)}
                            </div>
                            <div>
                              <div className="font-medium text-sm">{member.name}</div>
                              <div className="text-xs text-ink-muted">{member.email}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-xs font-medium px-2 py-1 bg-paper rounded-md text-ink-muted">{member.role}</span>
                            <button className="text-sm text-ink-muted hover:text-danger transition-colors">Remove</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              )}

              {activeTab === 'billing' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <Card className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Current Plan</h2>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border border-brand/20 bg-brand/5 rounded-lg mb-6">
                      <div>
                        <div className="font-semibold text-brand mb-1">Pro Plan</div>
                        <div className="text-sm text-ink-muted">Up to 5,000 active customers. Billed $299/month.</div>
                      </div>
                      <Button className="mt-4 md:mt-0">Upgrade Plan</Button>
                    </div>

                    <h3 className="text-md font-semibold mb-4">Payment Method</h3>
                    <div className="flex items-center justify-between p-4 border border-line rounded-lg mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-8 bg-paper border border-line rounded flex items-center justify-center">
                          <CreditCard className="w-5 h-5 text-ink-muted" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">Visa ending in 4242</div>
                          <div className="text-xs text-ink-muted">Expires 12/2028</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Update</Button>
                    </div>

                    <h3 className="text-md font-semibold mb-4">Billing History</h3>
                    <div className="border border-line rounded-lg overflow-hidden">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-paper border-b border-line">
                          <tr>
                            <th className="px-4 py-3 font-medium text-ink-muted">Date</th>
                            <th className="px-4 py-3 font-medium text-ink-muted">Amount</th>
                            <th className="px-4 py-3 font-medium text-ink-muted">Status</th>
                            <th className="px-4 py-3 font-medium text-ink-muted text-right">Invoice</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-line">
                          {[
                            { date: 'Oct 1, 2026', amount: '$299.00', status: 'Paid' },
                            { date: 'Sep 1, 2026', amount: '$299.00', status: 'Paid' },
                            { date: 'Aug 1, 2026', amount: '$299.00', status: 'Paid' },
                          ].map((invoice, i) => (
                            <tr key={i} className="hover:bg-paper/50 transition-colors">
                              <td className="px-4 py-3">{invoice.date}</td>
                              <td className="px-4 py-3">{invoice.amount}</td>
                              <td className="px-4 py-3">
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-success/10 text-success">
                                  {invoice.status}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-right">
                                <button className="text-brand hover:text-brand-hover font-medium">Download</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <Card className="p-6">
                    <h2 className="text-lg font-semibold mb-6">Notification Preferences</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-md font-medium mb-4">Email Notifications</h3>
                        <div className="space-y-4">
                          {[
                            { title: 'Weekly Summary', desc: 'Receive a weekly report of your key metrics.' },
                            { title: 'New Churn Risk', desc: 'Get alerted when a high-value account becomes at-risk.' },
                            { title: 'Payment Failed', desc: 'Get notified immediately when a customer payment fails.' },
                          ].map((item, i) => (
                            <div key={i} className="flex items-start justify-between">
                              <div>
                                <div className="font-medium text-sm">{item.title}</div>
                                <div className="text-xs text-ink-muted">{item.desc}</div>
                              </div>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked={i !== 0} />
                                <div className="w-9 h-5 bg-line peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-line">
                        <h3 className="text-md font-medium mb-4">In-App Notifications</h3>
                        <div className="space-y-4">
                          {[
                            { title: 'Playbook Executed', desc: 'Notify me when an automated playbook runs.' },
                            { title: 'New Feature Announcements', desc: 'Updates about new features and improvements.' },
                          ].map((item, i) => (
                            <div key={i} className="flex items-start justify-between">
                              <div>
                                <div className="font-medium text-sm">{item.title}</div>
                                <div className="text-xs text-ink-muted">{item.desc}</div>
                              </div>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-9 h-5 bg-line peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <Card className="p-6">
                    <h2 className="text-lg font-semibold mb-6">Security Settings</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-md font-medium mb-4">Change Password</h3>
                        <div className="space-y-4 max-w-md">
                          <div className="space-y-1.5">
                            <label className="text-sm font-medium text-ink">Current Password</label>
                            <input type="password" placeholder="••••••••" className="w-full px-3 py-2 bg-paper border border-line rounded-lg text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-sm font-medium text-ink">New Password</label>
                            <input type="password" placeholder="••••••••" className="w-full px-3 py-2 bg-paper border border-line rounded-lg text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" />
                          </div>
                          <Button size="sm">Update Password</Button>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-line">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-md font-medium">Two-Factor Authentication</h3>
                            <p className="text-sm text-ink-muted">Add an extra layer of security to your account.</p>
                          </div>
                          <Button variant="outline" size="sm">Enable 2FA</Button>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-line">
                        <h3 className="text-md font-medium mb-4">Active Sessions</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 border border-line rounded-lg">
                            <div>
                              <div className="font-medium text-sm">Mac OS • Safari</div>
                              <div className="text-xs text-ink-muted">San Francisco, CA • Active now</div>
                            </div>
                            <span className="text-xs font-medium px-2 py-1 bg-success/10 text-success rounded">Current</span>
                          </div>
                          <div className="flex items-center justify-between p-4 border border-line rounded-lg">
                            <div>
                              <div className="font-medium text-sm">iOS • Mobile App</div>
                              <div className="text-xs text-ink-muted">San Francisco, CA • Last active 2 hours ago</div>
                            </div>
                            <button className="text-sm text-danger hover:text-danger/80 font-medium transition-colors">Revoke</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
