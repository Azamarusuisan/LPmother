import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-green-50 via-white to-green-50 py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <div className="inline-block mb-4 px-4 py-1 bg-green-100 border border-green-300 rounded-full">
              <span className="text-green-700 text-sm font-medium">
                2025年12月限定キャンペーン
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              鑑定歴40年、<br />
              <span className="text-green-600">東銀座の母</span>が<br />
              伝える、プロへの道
            </h1>

            <p className="text-xl text-gray-700 mb-8">
              占いを「仕事」にしたい方、すでに活動されていてさらに実力を伸ばしたい方へ。
              <br className="hidden sm:block" />
              実体験に根ざした寄り添い方と、確かな行動提案を学べる本格講座です。
            </p>

            <ul className="space-y-3 mb-10">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-800">
                  鑑定歴約40年・相談実績4万人超の実績
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-800">
                  マンツーマン指導・全30時間（3時間×10回）
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-800">
                  <span className="line-through text-gray-500 mr-2">
                    通常300,000円
                  </span>
                  <span className="text-green-600 font-bold text-lg">
                    → 150,000円（税込）
                  </span>
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-800">
                  公式LINEから簡単お申し込み（登録特典あり）
                </span>
              </li>
            </ul>

            <a
              href="#cta"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-200"
            >
              公式LINEでキャンペーンの詳細を見る
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full max-w-md mx-auto overflow-hidden rounded-2xl bg-gray-100 border border-green-200 shadow-2xl">
              <Image
                src="/images/lp4.webp"
                alt="東銀座の母 ena - タロット占い師"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-500/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
