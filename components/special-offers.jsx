"'use client'";
import { useState } from "react"
import { motion } from "framer-motion"
import { CalendarDays, Droplet, Dumbbell, Mountain, Sparkles, ArrowRight, Phone } from "'lucide-react'"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export function SpecialOffersComponent() {
  return (
    (<div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image3.jpg-OTuJ6ZTO4yZBqYUQCQ66qIqPT3suBX.jpeg"
          alt="Luxury infinity pool with mountain view"
          fill
          className="object-cover" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl font-bold mb-6">
                Exclusive Offers & Subscriptions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl mb-8">
                Indulge in luxury and wellness with our limited-time offers
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="subscriptions" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="subscriptions" className="text-lg py-4">
              <CalendarDays className="mr-2 h-5 w-5" />
              Monthly Subscriptions
            </TabsTrigger>
            <TabsTrigger value="packages" className="text-lg py-4">
              <Sparkles className="mr-2 h-5 w-5" />
              Special Packages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="subscriptions">
            <div className="grid md:grid-cols-3 gap-8">
              <SubscriptionCard
                title="Swimming in Hot Sulfur Water"
                price={385}
                icon={<Droplet className="h-6 w-6" />} />
              <SubscriptionCard
                title="Cold Water Diving (Sw. pool jacuzzi)"
                price={385}
                icon={<Droplet className="h-6 w-6" />} />
              <SubscriptionCard title="Gym" price={100} icon={<Dumbbell className="h-6 w-6" />} />
              <SubscriptionCard
                title="4 Salt Cave Sessions"
                price={480}
                icon={<Mountain className="h-6 w-6" />} />
              <SubscriptionCard
                title="6 Salt Cave Sessions"
                price={675}
                icon={<Mountain className="h-6 w-6" />} />
              <SubscriptionCard
                title="12 Salt Cave Sessions"
                price={1260}
                icon={<Mountain className="h-6 w-6" />} />
              <SubscriptionCard
                title="16 Salt Cave Sessions"
                price={1560}
                icon={<Mountain className="h-6 w-6" />} />
            </div>
          </TabsContent>

          <TabsContent value="packages">
            <div className="grid md:grid-cols-2 gap-8">
              <PackageCard
                title="Rose Package for Women"
                description="Sulfur water session package with mud and salt cave"
                price={250}
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.jpg-6bFS4o6HLbINz8NiSElHS85BBfWXwn.jpeg" />
              <PackageCard
                title="Rose Package for Men"
                description="Sulfur Water with Moroccan Bath and Salt Cave"
                price={250}
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image2.jpg-AZDIBPXS41XXlW29gOgfHOw09bCdjf.jpeg" />
              <PackageCard
                title="Daily Rose Bouquet"
                description="Salt cave, Sulfur Water, Massage, Mini train or jacuzzi"
                price={175}
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image3.jpg-OTuJ6ZTO4yZBqYUQCQ66qIqPT3suBX.jpeg" />
              <PackageCard
                title="Special Package"
                description="Sulfur water + hair dryer"
                price={50}
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.jpg-6bFS4o6HLbINz8NiSElHS85BBfWXwn.jpeg" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>)
  );
}

function SubscriptionCard({
  title,
  price,
  icon
}) {
  return (
    (<motion.div {...fadeInUp}>
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>{title}</span>
            {icon}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-3xl font-bold text-blue-600">{price} AED</p>
          <p className="text-sm text-gray-500 mt-2">per month</p>
        </CardContent>
        <CardFooter>
          <BookingDialog title={title} price={price} />
        </CardFooter>
      </Card>
    </motion.div>)
  );
}

function PackageCard({
  title,
  description,
  price,
  image
}) {
  return (
    (<motion.div {...fadeInUp}>
      <Card className="overflow-hidden">
        <div className="relative h-48">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-3xl font-bold text-blue-600">{price} AED</p>
        </CardContent>
        <CardFooter>
          <BookingDialog title={title} price={price} />
        </CardFooter>
      </Card>
    </motion.div>)
  );
}

function BookingDialog({
  title,
  price
}) {
  const [selectedDate, setSelectedDate] = useState()

  return (
    (<Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">
          Book Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book {title}</DialogTitle>
        </DialogHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Phone Number
            </Label>
            <div className="flex">
              <span
                className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-neutral-200 border-r-0 border-gray-300 rounded-l-md dark:border-neutral-800">
                +971
              </span>
              <Input
                id="phone"
                type="tel"
                placeholder="5x xxx xxxx"
                className="rounded-l-none" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Start Date</Label>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-2xl font-bold text-blue-600">{price} AED</span>
          </div>
          <Button className="w-full" size="lg">
            Confirm Booking
            <Sparkles className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </DialogContent>
    </Dialog>)
  );
}