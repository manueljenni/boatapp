import "./globals.css";

export const metadata = {
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col mx-6 md:mx-12">
        <div className="centerDiv flex-grow">{children}</div>
      </body>
    </html>
  );
}
