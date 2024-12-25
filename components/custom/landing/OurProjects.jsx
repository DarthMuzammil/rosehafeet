"use client";
import SectionHeading from "../SectionHeading";
import Services from "@/components/shared/services/Services";

export default function OurProjects({facilities}) {
  return (
    <section className="flex justify-center flex-col items-center py-12 gap-12 md:px-0  xl:px-10 ">
      <SectionHeading className="p-4">Our Attractions</SectionHeading>
      <div className="w-11/12 p-6 gap-12 sm:grid-cols-1 md:p-0 md:grid md:grid-cols-2 lg:grid-cols-3">
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