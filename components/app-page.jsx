'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Menu, X, Search, User, Calendar, Users } from 'lucide-react'
import image1 from '../assets/image.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const pools = [
  {
    name: 'VIP Pool',
    description: 'Exclusive private booking with a no disturbance policy.',
    image: image1, // Imported local image
    alt: 'Infinity pool overlooking a scenic landscape at sunset',
  },
  {
    name: "Men's Pool 1",
    description: 'Includes sports massage, Indian massage, jacuzzi, and gym access.',
    image: image2, // Imported local image
    alt: 'Luxurious outdoor pool with wooden deck and lounge chairs',
  },
  {
    name: "Men's Pool 2",
    description: 'Standard men\'s pool without additional services.',
    image: image3, // Imported local image
    alt: 'Aerial view of a swimmer in a bright blue pool',
  },
  {
    name: "Women's Pool",
    description: 'Services include Indian massage, Moroccan bath, and a dedicated ladies\' salon.',
    image: image2, // Reusing the same image if needed
    alt: 'Luxurious outdoor pool with wooden deck and lounge chairs',
  },
];


const features = [
  {
    title: '24h Customer Service',
    description: 'Always here to help: Day or night, your comfort is our priority.',
    icon: User,
  },
  {
    title: 'Luxury Amenities',
    description: 'Experience the finest in resort living with our premium facilities.',
    icon: ChevronDown,
  },
  {
    title: 'Personalized Experience',
    description: 'Tailor your stay to suit your style and preferences.',
    icon: Users,
  },
  {
    title: 'Best Price Guarantee',
    description: 'Enjoy the best rates for an unforgettable luxury experience.',
    icon: Calendar,
  },
]

export function BlockPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    (<div className="min-h-screen bg-gray-900 text-white">
      <header className="absolute w-full z-10">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif">
            Rosehafeet Resort
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-teal-300 transition duration-300">Home</Link></li>
              <li><Link href="/pools" className="hover:text-teal-300 transition duration-300">Pools</Link></li>
              <li><Link href="/salt-cave" className="hover:text-teal-300 transition duration-300">Salt Cave</Link></li>
              <li><Link href="/game-area" className="hover:text-teal-300 transition duration-300">Game Area</Link></li>
            </ul>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed inset-0 bg-gray-900 z-20 md:hidden">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)}>
                <X />
              </button>
            </div>
            <nav className="mt-8">
              <ul className="space-y-4">
                <li><Link href="/" className="text-2xl hover:text-teal-300 transition duration-300">Home</Link></li>
                <li><Link
                  href="/pools"
                  className="text-2xl hover:text-teal-300 transition duration-300">Pools</Link></li>
                <li><Link
                  href="/salt-cave"
                  className="text-2xl hover:text-teal-300 transition duration-300">Salt Cave</Link></li>
                <li><Link
                  href="/game-area"
                  className="text-2xl hover:text-teal-300 transition duration-300">Game Area</Link></li>
              </ul>
            </nav>
          </div>
        </motion.div>
      )}
      <main>
        <section className="relative h-screen flex items-center justify-center">
          <Image
            src="/../assets/image.jpg"
            alt="Luxurious resort landscape"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
            priority />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-serif mb-4">
              Where do you want to relax?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8">
              Enhance your journey with luxurious experiences at Rosehafeet Resort
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center">
              <div className="bg-white rounded-full p-1 flex items-center">
                <div className="flex items-center border-r border-gray-300 px-4 py-2">
                  <Users className="text-gray-400 mr-2" />
                  <select className="bg-transparent text-gray-700 focus:outline-none">
                    <option>2 Adults</option>
                    <option>1 Adult</option>
                    <option>3 Adults</option>
                    <option>4 Adults</option>
                  </select>
                </div>
                <div className="flex items-center border-r border-gray-300 px-4 py-2">
                  <Calendar className="text-gray-400 mr-2" />
                  <input
                    type="date"
                    className="bg-transparent text-gray-700 focus:outline-none"
                    placeholder="Check-in" />
                </div>
                <div className="flex items-center px-4 py-2">
                  <Search className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    className="bg-transparent text-gray-700 focus:outline-none"
                    placeholder="Search pools, activities..." />
                </div>
                <button
                  className="bg-teal-500 text-white rounded-full px-6 py-2 hover:bg-teal-600 transition duration-300">
                  Search
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif mb-8 text-center">Our Luxurious Pools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pools.map((pool, index) => (
                <motion.div
                  key={pool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={pool.image}
                    alt={pool.alt}
                    width={800}
                    height={600}
                    className="w-full h-80 object-cover rounded-t-lg" />
                  <div className="p-6">
                    <h3 className="text-2xl font-serif mb-2">{pool.name}</h3>
                    <p className="text-gray-300 mb-4">{pool.description}</p>
                    <Link
                      href={`/pools/${pool.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-block bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-300">
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif mb-8 text-center">Why Choose Rosehafeet Resort</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center">
                  <feature.icon className="mx-auto h-12 w-12 text-teal-500 mb-4" />
                  <h3 className="text-xl font-serif mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <h3 className="text-2xl font-serif mb-2">Rosehafeet Resort</h3>
              <p className="text-gray-400">Luxury and tranquility await you</p>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li><Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition duration-300">About</Link></li>
                <li><Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition duration-300">Contact</Link></li>
                <li><Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition duration-300">Terms</Link></li>
                <li><Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition duration-300">Privacy</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>)
  );
}