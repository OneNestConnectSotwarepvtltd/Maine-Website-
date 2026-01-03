import React, { useState } from 'react';

const DashboardPage = ({ setCurrentPage, setIsLoggedIn }) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Dummy user data (will come from backend)
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Tech Solutions Inc.',
    joinedDate: 'Jan 15, 2024'
  };

  const projects = [
    { id: 1, name: 'Website Redesign', status: 'In Progress', progress: 65, dueDate: 'Dec 30, 2024' },
    { id: 2, name: 'Mobile App Development', status: 'Planning', progress: 20, dueDate: 'Jan 15, 2025' },
    { id: 3, name: 'CRM Integration', status: 'Completed', progress: 100, dueDate: 'Dec 10, 2024' }
  ];

  const tickets = [
    { id: 1, subject: 'Login Issue', status: 'Open', priority: 'High', date: 'Dec 15, 2024' },
    { id: 2, subject: 'Feature Request', status: 'In Progress', priority: 'Medium', date: 'Dec 14, 2024' },
    { id: 3, subject: 'Bug Report', status: 'Closed', priority: 'Low', date: 'Dec 10, 2024' }
  ];

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      case 'Open': return 'bg-red-100 text-red-800';
      case 'Closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'High': return 'text-red-600';
      case 'Medium': return 'text-yellow-600';
      case 'Low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-blue-600">WorkHub</h1>
              <span className="text-gray-400">|</span>
              <span className="text-gray-700">Dashboard</span>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <span className="text-2xl">🔔</span>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {user.name.charAt(0)}
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back, {user.name}! 👋</h2>
          <p className="text-blue-100">Here's what's happening with your projects today</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">📊</div>
              <span className="text-green-600 text-sm font-semibold">+12%</span>
            </div>
            <h3 className="text-gray-500 text-sm mb-1">Active Projects</h3>
            <p className="text-3xl font-bold text-gray-800">8</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">✅</div>
              <span className="text-green-600 text-sm font-semibold">+5</span>
            </div>
            <h3 className="text-gray-500 text-sm mb-1">Completed</h3>
            <p className="text-3xl font-bold text-gray-800">24</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">🎫</div>
              <span className="text-yellow-600 text-sm font-semibold">2 New</span>
            </div>
            <h3 className="text-gray-500 text-sm mb-1">Support Tickets</h3>
            <p className="text-3xl font-bold text-gray-800">5</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">📄</div>
              <span className="text-blue-600 text-sm font-semibold">View All</span>
            </div>
            <h3 className="text-gray-500 text-sm mb-1">Documents</h3>
            <p className="text-3xl font-bold text-gray-800">12</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <div className="flex gap-8 px-6 overflow-x-auto">
              {['overview', 'projects', 'tickets', 'profile'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={'py-4 font-semibold capitalize transition-all whitespace-nowrap ' + (activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800')}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">Project "Website Redesign" updated</p>
                        <p className="text-sm text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">New support ticket created</p>
                        <p className="text-sm text-gray-500">5 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">Invoice #1234 generated</p>
                        <p className="text-sm text-gray-500">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Projects Tab */}
            {activeTab === 'projects' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">My Projects</h3>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                    + New Project
                  </button>
                </div>
                <div className="space-y-4">
                  {projects.map(project => (
                    <div key={project.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-lg font-bold text-gray-800 mb-1">{project.name}</h4>
                          <p className="text-sm text-gray-500">Due: {project.dueDate}</p>
                        </div>
                        <span className={'px-3 py-1 rounded-full text-sm font-semibold ' + getStatusColor(project.status)}>
                          {project.status}
                        </span>
                      </div>
                      <div className="mb-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-semibold text-gray-800">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: project.progress + '%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tickets Tab */}
            {activeTab === 'tickets' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">Support Tickets</h3>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                    + New Ticket
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Subject</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Priority</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {tickets.map(ticket => (
                        <tr key={ticket.id} className="hover:bg-gray-50 transition">
                          <td className="px-6 py-4 text-sm text-gray-800">#{ticket.id}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-800">{ticket.subject}</td>
                          <td className="px-6 py-4 text-sm">
                            <span className={'font-semibold ' + getPriorityColor(ticket.priority)}>
                              {ticket.priority}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={'px-3 py-1 rounded-full text-xs font-semibold ' + getStatusColor(ticket.status)}>
                              {ticket.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">{ticket.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="max-w-2xl">
                <h3 className="text-xl font-bold mb-6">Profile Settings</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold mr-2">
                        Change Photo
                      </button>
                      <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-semibold">
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                      <input
                        type="text"
                        defaultValue={user.name}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue={user.email}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Company</label>
                      <input
                        type="text"
                        defaultValue={user.company}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Joined Date</label>
                      <input
                        type="text"
                        defaultValue={user.joinedDate}
                        disabled
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                      Save Changes
                    </button>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-bold mb-4 text-gray-800">Change Password</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Current Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="••••••••"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">New Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="••••••••"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Confirm New Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="••••••••"
                      />
                    </div>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                      Update Password
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;