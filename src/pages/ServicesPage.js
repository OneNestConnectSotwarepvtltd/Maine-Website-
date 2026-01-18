import React, { useState, useEffect, useRef} from 'react';
import { ArrowRight, Users, Award, Headphones, CheckCircle, Sparkles, Zap } from 'lucide-react';

/* ---------- Animated Number Component ---------- */
const AnimatedNumber = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const [num, setNum] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          const numValue = parseInt(value.replace(/[^\d]/g, ''), 10) || 0;
          let start = 0;

          const duration = 4000;
          const interval = 30;
          const increment = numValue / (duration / interval);

          const timer = setInterval(() => {
            start += increment;
            if (start >= numValue) {
              setNum(numValue);
              clearInterval(timer);
            } else {
              setNum(Math.floor(start));
            }
          }, interval);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated, value]);

  return (
    <span ref={ref}>
      {num}
      {suffix}
    </span>
  );
};

const ServicesPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleServiceClick = (serviceId) => {
    window.location.href = `/services/${serviceId}`;
  };

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Build modern, responsive websites with cutting-edge technologies and seamless user experiences',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      id: 2,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for seamless business operations',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      id: 3,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      id: 4,
      title: 'CRM Solutions',
      description: 'Streamline customer relationships with powerful CRM systems that drive sales and loyalty',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      gradient: 'from-green-500 to-teal-600',
    },
    {
      id: 5,
      title: 'HRM Solutions',
      description: 'Streamline HR operations with modern human resource management systems',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop',
      gradient: 'from-red-500 to-orange-600',
    },
    {
      id: 6,
      title: 'UI/UX Design',
      description: 'Create stunning user interfaces and experiences that drive engagement and conversions',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop',
      gradient: 'from-pink-500 to-rose-600',
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Expert Team',
      desc: '50+ certified professionals with years of experience',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: 'Quality Delivery',
      desc: '98% client satisfaction rate and on-time delivery',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      desc: 'Round-the-clock support for all your needs',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div>
      <div>
        <div></div>
        <div></div>
      </div>

      {/* HERO SECTION */}
      <section>
        <div>
          <div></div>
        </div>

        <div>
          <div>
            <div>
              <Zap />
            </div>
          </div>

          <h3>
            Our <span>Services</span>
          </h3>

          <p>
            Comprehensive IT solutions designed to accelerate your business growth
          </p>

          <div>
            <button>
              Explore Our Solutions
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section>
        <div>
          <div>
            <h2>
              What We <span>Offer</span>
            </h2>
            <p>
              Cutting-edge solutions tailored to transform your business
            </p>
          </div>

          <div>
            {services.map((service, index) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div />

                <div>
                  <img 
                    src={service.image} 
                    alt={service.title}
                  />
                  <div />
                </div>

                <div>
                  <h3>
                    {service.title}
                  </h3>
                  <p>
                    {service.description}
                  </p>
                  
                  <button
                    onClick={() => handleServiceClick(service.id)}
                  >
                    <span>Learn More</span>
                    <ArrowRight />
                  </button>
                </div>

                <div />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section>
        <div>
          <h2>
            Why Choose <span>Us</span>
          </h2>
          <p>
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>

          <div>
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx}>
                  <div />
                  <div>
                    <Icon />
                  </div>
                  <h3>
                    {item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section>
        <div>
          <div></div>
        </div>

        <div></div>
        <div></div>

        {[...Array(6)].map((_, i) => (
          <div key={i} />
        ))}

        <div>
          <div>
            <div />
            <div>
              <Sparkles />
            </div>
          </div>

          <h2>
            Ready to Get <span>Started?</span>
          </h2>

          <p>
            Let's discuss how our services can help transform your business
          </p>

          <div>
            {[
              { num: '100', suffix: '+', label: 'Projects Completed' },
              { num: '98', suffix: '%', label: 'Client Satisfaction' },
              { num: '2', suffix: '+', label: 'Years Experience' },
            ].map((stat, i) => (
              <div key={i}>
                <div>
                  <AnimatedNumber value={stat.num} suffix={stat.suffix} />
                </div>
                <div>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <button onClick={handleContactClick}>
            <span>
              Contact Us Today
              <ArrowRight />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;