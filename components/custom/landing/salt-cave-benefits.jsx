import { Card, CardContent } from "@/components/ui/card"

export default function SaltCaveBenefits() {
  const benefits = [
    {
      title: "Respiratory Relief",
      description: "Alleviates symptoms of asthma, allergies, sinusitis, and other respiratory conditions"
    },
    {
      title: "Stress Reduction",
      description: "Promotes relaxation, reduces anxiety, and improves sleep quality."
    },
    {
      title: "Skin Rejuvenation",
      description: "Helps with skin conditions like eczema, psoriasis, and acne by detoxifying cleansing."
    },
    {
      title: "Immune Boost",
      description: "Strengthens the body's defense mechanism through ion-rich air."
    },
    {
      title: "Energy Enhancement",
      description: "Recharges your mind and body, promoting a sense of balance vitality."
    }
  ]

  return (
    (<div
      className="min-h-screen p-8 md:p-12"
      style={{
        backgroundImage: `url('/placeholder.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-center text-3xl md:text-4xl font-bold text-teal-800 mb-12">
          Benefits of Salt Cave Therapy
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Top row */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <h2 className="font-semibold text-xl mb-2">{benefits[0].title}</h2>
              <p className="text-gray-600">{benefits[0].description}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <h2 className="font-semibold text-xl mb-2">{benefits[1].title}</h2>
              <p className="text-gray-600">{benefits[1].description}</p>
            </CardContent>
          </Card>
          
          <Card
            className="bg-white shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
            <CardContent className="p-6">
              <h2 className="font-semibold text-xl mb-2">{benefits[2].title}</h2>
              <p className="text-gray-600">{benefits[2].description}</p>
            </CardContent>
          </Card>
          
          {/* Bottom row - centered */}
          <div className="md:col-span-2 grid md:grid-cols-2 gap-6 md:px-24">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h2 className="font-semibold text-xl mb-2">{benefits[3].title}</h2>
                <p className="text-gray-600">{benefits[3].description}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h2 className="font-semibold text-xl mb-2">{benefits[4].title}</h2>
                <p className="text-gray-600">{benefits[4].description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>)
  );
}

