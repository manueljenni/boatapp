import "./globals.css";

export const metadata = {
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col mx-12">
        <div className="flex flex-grow justify-center items-center">{children}</div>
      </body>
    </html>
  );
}
