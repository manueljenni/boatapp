import "./globals.css";

export const metadata = {
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="mx-12 flex justify-center items-center min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
