import { PortfolioHome } from "@/components/portfolio-home";
import { profile } from "@/data/portfolio";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Data Analytics and Operations Professional; Performance and Data Analyst",
    email: profile.email,
    alumniOf: [
      { "@type": "EducationalOrganization", name: "University of East London" },
      { "@type": "EducationalOrganization", name: "Global Institute of Management Sciences" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
    },
    knowsAbout: [
      "Data analytics",
      "Operations analytics",
      "Continuous improvement",
      "Sports performance analytics",
      "Shito-Ryu Karate",
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <PortfolioHome />
    </>
  );
}
