import React from 'react';
import { Search, User, Heart, ShoppingBag, Phone, MapPin, Video, Truck, Shield, MessageCircle, Diamond, RotateCcw, ChevronRight, Play } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        {/* Single header bar */}
        <div className="px-4 py-3">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Left side - Contact info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">1.415.426.2781</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Stores</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-4 border border-gray-400 rounded flex items-center justify-center">
                    <Video className="w-2.5 h-2.5 text-gray-600" />
                  </div>
                  <span className="text-sm text-gray-600">Virtual Appointment</span>
                </div>
              </div>
            </div>
            
            {/* Center - Logo */}
            <div className="flex items-center">
              <h1 className="text-xl font-normal tracking-[0.15em] text-gray-900" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>BRILLIANT EARTH</h1>
              <div className="ml-1 text-gray-400">|</div>
              <span className="ml-2 text-sm text-gray-600 font-light" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>20 Years of Yes</span>
            </div>
            
            {/* Right side - Icons and VND */}
            <div className="flex items-center space-x-4">
              <Search className="w-4 h-4 cursor-pointer hover:text-gray-800 text-gray-600" />
              <User className="w-4 h-4 cursor-pointer hover:text-gray-800 text-gray-600" />
              <Heart className="w-4 h-4 cursor-pointer hover:text-gray-800 text-gray-600" />
              <ShoppingBag className="w-4 h-4 cursor-pointer hover:text-gray-800 text-gray-600" />
              <div className="flex items-center space-x-1">
                <span className="w-4 h-4 text-red-500 text-xs">🇻🇳</span>
                <span className="text-sm text-gray-900 font-medium">VND</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="border-t border-gray-100 px-4 py-3">
          <nav className="max-w-7xl mx-auto flex justify-center items-center space-x-12 text-sm font-normal text-gray-700 tracking-wide">
            <a href="#" className="hover:text-gray-900 transition-colors">ENGAGEMENT RINGS</a>
            <a href="#" className="hover:text-gray-900 transition-colors">WEDDING RINGS</a>
            <a href="#" className="hover:text-gray-900 transition-colors">DIAMONDS</a>
            <a href="#" className="hover:text-gray-900 transition-colors">GEMSTONES</a>
            <a href="#" className="hover:text-gray-900 transition-colors">JEWELRY</a>
            <a href="#" className="hover:text-gray-900 transition-colors">GIFTS</a>
            <a href="#" className="hover:text-gray-900 transition-colors">ABOUT</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="grid md:grid-cols-2">
          {/* Easy Yes */}
          <div className="relative h-96 md:h-[500px] bg-cover bg-center" style={{
            backgroundImage: 'url("/HeroSection/1.webp")'
          }}>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
              <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>Easy Yes</h2>
              <button className="bg-white text-gray-900 px-8 py-3 text-sm font-normal tracking-wide hover:bg-gray-100 transition-colors">
                Shop Engagement Rings
              </button>
            </div>
          </div>
          
          {/* All Stacked Up */}
          <div className="relative h-96 md:h-[500px] bg-cover bg-center" style={{
            backgroundImage: 'url("/HeroSection/2.webp")'
          }}>
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <h2 className="text-4xl md:text-6xl font-light text-gray-800 mb-8 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>All Stacked Up</h2>
              <button className="bg-teal-800 text-white px-8 py-3 text-sm font-normal tracking-wide hover:bg-teal-900 transition-colors">
                Shop Wedding Rings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Jewelry by Category */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>Shop Jewelry by Category</h2>
          <p className="text-gray-600 mb-12 font-light">Thoughtfully designed collections for the big day and every day.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Engagement Rings', image: '/ShopJewelrybyCategory/1.JPG', hoverImage: '/ShopJewelrybyCategory/1a.JPG' },
              { name: "Women's Wedding Rings", image: '/ShopJewelrybyCategory/2.JPG', hoverImage: '/ShopJewelrybyCategory/2a.jpg' },
              { name: "Men's Wedding Rings", image: '/ShopJewelrybyCategory/3.JPG', hoverImage: '/ShopJewelrybyCategory/3a.JPG' },
              { name: 'Gemstone Rings', image: '/ShopJewelrybyCategory/4.JPG', hoverImage: '/ShopJewelrybyCategory/4a.JPG' },
              { name: 'Fine Jewelry', image: '/ShopJewelrybyCategory/5.JPG', hoverImage: '/ShopJewelrybyCategory/5a.JPG' },
              { name: 'Best Sellers', image: '/ShopJewelrybyCategory/6.JPG', hoverImage: '/ShopJewelrybyCategory/6a.JPG' }
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img 
                    src={item.hoverImage} 
                    alt={item.name}
                    className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
                <h3 className="font-normal text-gray-900 group-hover:text-gray-600 transition-colors text-sm">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Diamonds by Shape */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>Shop Diamonds by Shape</h2>
              <div className="bg-white rounded-lg p-8">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-8">
                  <img 
                    src="https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=200" 
                    alt="Diamond Ring"
                    className="w-32 h-32 object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-5 gap-6">
              {[
                'Oval', 'Round', 'Emerald', 'Marquise', 'Radiant',
                'Pear', 'Elongated Cushion', 'Cushion', 'Princess', 'Asscher'
              ].map((shape, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-lg mb-3 flex items-center justify-center group-hover:shadow-xl transition-shadow">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  </div>
                  <p className="text-xs text-gray-700 group-hover:text-gray-900 transition-colors font-light">{shape}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Engagement Rings */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>Popular Engagement Rings</h2>
          <p className="text-gray-600 mb-12 font-light">Artistry and craftsmanship in every detail.</p>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { name: 'Solitaire Rings', image: 'https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { name: 'Nature Inspired Rings', image: 'https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { name: 'Three Stone Rings', image: 'https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { name: 'Bridal Sets', image: 'https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=400' }
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="h-64 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-normal text-gray-900 group-hover:text-gray-600 transition-colors">{item.name}</h3>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-sage-50 rounded-lg p-8">
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>Our Must-Have Rings</h3>
              <div className="h-48 bg-sage-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Must-Have Rings"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-sage-100 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Featured Ring"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 20 Years of Yes */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-12 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>20 Years of Yes</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Signature Collections */}
            <div className="relative h-96 bg-gradient-to-br from-emerald-900 to-teal-900 rounded-lg overflow-hidden text-white">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-light mb-2 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>Signature Collections</h3>
                <p className="text-sm mb-6 opacity-90 font-light">The smallest details make the biggest impact.</p>
                <button className="border border-white px-6 py-2 text-sm font-normal tracking-wide hover:bg-white hover:text-gray-900 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
            
            {/* Pacific Green Lab Diamonds */}
            <div className="relative h-96 bg-gradient-to-br from-sage-200 to-sage-300 rounded-lg overflow-hidden text-gray-900">
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-light mb-2 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>Pacific Green Lab Diamonds</h3>
                <p className="text-sm mb-6 font-light">A new and exclusive color.</p>
                <button className="border border-gray-600 px-6 py-2 text-sm font-normal tracking-wide hover:bg-gray-900 hover:text-white transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
            
            {/* 20th Anniversary Collection */}
            <div className="relative h-96 bg-gradient-to-br from-teal-800 to-emerald-800 rounded-lg overflow-hidden text-white">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-light mb-2 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>20th Anniversary Collection</h3>
                <p className="text-sm mb-6 opacity-90 font-light">Celebrating two decades of design excellence.</p>
                <button className="border border-white px-6 py-2 text-sm font-normal tracking-wide hover:bg-white hover:text-gray-900 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We're Here for You */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Jewelry Store Interior"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>We're Here for You, In Person and Online</h2>
              <p className="text-gray-700 mb-8 font-light">Whether it's at a store near you or online, we curate your appointment just for you.</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="border border-gray-900 px-8 py-3 text-gray-900 font-normal tracking-wide hover:bg-gray-900 hover:text-white transition-colors">
                  Visit a Showroom
                </button>
                <button className="border border-gray-900 px-8 py-3 text-gray-900 font-normal tracking-wide hover:bg-gray-900 hover:text-white transition-colors">
                  Book a Virtual Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We've Got You Covered */}
      <section className="py-16 px-4 bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-12 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>We've Got You Covered</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 border-2 border-white rounded-full flex items-center justify-center">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-normal tracking-wide mb-2">FREE SHIPPING & RETURNS</h3>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 border-2 border-white rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-normal tracking-wide mb-2">FREE LIFETIME WARRANTY</h3>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 border-2 border-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-normal tracking-wide mb-2">24/7 CUSTOMER SUPPORT</h3>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 border-2 border-white rounded-full flex items-center justify-center">
                <Diamond className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-normal tracking-wide mb-2">LIFETIME DIAMOND UPGRADE</h3>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 border-2 border-white rounded-full flex items-center justify-center">
                <RotateCcw className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-normal tracking-wide mb-2">FREE 60-DAY RESIZING</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Happy Woman"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4 font-light tracking-wide">20 YEARS OF OUR MISSION</p>
              <p className="text-lg text-gray-800 mb-8 font-light leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                From our pioneering diamond standards to our unmatched transparency, we're redefining what it means to design, craft, and experience jewelry that makes a real difference.
              </p>
              <button className="text-gray-800 font-normal tracking-wide hover:text-gray-600 transition-colors border-b border-gray-800 hover:border-gray-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Get Inspired */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-light text-gray-900 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>Get Inspired</h2>
            <button className="text-gray-800 font-normal tracking-wide hover:text-gray-600 transition-colors border-b border-gray-800 hover:border-gray-600">
              Shop Instagram
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { image: 'https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop', hasVideo: false },
              { image: 'https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop', hasVideo: true },
              { image: 'https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop', hasVideo: true },
              { image: 'https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop', hasVideo: false, hasShopNow: true },
              { image: 'https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop', hasVideo: true },
              { image: 'https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop', hasVideo: true }
            ].map((item, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {item.hasVideo && (
                  <div className="absolute top-2 right-2">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                )}
                {item.hasShopNow && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                    <button className="bg-white text-gray-900 px-4 py-2 text-sm font-normal tracking-wide hover:bg-gray-100 transition-colors">
                      Shop Now
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <h3 className="text-sm font-normal text-gray-900 mb-4 tracking-wide">ABOUT</h3>
              <ul className="space-y-3 text-sm text-gray-600 font-light">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Our Mission</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Responsible Sourcing</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Sustainability Goals</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">How We Give Back</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Our People</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Brilliant Earth Reviews</a></li>
              </ul>
              
              <h3 className="text-sm font-normal text-gray-900 mb-4 mt-8 tracking-wide">EDUCATION</h3>
              <ul className="space-y-3 text-sm text-gray-600 font-light">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">4 C's of Diamond Guide</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Lab Grown Diamond Guide</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Moissanite vs. Diamond Guide</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Free Ring Sizer + Ring Size Chart</a></li>
              </ul>
            </div>

            {/* Orders */}
            <div>
              <h3 className="text-sm font-normal text-gray-900 mb-4 tracking-wide">ORDERS</h3>
              <ul className="space-y-3 text-sm text-gray-600 font-light">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Track Your Order</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Free 30 Day Returns</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Free Shipping Both Ways</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Free Lifetime Warranty</a></li>
              </ul>
              
              <h3 className="text-sm font-normal text-gray-900 mb-4 mt-8 tracking-wide">CUSTOMER SERVICE</h3>
              <ul className="space-y-3 text-sm text-gray-600 font-light">
                <li><a href="#" className="hover:text-gray-900 transition-colors">We've Got You Covered</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Lifetime Diamond Upgrade</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Promo Codes & Offers</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Refer a Friend</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Accessibility</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-sm font-normal text-gray-900 mb-4 tracking-wide">CONTACT US</h3>
              <ul className="space-y-3 text-sm text-gray-600 font-light">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Live Chat</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Book Appointment</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Stores</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Email Us</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">1.415.426.2781</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Affiliates</a></li>
              </ul>
            </div>

            {/* Sign Up */}
            <div>
              <h3 className="text-sm font-normal text-gray-900 mb-4 tracking-wide">SIGN UP</h3>
              <p className="text-sm text-gray-600 mb-4 font-light">Email me updates and offers</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your Email Address"
                  className="flex-1 px-4 py-2 border border-gray-300 text-sm font-light focus:outline-none focus:border-gray-500"
                />
                <button className="bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;