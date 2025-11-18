import Image from "next/image";

export default function FinalCTASection() {
  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-b from-green-100 to-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-green-500/10 via-white to-green-50 border-2 border-green-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-green-500/20 border border-green-500/40 rounded-full">
              <span className="text-green-600 text-sm font-bold">
                2025年12月1日〜12月31日限定
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              プロとして、
              <br className="sm:hidden" />
              人の相談に向き合いたい方へ
            </h2>

            <div className="w-20 h-1 bg-green-600 mx-auto mb-8" />

            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              占いを仕事にしたいけれど、
              どこから始めればいいかわからない。
              <br />
              すでに活動しているけれど、
              もっと深く学びたい。
            </p>

            <p className="text-lg text-gray-700 mb-8">
              <span className="text-green-600 font-semibold">
                迷っている段階でも、まずはお気軽にご相談ください。
              </span>
              <br />
              あなたの状況に合わせて、最適な学び方をご提案します。
            </p>

            <div className="bg-green-50/60 border border-green-300 rounded-2xl p-8 mb-8">
              <div className="grid sm:grid-cols-2 gap-6 text-left">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-900 font-semibold mb-1">
                      鑑定歴40年の実績
                    </p>
                    <p className="text-sm text-gray-600">
                      相談実績4万人超の経験を体系化
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-900 font-semibold mb-1">
                      マンツーマン指導
                    </p>
                    <p className="text-sm text-gray-600">
                      3時間×10回の徹底サポート
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-900 font-semibold mb-1">半額価格</p>
                    <p className="text-sm text-gray-600">
                      300,000円 → 150,000円（税込）
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-900 font-semibold mb-1">
                      デビュー支援
                    </p>
                    <p className="text-sm text-gray-600">
                      修了後のオンライン出演もサポート
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 text-xl font-bold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-all shadow-2xl hover:shadow-green-500/50 hover:scale-105 duration-200"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                公式LINEで相談する
              </a>

              {/* QRコード */}
              <div className="flex justify-center my-6">
                <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-green-200">
                  <Image
                    src="/images/LP2.webp"
                    alt="LINE公式アカウント QRコード"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <p className="text-xs text-center text-gray-600 mt-2">スマホで読み取って登録</p>
                </div>
              </div>

              <p className="text-sm text-gray-600">
                ※ LINE登録で限定特典をプレゼント
                <br />
                ※ 登録後、所定のキーワードを送信してください
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-green-200">
              <p className="text-green-600 font-bold text-lg mb-2">
                ⏰ キャンペーン期間：2025年12月1日〜12月31日
              </p>
              <p className="text-gray-600 text-sm">
                この機会をお見逃しなく
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
