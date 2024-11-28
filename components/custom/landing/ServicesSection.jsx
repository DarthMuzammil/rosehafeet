"use client";
import { motion } from "framer-motion";


export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-serif text-center mb-12"
      >
        Our Bespoke Services
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Aromatherapy Massage",
            description: "Relax with essential oils",
          },
          {
            title: "Hot Stone Therapy",
            description: "Melt away tension",
          },
          {
            title: "Facial Treatments",
            description: "Revitalize your skin",
          },
          { title: "Body Wraps", description: "Detoxify and nourish" },
          {
            title: "Manicure & Pedicure",
            description: "Pamper your hands and feet",
          },
          {
            title: "Couples Retreat",
            description: "Share the relaxation",
          },
        ].map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
}
