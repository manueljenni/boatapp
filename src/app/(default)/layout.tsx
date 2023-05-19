import NavBar from "@/components/NavBar";
import "../globals.css";

export const metadata = {
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col w-full max-w-screen-lg h-full min-h-screen">
      <NavBar />
      <div className="flex flex-grow justify-center items-center">{children}</div>
    </section>
  );
}
