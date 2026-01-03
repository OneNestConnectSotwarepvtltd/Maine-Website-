import React from 'react';
import { Briefcase, Edit, Trash2 } from 'lucide-react';

const ServicesManagement = () => {
  const services = [
    { id: 1, name: 'Web Development', description: 'Full-stack web development services', status: 'Active', icon: '🌐' },
    { id: 2, name: 'Mobile Apps', description: 'iOS and Android app development', status: 'Active', icon: '📱' },
    { id: 3, name: 'UI/UX Design', description: 'User interface and experience design', status: 'Active', icon: '🎨' },
    { id: 4, name: 'SEO Services', description: 'Search engine optimization', status: 'Inactive', icon: '🔍' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Services Management</h1>
          <p className="text-gray-600 mt-1">Manage all services offered</p>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center gap-2">
          <Briefcase size={20} />
          Add Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl">{service.icon}</div>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                service.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
              }`}>
                {service.status}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{service.description}</p>
            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg font-medium hover:bg-indigo-100 transition flex items-center justify-center gap-2">
                <Edit size={16} />
                Edit
              </button>
              <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesManagement;