import Hero from "../common/Hero";

const HomeHero = () => {
  return (
    <Hero
      page="home"
      pageTitle="Home"
      img="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop"
      imgAlt="Luxury home"
      badgeText="Welcome to AV Properties"
      title="Discover Your"
      highlightedText="Dream Home"
      description="Experience luxury living with Prestige Realty. We connect you with
                  exceptional properties that match your lifestyle, aspirations, and
                  investment goals."
    />
  );
};

export default HomeHero;