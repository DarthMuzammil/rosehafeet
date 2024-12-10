import { Phone } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

export default function AddressCards({card}) {
  return (
    <Card className="w-full max-w-xl bg-white shadow-lg">
      <CardContent className="flex items-center gap-6 p-6">
        <div className="rounded-full">
            <Image src={card.icon} width={40} height={59} alt={card.id} />
        </div>
        <div className="space-y-1">
          <h3 className="text-2xl font-medium text-[#236B73]">{card.id}</h3>
          <p className="text-xl text-[#236B73]">
            {
                card.id === "hours" ?
                card.value[0] : card.value
            }
          </p>
        </div>
      </CardContent>
    </Card>
  )
}