const Hero = () => {
  return (
    <div className="w-full bg-white mt-4 px-0 sm:px-4 lg:px-8">
      <div className="w-full max-w-[1400px] mx-auto lg:border lg:border-gray-200 lg:rounded-2xl bg-white overflow-hidden relative">
        
        {/* Fancy Orange Decorative Shape - Top Left */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-br-full" style={{ backgroundColor: '#FC8A06', opacity: 0.1 }}></div>
        <div className="absolute top-0 left-0 w-48 h-48 rounded-br-full" style={{ backgroundColor: '#FC8A06', opacity: 0.15 }}></div>
        <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full" style={{ backgroundColor: '#FC8A06', opacity: 0.2 }}></div>
        
        {/* Dark Orange Decorative Shape - Top Right (behind cards) */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-bl-full" style={{ backgroundColor: '#D97A00', opacity: 0.15 }}></div>
        <div className="absolute top-10 right-10 w-72 h-72 rounded-bl-full" style={{ backgroundColor: '#FC8A06', opacity: 0.1 }}></div>
        
        <div className="px-6 sm:px-8 md:px-12 py-8 sm:py-12 md:py-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* LEFT SECTION - Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-gray-500 text-sm mb-4">
                Order Restaurant food, takeaway and groceries.
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                <span className="text-gray-900">Feast Your Senses,</span>
                <br />
                <span style={{ color: '#FC8A06' }}>Fast and Fresh</span>
              </h1>

              <p className="text-gray-500 mb-6">
                Enter a postcode to see what we deliver
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                <input
                  type="text"
                  placeholder="e.g. EC4R 3TE"
                  className="flex-1 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FC8A06] transition-all"
                />
                <button 
                  className="text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105"
                  style={{ backgroundColor: '#FC8A06' }}
                >
                  Search
                </button>
              </div>
            </div>

            {/* RIGHT SECTION - Order Status Cards - Hidden on mobile */}
            <div className="hidden lg:block flex-1 relative">
              {/* Order Cards Stack */}
              <div className="space-y-4 max-w-sm mx-auto lg:mx-0 lg:ml-auto relative z-20">
                {/* Card 1 */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition">
                  <p className="text-sm font-bold mb-1" style={{ color: '#03081F' }}>Orders</p>
                  <p className="text-sm text-gray-700">We've received your order!</p>
                  <p className="text-xs text-gray-400">Awaiting Restaurant acceptance</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 ml-0 md:ml-8 hover:shadow-md transition">
                  <p className="text-sm font-bold mb-1" style={{ color: '#03081F' }}>Orders</p>
                  <p className="text-sm text-gray-700">Order Accepted!</p>
                  <p className="text-xs text-gray-400">Your order will be delivered shortly</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 ml-0 md:ml-16 hover:shadow-md transition">
                  <p className="text-sm font-bold mb-1" style={{ color: '#03081F' }}>Orders</p>
                  <p className="text-sm text-gray-700">Your rider's nearby ✈️</p>
                  <p className="text-xs text-gray-400">They're almost there – get ready!</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -z-10 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-50 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;