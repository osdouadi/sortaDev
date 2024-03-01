import { Toaster } from "react-hot-toast";
import Footer from "./components/footer/footer";
import "./globals.css";
import Header from "./components/header/header";


export const metadata = {
  title: "Oussama Douadi | Personal website",
  description: "The portfolio and personal website of Oussama douadi, A full stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster position="bottom-center" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
