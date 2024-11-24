import Header from "@/Components/Header";
import "./globals.css";

//Structure globale de l'application: on ajouter le Header et Footer ici pour ne plus avoir à les remttre à chaque fois dans chaque projet
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
