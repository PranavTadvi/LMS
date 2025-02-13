import React from "react";
import Hero from "../../components/student/Hero";
import Companies from "../../components/student/Companies";
import CourcesSection from "../../components/student/CourcesSection";
import TestimonialsSection from "../../components/student/TestimonialsSection";
function Home() {
  return (
    <div className="flex flex-col items-center space-y-7 text-center">
      <Hero />
      <Companies />
      <CourcesSection />
      <TestimonialsSection />
    </div>
  );
}

export default Home;
