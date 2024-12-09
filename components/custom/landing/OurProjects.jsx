"use client";
import SectionHeading from "../SectionHeading";
import Services from "@/components/shared/services/Services";
import { facilities } from "@/lib/homepage/homepage";

export default function OurProjects() {
  return (
    <section className="flex flex-col items-center py-12 px-6 gap-12">
      <SectionHeading className="p-4">Our Attractions</SectionHeading>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {facilities.map((project, index) => (
          <Services
            key={index + project.heading}
            images={project.gallery}
            mainImage={project.mainImage}
            heading={project.heading}
            content={project.description}
          />
        ))}
      </div>
    </section>
  );
}