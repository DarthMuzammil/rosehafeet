import { Card, CardContent } from "@/components/ui/card"

export default function SaltCaveBenefits() {
    const benefits = [
        {
          title: "تخفيف الآلام التنفسية",
          description:
            "يخفف من أعراض الربو والحساسية والتهاب الجيوب الأنفية وأمراض الجهاز التنفسي الأخرى",
        },
        {
          title: "تخفيف التوتر",
          description:
            "يعزز الاسترخاء ويقلل من القلق ويحسن نوعية النوم.",
        },
        {
          title: "تجديد البشرة",
          description:
            "يساعد في علاج حالات الجلد مثل الأكزيما والصدفية وحب الشباب عن طريق إزالة السموم والتطهير.",
        },
        {
          title: "تعزيز المناعة",
          description:
            "يعزز آلية دفاع الجسم من خلال الهواء الغني بالأيونات.",
        },
        {
          title: "تعزيز الطاقة",
          description:
            "يعيد شحن عقلك وجسدك، ويعزز الشعور بالتوازن والحيوية.",
        },
      ];

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
          فوائد العلاج بالكهف الملح
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

