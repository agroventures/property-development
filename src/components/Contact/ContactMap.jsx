import React from 'react'
import { Navigation, Phone, Clock } from 'lucide-react'

const ContactMap = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                        Find Us
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                        Our Main Office
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Visit our headquarters in the heart of Manhattan
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Map */}
                    <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-xl h-100 lg:h-125">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8428106903543!2d79.85783397581787!3d6.909391418557026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259f84c7e64b3%3A0x969f0df303642a7e!2sAgro%20Ventures%20Exports%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1768381873661!5m2!1sen!2slk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Office Location"
                        ></iframe>
                    </div>

                    {/* Info Card */}
                    <div className="bg-white rounded-3xl shadow-xl p-8">
                        <div className="space-y-8">
                            {/* Address */}
                            <div>
                                <div className="w-12 h-12 bg-bg-main rounded-xl flex items-center justify-center mb-4">
                                    <Navigation className="w-6 h-6 text-text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Head Office</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    No 48, Sir Marcus Fernando Mawathe<br />
                                    Colombo 07
                                </p>
                            </div>

                            {/* Phone */}
                            <div>
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                                    <Phone className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Contact</h3>
                                <p className="text-gray-600">
                                    Phone: +94 77 064 7916<br />
                                </p>
                            </div>

                            {/* Hours */}
                            <div>
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                    <Clock className="w-6 h-6 text-orange-600" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Business Hours</h3>
                                <div className="text-gray-600 space-y-1">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday:</span>
                                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday:</span>
                                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMap