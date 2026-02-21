import Hero from "../common/Hero";

const HomeHero = () => {
  return (
    <Hero
      page="home"
      pageTitle="Home"
      // img="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1117&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1920&h=1080&fit=crop"
      img="/images/hero/landing.png"
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