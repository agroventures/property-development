import Hero from '../common/Hero';

const HomeHero = () => {
  return (
    <Hero 
      page="home"
      pageTitle="Home"
      img="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
      imgAlt="Luxury Home"
      badgeText="Premium Real Estate Agency"
      title="Discover Your"
      highlightedText="Perfect Sanctuary"
      description="Experience luxury living with our curated collection of exceptional properties. From elegant penthouses to serene countryside estates."   
    />
  );
};

export default HomeHero;