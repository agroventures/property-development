import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import {
  MapPin,
  CheckCircle,
  Phone,
  CreditCard
} from "lucide-react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import PropertyTabs from "../components/PropertyDetails.jsx/PropertyTabs";
import { properties } from "../data/properties";
import PropertyGallery from "../components/PropertyDetails.jsx/PropertyGallery";
import toast from "react-hot-toast";

const PropertyDetails = () => {
  const slug = window.location.pathname.split("/").pop();
  const property = properties.find((p) => p.slug === slug);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) newErrors.phone = 'Invalid phone number';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            phone: formData.phone,
            message: formData.message,
            property: property.title
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        toast.success('Inquiry sent successfully!');
        setFormData({ name: '', phone: '', message: '' });
      } catch (error) {
        toast.error('Failed to send inquiry. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-main text-text-primary">
        Property not found
      </div>
    );
  }

  return (
    <div className="bg-bg-main min-h-screen font-sans text-text-primary">
      <Header />

      {/* ───────── HERO SECTION ───────── */}
      <div className="relative h-130 w-full overflow-hidden">
        <img
          src={property.logo}
          alt={property.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black-900/70 flex flex-col justify-end px-8 md:px-24 pb-12">
          <span className="bg-gradient-gold text-black-900 px-4 py-1 rounded-full w-fit text-sm font-bold mb-6 uppercase tracking-widest shadow-gold">
            {property.type}
          </span>

          <h1 className="text-4xl md:text-6xl font-display font-bold text-ivory-50 mb-4">
            {property.title}
          </h1>

          <p className="text-lg text-ivory-300 flex items-center gap-2">
            <MapPin className="text-gold-400" /> {property.location}
          </p>
        </div>
      </div>

      {/* ───────── MAIN CONTENT ───────── */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-16">
          {/* DESCRIPTION */}
          <section>
            <h2 className="text-3xl font-display font-bold text-black-800 mb-8 border-l-4 border-gold-500 pl-4">
              The Future of Luxury Living
            </h2>

            <div className="text-text-secondary leading-relaxed space-y-6 text-lg">
              <p>{property.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                {property.features.map((item, i) => (
                  <div
                    key={i}
                    className="bg-ivory-50 p-6 rounded-xl shadow-gold border border-border-muted/60"
                  >
                    <p className="text-sm text-text-secondary">
                      {item.label}
                    </p>
                    <p className="font-bold text-black-800 mt-1">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FACILITIES */}
          <section>
            <h3 className="text-2xl font-display font-bold text-black-800 mb-10">
              Facilities Available
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {property.facilities.map((f, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center p-6 bg-ivory-50 rounded-2xl shadow-gold border border-border-muted/60 text-center hover:shadow-gold-lg transition-all duration-300"
                >
                  <div className="text-gold-600 mb-4 bg-gold-50 p-4 rounded-full border border-gold-200">
                    {f.icon}
                  </div>
                  <span className="font-medium text-black-800 text-sm">
                    {f.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* PAYMENT DETAILS */}
          <section className="bg-gold-500 text-text-inverse p-10 rounded-3xl shadow-gold-lg">
            <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
              <CreditCard className="text-gold-400" />
              Payment Details
            </h3>

            <ul className="space-y-5">
              {[
                "Reserve your plot by paying Rs. 250,000/-",
                "Pay 30% of the initial payment within 14 days.",
                "Special discount available if full balance paid within a month.",
                "Interest-free payment plans up to 12 months.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle className="text-gold-400 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-6 border-t border-gold-950/60">
              <p className="text-ivory-300 italic">
                We also assist in arranging bank loan facilities for a hassle-free process.
              </p>
            </div>
          </section>

          <PropertyTabs property={property} />

          {property.images && property.images.length > 0 && <PropertyGallery images={property.images} />}
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:col-span-1">
          <div className="bg-ivory-50 p-8 rounded-3xl shadow-gold-lg border border-border-muted/60 sticky top-24">
            <h3 className="text-xl font-display font-bold text-black-800 mb-8">
              Inquire About This Land
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-black-800 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-ivory-100 border border-border-muted focus:ring-2 focus:ring-gold-500 outline-none"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-black-800 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-ivory-100 border border-border-muted focus:ring-2 focus:ring-gold-500 outline-none"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-black-800 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-ivory-100 border border-border-muted focus:ring-2 focus:ring-gold-500 outline-none"
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-gold text-black-900 font-bold py-4 rounded-xl shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'SENDING...' : 'SEND INQUIRY'}
              </button>
            </form>

            <div className="mt-10 pt-6 border-t border-border-muted text-center">
              <p className="text-text-secondary text-sm mb-3">
                Need immediate help?
              </p>
              <a
                href={`tel:${property.phone}`}
                className="text-2xl font-display font-bold text-black-800 flex items-center justify-center gap-3 hover:text-gold-600 transition-colors"
              >
                <Phone className="text-gold-500" size={20} />
                {property.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetails;