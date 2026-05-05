import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Stats = () => {
  return (
    <div className="w-full bg-white mt-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          
          <StatCard 
            number={546} 
            suffix="+" 
            label="Registered Riders" 
          />
          <StatCard 
            number={789900} 
            suffix="+" 
            label="Orders Delivered" 
          />
          <StatCard 
            number={690} 
            suffix="+" 
            label="Restaurants Partnered" 
          />
          <StatCard 
            number={17457} 
            suffix="+" 
            label="Food items" 
          />
          
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  number: number;
  suffix: string;
  label: string;
}

const StatCard = ({ number, suffix, label }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = number / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= number) {
          setCount(number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  return (
    <div ref={ref} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="flex items-baseline justify-center gap-0">
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: '#FC8A06' }}>
          {count.toLocaleString()}
        </span>
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: '#FC8A06' }}>
          {suffix}
        </span>
      </div>
      <p className="text-gray-600 text-sm sm:text-base mt-2 font-medium">{label}</p>
    </div>
  );
};

export default Stats;