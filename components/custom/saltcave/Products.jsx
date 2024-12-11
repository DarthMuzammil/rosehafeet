"use client";

import Image from "next/image";
import Button from "../../shared/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionHeading from "../SectionHeading";
import { products } from "@/lib/saltcave/saltcave";

function ProductItem({ product }) {
  return (
    <Card
      key={product.id}
      className="bg-white w-full md:h-[520px]  md:w-[400px] rounded-lg   shadow-md overflow-hidden"
    >
      <CardHeader className="flex flex-row justify-center p-0 items-start">
        <Image
          src={product.image}
          alt={product.title}
          width={276}
          height={276}
          className="object-cover rounded-md"
        />
      </CardHeader>
      <CardContent className="pl-[36px] pt-[15px] flex flex-row">
        <div className="flex flex-col">
          <CardTitle className="text-xl font-semibold mb-1">
            {product.title}
          </CardTitle>
          <p className="text-muted-foreground">{product.subtitle}</p>
        </div>
        <p className="text-lg font-bold text-[#2B7B65] mt-2 ml-auto">{product.price}</p>
      </CardContent>
      <CardFooter className="flex flex-col justify-center w-full items-center sm:flex-row gap-3">
        <Button
          label={"Add to Cart"}
          size=" w-1/2 h-[50px] flex-1 border-[#2B7B65] text-[#2B7B65] hover:bg-[#2B7B65] hover:text-white "
          inverted
        >
          Add to Cart
        </Button>
        <Button
          label={"Buy Now"}
          isSelected
          size=" w-1/2 h-[50px] flex-1 bg-[#1B365C] hover:bg-[#152a4a] text-white "
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}
export default function ProductShowcase() {
  return (
    <section className="w-full mt-12 bg-[#F5F5F5] py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading className="p-1 text-center mb-8">
          Shop Our Products
        </SectionHeading>

        <div className="flex flex-col justify-center items-center px-2 md:grid md:place-items-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
