// src/components/home/HomeSectionWrapper.jsx

import Button from "../UI/Button";
import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../layout/SectionHeading";

export default function HomeSectionWrapper({
  id,
  eyebrow,
  title,
  description,
  children,
  link,
  className = "",
  contentClassName = "",
  align = "left",
}) {
  return (
    <Section
      id={id}
      labelledBy={title ? `${id}-title` : undefined}
      className={`bg-[#222222] text-gray-200 scroll-mt-14 sm:scroll-mt-16 lg:scroll-mt-20 ${className}`}
    >
      <SectionWrapper>
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
          {title && (
            <SectionHeading
              id={`${id}-title`}
              eyebrow={eyebrow}
              title={title}
              description={description}
              align={align}
            />
          )}

          <div className={`flex flex-col gap-6 sm:gap-8 ${contentClassName}`}>
            {children}
          </div>

          {link && (
            <div className="flex justify-center">
              <Button href={link.href}>
                {link.text}
              </Button>
            </div>
          )}
        </div>
      </SectionWrapper>
    </Section>
  );
}