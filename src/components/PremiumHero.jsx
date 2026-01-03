import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const GalaxyHeroSection = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let stars = [];
    let nebulaClouds = [];
    let energyOrbs = [];
    let glowingRings = [];
    let cosmicDust = [];
    let waveParticles = [];
    let spiralArms = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
      initStars();
      initNebulaClouds();
      initEnergyOrbs();
      initGlowingRings();
      initCosmicDust();
      initWaveParticles();
      initSpiralArms();
    };

    // Enhanced Particle class
    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.opacity = Math.random();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.z = Math.random() * 1000;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = Math.random() * 0.5 + 0.3;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.hue = Math.random() * 80 + 180;
        this.pulseSpeed = Math.random() * 0.03 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.rotation = Math.random() * Math.PI * 2;
        this.trail = [];
        this.maxTrailLength = 8;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulsePhase += this.pulseSpeed;
        this.rotation += this.rotationSpeed;
        
        const pulse = Math.sin(this.pulsePhase) * 0.5 + 0.5;
        this.currentOpacity = this.opacity * pulse;
        this.currentSize = this.size * (pulse * 0.5 + 0.5);

        // Add trail
        this.trail.push({ x: this.x, y: this.y, opacity: this.currentOpacity });
        if (this.trail.length > this.maxTrailLength) {
          this.trail.shift();
        }

        if (this.y > canvas.height + 10 || this.x < -10 || this.x > canvas.width + 10) {
          this.reset();
        }
      }

      draw() {
        // Draw trail
        this.trail.forEach((point, index) => {
          const trailOpacity = (index / this.trail.length) * point.opacity * 0.5;
          const trailSize = this.currentSize * (index / this.trail.length);
          
          const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, trailSize * 3);
          gradient.addColorStop(0, `hsla(${this.hue}, 100%, 70%, ${trailOpacity})`);
          gradient.addColorStop(0.5, `hsla(${this.hue}, 100%, 50%, ${trailOpacity * 0.5})`);
          gradient.addColorStop(1, `hsla(${this.hue}, 100%, 30%, 0)`);

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(point.x, point.y, trailSize * 3, 0, Math.PI * 2);
          ctx.fill();
        });

        // Draw main particle with glow
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.currentSize * 4);
        gradient.addColorStop(0, `hsla(${this.hue}, 100%, 80%, ${this.currentOpacity})`);
        gradient.addColorStop(0.3, `hsla(${this.hue}, 100%, 60%, ${this.currentOpacity * 0.8})`);
        gradient.addColorStop(0.6, `hsla(${this.hue}, 100%, 40%, ${this.currentOpacity * 0.4})`);
        gradient.addColorStop(1, `hsla(${this.hue}, 100%, 20%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentSize * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core bright center
        ctx.fillStyle = `hsla(${this.hue}, 100%, 95%, ${this.currentOpacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentSize, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Enhanced Star class with more effects
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.opacity = Math.random();
        this.twinkleSpeed = Math.random() * 0.03 + 0.01;
        this.twinklePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.02 + 0.005;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.hue = Math.random() * 60 + 200;
      }

      update() {
        this.twinklePhase += this.twinkleSpeed;
        this.pulsePhase += this.pulseSpeed;
        const twinkle = Math.sin(this.twinklePhase) * 0.5 + 0.5;
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
        this.currentOpacity = twinkle * this.opacity * pulse;
        this.currentSize = this.size * pulse;
      }

      draw() {
        // Outer glow
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.currentSize * 4);
        gradient.addColorStop(0, `hsla(${this.hue}, 100%, 90%, ${this.currentOpacity * 0.8})`);
        gradient.addColorStop(0.5, `hsla(${this.hue}, 100%, 70%, ${this.currentOpacity * 0.3})`);
        gradient.addColorStop(1, `hsla(${this.hue}, 100%, 50%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentSize * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = `rgba(255, 255, 255, ${this.currentOpacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentSize, 0, Math.PI * 2);
        ctx.fill();

        // Cross sparkle
        if (this.size > 1) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${this.currentOpacity * 0.6})`;
          ctx.lineWidth = 1;
          const sparkleSize = this.currentSize * 3;
          ctx.beginPath();
          ctx.moveTo(this.x - sparkleSize, this.y);
          ctx.lineTo(this.x + sparkleSize, this.y);
          ctx.moveTo(this.x, this.y - sparkleSize);
          ctx.lineTo(this.x, this.y + sparkleSize);
          ctx.stroke();
        }
      }
    }

    // Massive Nebula Clouds
    class NebulaCloud {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 300 + 200;
        this.vx = (Math.random() - 0.5) * 0.15;
        this.vy = (Math.random() - 0.5) * 0.15;
        this.hue = Math.random() * 80 + 200;
        this.opacity = Math.random() * 0.2 + 0.05;
        this.pulseSpeed = Math.random() * 0.015 + 0.005;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.001;
        this.rotation = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulsePhase += this.pulseSpeed;
        this.rotation += this.rotationSpeed;
        
        const pulse = Math.sin(this.pulsePhase) * 0.4 + 0.6;
        this.currentSize = this.size * pulse;
        this.currentOpacity = this.opacity * pulse;

        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = canvas.height + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        // Multiple layers for depth
        for (let i = 0; i < 3; i++) {
          const layerSize = this.currentSize * (1 - i * 0.2);
          const layerOpacity = this.currentOpacity * (1 - i * 0.3);
          
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, layerSize);
          gradient.addColorStop(0, `hsla(${this.hue + i * 10}, 90%, 70%, ${layerOpacity})`);
          gradient.addColorStop(0.4, `hsla(${this.hue + i * 10}, 80%, 50%, ${layerOpacity * 0.6})`);
          gradient.addColorStop(0.7, `hsla(${this.hue + i * 10}, 70%, 30%, ${layerOpacity * 0.3})`);
          gradient.addColorStop(1, `hsla(${this.hue + i * 10}, 60%, 20%, 0)`);

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(0, 0, layerSize, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    // Energy Orbs
    class EnergyOrb {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseSize = Math.random() * 40 + 30;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.hue = Math.random() * 60 + 180;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.03;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulsePhase += this.pulseSpeed;
        this.rotation += this.rotationSpeed;
        
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
        this.currentSize = this.baseSize * pulse;

        if (this.x < -this.baseSize) this.x = canvas.width + this.baseSize;
        if (this.x > canvas.width + this.baseSize) this.x = -this.baseSize;
        if (this.y < -this.baseSize) this.y = canvas.height + this.baseSize;
        if (this.y > canvas.height + this.baseSize) this.y = -this.baseSize;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        // Core energy
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.currentSize);
        gradient.addColorStop(0, `hsla(${this.hue}, 100%, 80%, 0.6)`);
        gradient.addColorStop(0.3, `hsla(${this.hue}, 100%, 60%, 0.4)`);
        gradient.addColorStop(0.6, `hsla(${this.hue}, 100%, 40%, 0.2)`);
        gradient.addColorStop(1, `hsla(${this.hue}, 100%, 20%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, this.currentSize, 0, Math.PI * 2);
        ctx.fill();

        // Rotating energy rings
        for (let i = 0; i < 3; i++) {
          const ringRadius = this.currentSize * (0.5 + i * 0.3);
          ctx.strokeStyle = `hsla(${this.hue}, 100%, 70%, ${0.3 - i * 0.1})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.restore();
      }
    }

    // Glowing Rings
    class GlowingRing {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 100 + 50;
        this.maxRadius = this.radius + 100;
        this.minRadius = this.radius - 30;
        this.expanding = true;
        this.speed = Math.random() * 0.5 + 0.3;
        this.hue = Math.random() * 60 + 200;
        this.opacity = Math.random() * 0.4 + 0.2;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
      }

      update() {
        this.rotation += this.rotationSpeed;
        
        if (this.expanding) {
          this.radius += this.speed;
          if (this.radius >= this.maxRadius) this.expanding = false;
        } else {
          this.radius -= this.speed;
          if (this.radius <= this.minRadius) this.expanding = true;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        const currentOpacity = this.opacity * (1 - (this.radius - this.minRadius) / (this.maxRadius - this.minRadius)) * 0.5;

        ctx.strokeStyle = `hsla(${this.hue}, 100%, 60%, ${currentOpacity})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = `hsla(${this.hue}, 100%, 70%, ${currentOpacity * 0.5})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(0, 0, this.radius + 5, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();
      }
    }

    // Cosmic Dust
    class CosmicDust {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.hue = Math.random() * 40 + 200;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Wave Particles
    class WaveParticle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.baseY = Math.random() * canvas.height;
        this.y = this.baseY;
        this.amplitude = Math.random() * 30 + 20;
        this.frequency = Math.random() * 0.02 + 0.01;
        this.phase = Math.random() * Math.PI * 2;
        this.vx = Math.random() * 0.5 + 0.3;
        this.size = Math.random() * 2 + 1;
        this.hue = Math.random() * 60 + 180;
        this.opacity = Math.random() * 0.6 + 0.3;
      }

      update() {
        this.x += this.vx;
        this.phase += this.frequency;
        this.y = this.baseY + Math.sin(this.phase) * this.amplitude;

        if (this.x > canvas.width + 10) {
          this.x = -10;
          this.baseY = Math.random() * canvas.height;
        }
      }

      draw() {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
        gradient.addColorStop(0, `hsla(${this.hue}, 100%, 70%, ${this.opacity})`);
        gradient.addColorStop(0.5, `hsla(${this.hue}, 100%, 50%, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, `hsla(${this.hue}, 100%, 30%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Spiral Arms
    class SpiralArm {
      constructor() {
        this.centerX = canvas.width / 2;
        this.centerY = canvas.height / 2;
        this.angle = Math.random() * Math.PI * 2;
        this.radius = 0;
        this.maxRadius = Math.min(canvas.width, canvas.height) * 0.6;
        this.speed = Math.random() * 0.02 + 0.01;
        this.rotationSpeed = Math.random() * 0.005 + 0.002;
        this.hue = Math.random() * 60 + 200;
        this.particles = [];
        this.numParticles = 30;
        
        for (let i = 0; i < this.numParticles; i++) {
          this.particles.push({
            offset: (i / this.numParticles) * this.maxRadius,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.3
          });
        }
      }

      update() {
        this.angle += this.rotationSpeed;
        this.radius += this.speed;
        if (this.radius > this.maxRadius) this.radius = 0;
      }

      draw() {
        this.particles.forEach((particle, index) => {
          const particleRadius = (this.radius + particle.offset) % this.maxRadius;
          const spiralAngle = this.angle + (particleRadius / this.maxRadius) * Math.PI * 4;
          
          const x = this.centerX + Math.cos(spiralAngle) * particleRadius;
          const y = this.centerY + Math.sin(spiralAngle) * particleRadius;
          
          const fadeOpacity = particle.opacity * (1 - particleRadius / this.maxRadius);
          
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, particle.size * 3);
          gradient.addColorStop(0, `hsla(${this.hue}, 100%, 70%, ${fadeOpacity})`);
          gradient.addColorStop(0.5, `hsla(${this.hue}, 100%, 50%, ${fadeOpacity * 0.5})`);
          gradient.addColorStop(1, `hsla(${this.hue}, 100%, 30%, 0)`);

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, particle.size * 3, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }

    const initParticles = () => {
      particles = [];
      const count = Math.min(200, Math.floor((canvas.width * canvas.height) / 6000));
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const initStars = () => {
      stars = [];
      const count = Math.min(300, Math.floor((canvas.width * canvas.height) / 4000));
      for (let i = 0; i < count; i++) {
        stars.push(new Star());
      }
    };

    const initNebulaClouds = () => {
      nebulaClouds = [];
      for (let i = 0; i < 8; i++) {
        nebulaClouds.push(new NebulaCloud());
      }
    };

    const initEnergyOrbs = () => {
      energyOrbs = [];
      for (let i = 0; i < 12; i++) {
        energyOrbs.push(new EnergyOrb());
      }
    };

    const initGlowingRings = () => {
      glowingRings = [];
      for (let i = 0; i < 10; i++) {
        glowingRings.push(new GlowingRing());
      }
    };

    const initCosmicDust = () => {
      cosmicDust = [];
      const count = Math.min(400, Math.floor((canvas.width * canvas.height) / 3000));
      for (let i = 0; i < count; i++) {
        cosmicDust.push(new CosmicDust());
      }
    };

    const initWaveParticles = () => {
      waveParticles = [];
      for (let i = 0; i < 50; i++) {
        waveParticles.push(new WaveParticle());
      }
    };

    const initSpiralArms = () => {
      spiralArms = [];
      for (let i = 0; i < 4; i++) {
        spiralArms.push(new SpiralArm());
      }
    };

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.4;
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, `hsla(${particles[i].hue}, 100%, 60%, ${opacity})`);
            gradient.addColorStop(1, `hsla(${particles[j].hue}, 100%, 60%, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });

      particles.forEach(particle => {
        const dx = particle.x - x;
        const dy = particle.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.vx -= (dx / distance) * force * 0.2;
          particle.vy -= (dy / distance) * force * 0.2;
        }
      });

      energyOrbs.forEach(orb => {
        const dx = orb.x - x;
        const dy = orb.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 250) {
          const force = (250 - distance) / 250;
          orb.vx += (dx / distance) * force * 0.05;
          orb.vy += (dy / distance) * force * 0.05;
        }
      });
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(3, 7, 18, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Layer 1: Background elements
      nebulaClouds.forEach(cloud => {
        cloud.update();
        cloud.draw();
      });

      spiralArms.forEach(arm => {
        arm.update();
        arm.draw();
      });

      // Layer 2: Mid-ground
      cosmicDust.forEach(dust => {
        dust.update();
        dust.draw();
      });

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      glowingRings.forEach(ring => {
        ring.update();
        ring.draw();
      });

      // Layer 3: Foreground
      waveParticles.forEach(wave => {
        wave.update();
        wave.draw();
      });

      energyOrbs.forEach(orb => {
        orb.update();
        orb.draw();
      });

      connectParticles();

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Delivered', color: 'from-blue-400 to-cyan-400' },
    { number: '10+', label: 'Years Experience', color: 'from-purple-400 to-pink-400' },
    { number: '98%', label: 'Client Satisfaction', color: 'from-green-400 to-emerald-400' },
    { number: '24/7', label: 'Support Available', color: 'from-orange-400 to-red-400' },
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-[#030712]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(to bottom, #030712, #0a0e27, #030712)' }}
      />

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex flex-col justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-400/20 rounded-full shadow-lg shadow-blue-500/20">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Trusted by 500+ Companies Worldwide
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
            <motion.span
              className="block text-white mb-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Driving Digital
            </motion.span>
            
            <motion.span
              className="block relative inline-block mb-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Growth
              </span>
              <motion.div
                className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.span>

            <motion.span
              className="block text-white"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              with Intelligent IT Solutions
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-xl md:text-2xl text-gray-300 text-center mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Transform your business with cutting-edge technology and expert guidance. 
          We deliver solutions that drive{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
            real results
          </span>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white font-bold rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/50 transition-all"
          >
            <span className="relative z-10 flex items-center gap-3 text-lg">
              Get Started
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>

          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(147, 197, 253, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-white/5 backdrop-blur-xl text-white font-bold rounded-2xl border-2 border-white/20 transition-all text-lg"
          >
            Watch Demo
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group cursor-pointer"
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative z-10 text-center">
                  <motion.div
                    className={`text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-3`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm md:text-base text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-gray-400 text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-blue-400 rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GalaxyHeroSection;