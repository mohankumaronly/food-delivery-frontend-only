import { Search, CreditCard, MapPin, Percent, Truck, Users, Handshake, LifeBuoy, ShoppingBag, Package, Clock, Sparkles } from 'lucide-react';

const InfoSection = () => {
  return (
    <div className="w-full bg-white mt-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1400px] mx-auto">
        
        {/* Main Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Know more about <span style={{ color: '#FC8A06' }}>us!</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - How does Order.UK work? */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">How does <span style={{ color: '#FC8A06' }}>Order.UK</span> work?</h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                <ShoppingBag size={20} style={{ color: '#FC8A06' }} />
                <span className="text-gray-700 text-sm">Place order through our website or Mobile app</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                <Package size={20} style={{ color: '#FC8A06' }} />
                <span className="text-gray-700 text-sm">Your can track your order status with delivery time</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                <Clock size={20} style={{ color: '#FC8A06' }} />
                <span className="text-gray-700 text-sm">Receive your order at a lighting fast speed!</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <p className="text-gray-600 text-sm leading-relaxed">
                Order.UK simplifies the food ordering process. Browse through our diverse menu, 
                select your favorite dishes, and proceed to checkout. Your delicious meal will 
                be on its way to your doorstep in no time!
              </p>
            </div>
          </div>

          {/* Middle Column - Frequent Questions */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Frequent <span style={{ color: '#FC8A06' }}>Questions</span></h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                <CreditCard size={18} style={{ color: '#FC8A06' }} />
                <span className="text-gray-700 text-sm">What payment methods are accepted?</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                <MapPin size={18} style={{ color: '#FC8A06' }} />
                <span className="text-gray-700 text-sm">Can I track my order in real-time?</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                <Percent size={18} style={{ color: '#FC8A06' }} />
                <span className="text-gray-700 text-sm">Are there any special discounts or promotions available?</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                <Truck size={18} style={{ color: '#FC8A06' }} />
                <span className="text-gray-700 text-sm">Is Order.UK available in my area?</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                <Users size={18} style={{ color: '#FC8A06' }} />
                <span className="text-gray-700 text-sm">Who we are?</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                <Handshake size={18} style={{ color: '#FC8A06' }} />
                <span className="text-gray-700 text-sm">Partner Program</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                <LifeBuoy size={18} style={{ color: '#FC8A06' }} />
                <span className="text-gray-700 text-sm">Help & Support</span>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Questions */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick <span style={{ color: '#FC8A06' }}>Answers</span></h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                <Search size={18} style={{ color: '#FC8A06' }} className="mt-0.5" />
                <span className="text-gray-700 text-sm">How does Order.UK work?</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                <CreditCard size={18} style={{ color: '#FC8A06' }} className="mt-0.5" />
                <span className="text-gray-700 text-sm">What payment methods are accepted?</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                <MapPin size={18} style={{ color: '#FC8A06' }} className="mt-0.5" />
                <span className="text-gray-700 text-sm">Can I track my order in real-time?</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                <Percent size={18} style={{ color: '#FC8A06' }} className="mt-0.5" />
                <span className="text-gray-700 text-sm">Are there any special discounts or promotions available?</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                <Truck size={18} style={{ color: '#FC8A06' }} className="mt-0.5" />
                <span className="text-gray-700 text-sm">Is Order.UK available in my area?</span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: '#FC8A06', color: '#FFFFFF' }}>
              <Sparkles size={24} className="mb-2" />
              <p className="font-semibold text-sm">Need help?</p>
              <p className="text-xs opacity-90 mt-1">Contact our support team 24/7</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InfoSection;