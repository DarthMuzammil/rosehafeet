import CardStack from "./card-stack"

export default function Home() {
  const cards = [
    { id: "1", content: <h2 className="text-2xl font-bold text-blue-600">Card 1</h2> },
    { id: "2", content: <h2 className="text-2xl font-bold text-green-600">Card 2</h2> },
    { id: "3", content: <h2 className="text-2xl font-bold text-red-600">Card 3</h2> },
  ]

  return (
    (<div className="flex items-center justify-center min-h-screen bg-gray-100">
      <CardStack cards={cards} />
    </div>)
  );
}

