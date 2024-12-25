"use client";
import SectionHeading from "../SectionHeading";
import Services from "@/components/shared/services/Services";

export default function OurProjects({facilities}) {
  return (
    <section className="flex flex-col items-center py-12 md:px-0  xl:px-10 gap-12">
      <SectionHeading className="p-4">Our Attractions</SectionHeading>
      <div className="w-11/12 md:grid p-6 md:p-0 gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {facilities.map((project, index) => (
          <Services
            key={index + project.heading}
            images={project.gallery}
            href={project.href}
            mainImage={project.mainImage}
            heading={project.heading}
            content={project.description}
          />
        ))}
      </div>
    </section>
  );
}