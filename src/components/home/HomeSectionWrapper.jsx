// src/components/home/HomeSection.jsx

import Button from "../UI/Button";
import SectionTitle from "../UI/SectionTitle";

export default function HomeSectionWrapper({ id, title, children, link, className }) {
    return (
      <section id={id} className="bg-[#222222] text-gray-200 scroll-mt-14 sm:scroll-mt-16 lg:scroll-mt-20">
        <div className="
          flex flex-col items-center 
          gap-6 m:gap-8 lg:gap-12
          px-4 sm:px-8 lg:px-24 xl:px-32">
          {/* Titre */}
          <SectionTitle>{title}</SectionTitle>
  
          {/* Contenu principal */}
          {children}
  
          {/* Lien */}
          {link && (
            <div className="flex justify-center items-center">
              <Button to={link.href}>{link.text}</Button>
            </div>
          )}
        </div>
      </section>
    );
  }