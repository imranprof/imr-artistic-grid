
import MainHeader from "@/components/headers/MainHeader";
import "../styles/globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
