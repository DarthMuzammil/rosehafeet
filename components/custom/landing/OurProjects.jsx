"use client";
import SectionHeading from "../SectionHeading";
import Services from "@/components/shared/services/Services";
import { facilities } from "@/lib/homepage/homepage";

export default function OurProjects() {
  return (
    <section className="flex flex-col gap-24 items-center py-12 px-6">
      <SectionHeading className={"p-4"}>Our Attractions</SectionHeading>
      <div className="flex flex-row sm:flex-col sm:flex md:flex md:flex-row gap-2">
        {facilities.map((project, index) => {
          return <Services key={index + project.heading} images={project.gallery} mainImage={project.mainImage} heading={project.heading} content={project.description} />;
        })}
      </div>
    </section>
  );
}
