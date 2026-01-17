import { ArrowRight, Mail, MapPin, MessageCircleMore, Phone } from "lucide-react"

const ServicesCTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-black-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-600/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

          <div className="relative text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/30 rounded-full px-6 py-3 mb-8">
              <MessageCircleMore className="w-6 h-6 text-gold-600" />
              <span className="text-gold-400 font-semibold tracking-wide">
                Start Your Project
              </span>
            </div>

            <h2 className="font-display text-3xl lg:text-5xl font-bold text-text-inverse mb-6">
              Ready to Transform Your{' '}
              <span className="text-gradient">Vision into Reality?</span>
            </h2>
            <p className="text-ivory-300 text-xl leading-relaxed mb-10">
              Whether you're looking to develop land, build your dream home, or
              create an eco-tourism destination, our team is ready to bring your
              vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-gold text-black-900 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-gold-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gold-500/50 text-gold-400 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gold-500/10 transition-all duration-300">
                View Our Projects
              </button>
            </div>

            {/* Contact Options */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-gold-500/20">
              <div className="flex items-center gap-3 text-ivory-400">
                <Phone className="w-5 h-5 text-gold-500" />
                <span>+94 11 234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-ivory-400">
                <Mail className="w-5 h-5 text-gold-500" />
                <span>info@agroventures.lk</span>
              </div>
              <div className="flex items-center gap-3 text-ivory-400">
                <MapPin className="w-5 h-5 text-gold-500" />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesCTA