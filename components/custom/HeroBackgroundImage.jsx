"use client"

export default function HeroBackgroundImage({isTransitioning, images, currentImageIndex}) {
    return (
        <div
        className={`fixed inset-0 w-full h-full transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
    )
}