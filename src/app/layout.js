import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/lib/query-provider";
import ReduxProvider from "@/redux/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "New Grace ERP",
  description: "New Grace ERP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Provider>{children}</Provider>
        </ReduxProvider>
      </body>
    </html>
  );
}
