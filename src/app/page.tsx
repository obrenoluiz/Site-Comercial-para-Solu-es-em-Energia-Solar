import Header from "@/components/Header/page";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-3xl font-bold">Welcome to Solar Solutions</h2>
        <p className="mt-4">Discover our innovative solar products and services!</p>
      </main>
    </div>
  );
}
