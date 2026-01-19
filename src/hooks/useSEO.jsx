import { useEffect } from "react";

const setMeta = (attr, key, content) => {
  if (!content) return;

  let meta = document.querySelector(`meta[${attr}="${key}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attr, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
};

const useSEO = ({
  // Basic
  title,
  description = "Discover premium land for sale and high-yield property investment opportunities with Agroventures Property Development. Specializing in residential plots and sustainable land projects across Sri Lanka.",
  keywords = "Agroventures Property Development, land for sale Sri Lanka, buy land Matale, residential plots Sri Lanka, property investment Sri Lanka, real estate developers Sri Lanka, land sale Kurunegala, affordable land Sri Lanka",

  // Open Graph
  locale = "en_US",
  type = "website",
  url,
  site_name = "Agro Ventures Property Development",
  image = "https://agroventurespropertydevelopment.com/logo.png",
  image_secure_url = "https://agroventurespropertydevelopment.com/logo.png",
  image_width = "1200",
  image_height = "630",
  image_alt,
  image_type = "image/png",

  // Twitter
  twitter_card = "summary_large_image",
  twitter_title,
  twitter_description,
  twitter_image,
}) => {
  useEffect(() => {
    // Title
    if (title) document.title = title;

    // Meta description
    if (description) {
      setMeta("name", "description", description);
    }

    // Meta keywords
    if (keywords) {
      setMeta("name", "keywords", keywords);
    }

    // Open Graph
    setMeta("property", "og:locale", locale);
    setMeta("property", "og:type", type);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:site_name", site_name);
    setMeta("property", "og:image", image);
    setMeta("property", "og:image:secure_url", image_secure_url || image);
    setMeta("property", "og:image:width", image_width);
    setMeta("property", "og:image:height", image_height);
    setMeta("property", "og:image:alt", image_alt);
    setMeta("property", "og:image:type", image_type);

    // Twitter
    setMeta("name", "twitter:card", twitter_card);
    setMeta("name", "twitter:title", twitter_title || title);
    setMeta("name", "twitter:description", twitter_description || description);
    setMeta("name", "twitter:image", twitter_image || image);
  }, [
    title,
    description,
    locale,
    type,
    url,
    site_name,
    image,
    image_secure_url,
    image_width,
    image_height,
    image_alt,
    image_type,
    twitter_card,
    twitter_title,
    twitter_description,
    twitter_image,
  ]);
};

export default useSEO;
