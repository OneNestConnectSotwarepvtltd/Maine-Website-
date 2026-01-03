import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import WhatsAppButton from '../components/Watsappfloat';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Services data (same as in ServicesPage)
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Build modern, responsive websites with cutting-edge technologies and seamless user experiences',
      fullDesc: 'Transform your digital presence with our cutting-edge web development solutions. We create stunning, high-performance websites that drive engagement and deliver measurable results for your business.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop',
      gradient: 'from-blue-500 to-purple-600',
      features: [
        'Responsive design that works seamlessly across all devices',
        'SEO optimized architecture for better search engine rankings',
        'Lightning-fast performance with modern optimization techniques',
        'Secure and scalable infrastructure built for growth',
        'Custom CMS integration for easy content management',
        'Ongoing support and maintenance to keep your site running smoothly'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'TypeScript', 'Next.js']
    },
    {
      id: 2,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for seamless business operations',
      fullDesc: 'Modernize your infrastructure with enterprise-grade cloud solutions. We help businesses migrate, manage, and optimize their cloud environments for maximum efficiency and cost savings.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop',
      gradient: 'from-cyan-500 to-blue-600',
      features: [
        'Seamless cloud migration with zero downtime',
        'Multi-cloud architecture design and implementation',
        'Auto-scaling infrastructure for optimal resource usage',
        'Advanced security and compliance management',
        'Cost optimization and monitoring solutions',
        '24/7 cloud infrastructure support and maintenance'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform']
    },
    {
      id: 3,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences',
      fullDesc: 'Create powerful mobile applications that engage users and drive business growth. Our expert team builds native and cross-platform apps with stunning UI and seamless performance.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop',
      gradient: 'from-purple-500 to-pink-600',
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions with React Native and Flutter',
        'Intuitive and engaging user interface design',
        'Offline functionality and data synchronization',
        'Push notifications and real-time updates',
        'App store optimization and submission support'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL']
    },
    {
      id: 4,
      title: 'CRM Solutions',
      description: 'Streamline customer relationships with powerful CRM systems that drive sales and loyalty',
      fullDesc: 'Transform your customer relationships with intelligent CRM solutions. We help businesses manage leads, automate sales processes, and deliver exceptional customer experiences at scale.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      gradient: 'from-green-500 to-teal-600',
      features: [
        'Custom CRM implementation and configuration',
        'Sales pipeline automation and lead management',
        'Customer data integration and analytics',
        'Marketing automation and campaign management',
        'Customer support ticketing systems',
        'Mobile CRM access for on-the-go teams'
      ],
      technologies: ['Salesforce', 'HubSpot', 'Zoho CRM', 'Microsoft Dynamics', 'Custom CRM', 'API Integration']
    },
    {
      id: 5,
      title: 'HRM Solutions',
      description: 'Streamline HR operations with modern human resource management systems',
      fullDesc: 'Empower your HR team with comprehensive HRM solutions. We help businesses automate recruitment, payroll, attendance, and employee management for increased efficiency and employee satisfaction.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop',
      gradient: 'from-red-500 to-orange-600',
      features: [
        'End-to-end recruitment and onboarding automation',
        'Payroll processing and tax compliance',
        'Attendance and leave management systems',
        'Performance review and appraisal workflows',
        'Employee self-service portals',
        'HR analytics and reporting dashboards'
      ],
      technologies: ['SAP SuccessFactors', 'Workday', 'BambooHR', 'Zoho People', 'Custom HRMS', 'Biometric Integration']
    },
    {
      id: 6,
      title: 'UI/UX Design',
      description: 'Create stunning user interfaces and experiences that drive engagement and conversions',
      fullDesc: 'Design experiences that users love and businesses need. Our design team crafts beautiful, intuitive interfaces that enhance user satisfaction and drive measurable business results.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop',
      gradient: 'from-pink-500 to-rose-600',
      features: [
        'User research and persona development',
        'Information architecture and user flow design',
        'Interactive prototyping and usability testing',
        'Visual design with modern aesthetics',
        'Responsive design for all screen sizes',
        'Design system creation and documentation'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision', 'Framer']
    }
  ];

  // Find service by ID from URL params
  const service = services.find(s => s.id === parseInt(id));

  // If service not found
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <WhatsAppButton />
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Service Not Found</h1>
          <button 
            onClick={() => navigate('/services')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <WhatsAppButton/>
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-90`}></div>

          {/* Background Effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <button 
            onClick={() => navigate('/services')}
            className="mb-8 text-white hover:text-blue-100 transition flex items-center gap-2 group w-fit"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-semibold">Back to Services</span>
          </button>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              {service.fullDesc}
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center"
              >
                <span>Get Started Now</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive features designed for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {service.features.map((feature, idx) => (
              <div key={idx} className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 hover:from-blue-500 hover:to-purple-600 transition-all duration-500">
                <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <p className="text-lg font-medium text-gray-800 leading-relaxed">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      {service.technologies && service.technologies.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600">Cutting-edge tools and frameworks</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, idx) => (
              <div key={idx} className="px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-purple-200 rounded-full text-purple-700 font-bold text-lg hover:shadow-lg hover:scale-105 transition-all">
                {tech}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold mb-6">
            <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
            <span>Trusted by 500+ Companies</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals with {service.title.toLowerCase()}.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-purple-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center"
            >
              <span>Start Your Project</span>
              <ArrowRight className="ml-3 w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;