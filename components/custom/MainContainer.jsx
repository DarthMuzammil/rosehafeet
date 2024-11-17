'use client'

export default function MainContainer({children, className="relative min-h-screen flex items-center justify-center"}) {
  return (
      <main className={className}>
        {children}
      </main>

  );
}