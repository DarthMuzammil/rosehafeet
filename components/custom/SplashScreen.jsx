"use client";

export default function SplashScreen({ loading }) {
  return (
    loading && (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-48 h-48 mx-auto mb-8 animate-pulse">
            <Image
              src="/image.jpg"
              alt="Rose Hafeet Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="h-2 w-24 bg-gray-200 rounded animate-pulse mx-auto" />
        </div>
      </div>
    )
  );
}
