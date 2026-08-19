import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alberto Cabral | Desenvolvedor Full Stack",
  description: "Portfólio de Alberto Cabral: aplicações web, APIs, integrações e automações.",
  openGraph: { title: "Alberto Cabral | Desenvolvedor Full Stack", description: "Aplicações web, APIs, integrações e automações.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Alberto Cabral | Desenvolvedor Full Stack", description: "Aplicações web, APIs, integrações e automações.", images: ["/og.png"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="pt-BR" className="h-full antialiased"><body className="min-h-full flex flex-col">{children}</body></html>;
}
