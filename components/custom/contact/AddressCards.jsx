
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
export default function AddressCards({ card }) {
  return (
    <Card className="w-full max-w-xl bg-white shadow-lg">
      <CardContent className="flex items-center gap-6 p-6">
        <div className="rounded-full">
          <Image src={card.icon} width={40} height={59} alt={card.id} />
        </div>
        <div className="space-y-0">
          <p
            className={
              "text-2xl text-start  font-normal bg-gradient-to-t from-[#2A3676] to-[#00A445] bg-clip-text text-transparent"
            }
          >
            {card.id}
          </p>
          <p className="text-xl lg:text-sm text-[#236B73]">
            {card.id === "hours" ? card.value[0] : card.value}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
