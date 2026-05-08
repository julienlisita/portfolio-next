// src/components/layout/Section.jsx

import SectionTitle from "../UI/SectionTitle";

export default function Section({ id, title, children, className }) {
return (
  <section>
        {title && <SectionTitle id={id}>{title}</SectionTitle>}
        <div className={`mt-8 sm:mt-10 lg:mt-12 ${className}`}>
            {children}
        </div>
    </section>
  );
}