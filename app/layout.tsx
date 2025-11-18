import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "東銀座の母ena｜プロ養成講座 半額キャンペーン",
  description: "鑑定歴40年、相談実績4万人超の「東銀座の母ena」によるプロ養成講座が12月限定で半額に。マンツーマン30時間で、寄り添い方から実務まで徹底指導。占いを仕事にしたい方へ。",
  keywords: "東銀座の母,ena,占い,プロ養成講座,占いスクール,六平多美子,鑑定,キャンペーン",
  openGraph: {
    title: "東銀座の母ena｜プロ養成講座 半額キャンペーン",
    description: "鑑定歴40年、相談実績4万人超の「東銀座の母ena」によるプロ養成講座が12月限定で半額に。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
