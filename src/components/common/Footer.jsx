import { navLinks } from "../../data/content";
import { properties } from "../../data/properties";

const Footer = () => {
  return (
    <footer className="bg-black-900 border-t border-gold-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/75 p-2 rounded-2xl">
                  <img src="/logo.png" alt="Logo" className="h-10" />
                </div>
              </div>
              <p className="text-ivory-400 text-sm leading-relaxed mb-6">
                Building legacies and creating sustainable futures across Sri
                Lanka's most promising regions.
              </p>
              <p className="text-gold-500 text-sm">
                A subsidiary of Agroventures Plantations (Pvt) Ltd
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg font-semibold text-text-inverse mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map(
                  (link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        className="text-ivory-400 hover:text-gold-500 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Projects */}
            <div>
              <h4 className="font-display text-lg font-semibold text-text-inverse mb-6">
                Featured Projects
              </h4>
              <ul className="space-y-3">
                {properties.map((link, index) => (
                  <li key={index}>
                    <a
                      href={`/properties/${link.slug}`}
                      className="text-ivory-400 hover:text-gold-500 transition-colors text-sm"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-display text-lg font-semibold text-text-inverse mb-6">
                Stay Updated
              </h4>
              <p className="text-ivory-400 text-sm mb-4">
                Subscribe to our newsletter for the latest projects and investment
                opportunities.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-black-800 border border-gold-500/20 rounded-full px-4 py-3 text-sm text-text-inverse placeholder:text-ivory-400 focus:outline-none focus:border-gold-500 transition-colors"
                />
                <button className="bg-gold-500 text-black-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-gold-400 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-gold-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-ivory-400 text-sm">
              © {new Date().getFullYear()} Agroventures Property Development (Pvt) Ltd. All rights reserved. Developed by{" "}
            <a
              href="https://ventrax.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold-500 hover:text-gold-300 transition-colors"
            >
              Ventrax.lk
            </a>
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-ivory-400 hover:text-gold-500 transition-colors text-sm"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;