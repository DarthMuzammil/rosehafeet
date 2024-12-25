"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Baby, User, Users, Home } from "lucide-react"

export default function Pricing() {
  const individualSessions = [
    {
      icon: <Baby className="w-6 h-6" />,
      title: "Child Session",
      price: 125,
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "A Adult Session",
      price: 150,
    },
    {
      icon: <Users className="w-6 h-6 scale-75" />,
      title: "Adult + Child Session",
      price: 250,
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Adult + 2 Children",
      price: 350,
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Family Session (2 People + 2 Children)",
      price: 500,
    },
  ]

  return (
    (<div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-semibold text-center text-[#2A3676] mb-2">أسعارنا</h1>
      <p className="text-center text-gray-600 mb-8">
        اختر الباقة المثالية للرحلتك العافية
      </p>
      <Tabs defaultValue="individual" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger
            value="individual"
            className="data-[state=active]:bg-[#2A3676] data-[state=active]:text-white">
            جلسات فردية
          </TabsTrigger>
          <TabsTrigger
            value="three"
            className="data-[state=active]:bg-[#2A3676] data-[state=active]:text-white">
            باقة 3 جلسات
          </TabsTrigger>
          <TabsTrigger
            value="six"
            className="data-[state=active]:bg-[#2A3676] data-[state=active]:text-white">
            باقة 6 جلسات
          </TabsTrigger>
        </TabsList>

        <TabsContent value="individual">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-center mb-6">جلسات فردية</h2>
              <div className="space-y-4">
                {individualSessions.map((session, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full bg-[#2A3676] text-white flex items-center justify-center">
                        {session.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{session.title}</h3>
                        <p className="text-[#00A445] font-semibold">
                          {session.price} <span className="text-sm">درهم</span>
                        </p>
                      </div>
                    </div>
                    <Button
                      className="bg-gradient-to-r from-[#2A3676] to-[#00A445] hover:opacity-90 transition-opacity">
                      احجز الآن
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="three">
          <Card>
            <CardContent className="p-6">
              <div className="text-center text-gray-500">
                باقة 3 جلسات التفاصيل ستُظهر هنا 
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="six">
          <Card>
            <CardContent className="p-6">
              <div className="text-center text-gray-500">
                باقة 6 جلسات التفاصيل ستُظهر هنا 
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <p className="text-center text-sm text-gray-500 mt-8">
      الباقات المخصصة والحجوزات الجماعية متوفرة عند الطلب
      </p>
    </div>)
  );
}

