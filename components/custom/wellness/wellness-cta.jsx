export default function WellnessCTA() {
    return (
      <section className="py-8 sm:py-12 md:py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Book your session now and experience the ultimate in relaxation and rejuvenation.
          </p>
          <div className="mt-6 sm:mt-8 md:mt-10">
            <a
              href="#book"
              className="inline-block px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium text-white rounded-full bg-gradient-to-r from-blue-800 to-green-600 hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl h-[50px] w-[250px]"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
    )
  }
  
  