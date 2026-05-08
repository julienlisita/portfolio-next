// src/components/UI/SectionTitle.jsx

export default function SectionTitle({ className, children,id }) {
    return (
      <h2 
        id={id}
        className={`${className}
        mt-8 sm:mt-10 lg:mt-12
        text-xl sm:text-2xl lg:text-3xl 
        font-heading font-semibold text-gray-100
        text-center scroll-mt-18 sm:scroll-mt-18 lg:scroll-mt-24`}
      >
        {children}
      </h2>
    );
  }