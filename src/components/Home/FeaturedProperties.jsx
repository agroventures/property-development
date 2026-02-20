import SectionTitle from '../common/SectionTitle';
import PropertyCard from '../common/PropertyCard';
import { useNavigate } from 'react-router-dom';
import { properties } from '../../data/properties';

const FeaturedProperties = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTitle title="Our Properties" />
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Expertise in Every <span className="text-gold-500">Dimension</span>
          </h2>
          <p className="text-text-secondary text-lg">
            From scenic residential plots to contemporary housing developments
            and boutique nature resorts — our work embodies the seamless blend of
            luxury and sustainability.
          </p>
        </div>

        {/* Service Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Land Development', 'Residential Construction', 'Eco-Tourism Projects'].map(
            (category, index) => (
              <div
                key={index}
                className="bg-gold-500/10 border border-gold-500/30 rounded-full px-6 py-3 text-gold-600 font-semibold hover:bg-gold-500 hover:text-black-900 cursor-pointer transition-all duration-300"
              >
                {category}
              </div>
            )
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] justify-items-center gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button onClick={() => navigate('/properties')} className="bg-gradient-gold text-black-900 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-gold-lg transition-all duration-300 hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;