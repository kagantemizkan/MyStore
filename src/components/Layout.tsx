import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 flex-1">{children}</main>
      <Footer />
    </div>
  );
}
