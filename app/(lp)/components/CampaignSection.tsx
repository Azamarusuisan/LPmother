export default function CampaignSection() {
  const curriculum = [
    "相談者に寄り添うための傾聴技術とコミュニケーション",
    "リーディングを深めるための占術テクニック",
    "心理学的アプローチの活用方法",
    "料金設定・時間管理・守秘義務などの実務知識",
    "占い師としての倫理観と法的な注意点",
    "顧客との信頼関係を築くための対話術",
    "オンライン占いプラットフォームへの出演準備",
  ];

  return (
    <section id="campaign" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
            <span className="text-green-600 text-sm font-bold">
              12月限定 半額キャンペーン
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            プロ養成講座 詳細
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left: Campaign Details */}
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <svg
                  className="w-6 h-6 text-green-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                講座概要
              </h3>

              <dl className="space-y-4">
                <div className="border-b border-green-200 pb-4">
                  <dt className="text-sm text-gray-600 mb-1">対象講座</dt>
                  <dd className="text-gray-900 font-medium">
                    プロ養成講座（初級・中級・上級）
                  </dd>
                </div>

                <div className="border-b border-green-200 pb-4">
                  <dt className="text-sm text-gray-600 mb-1">受講形式</dt>
                  <dd className="text-gray-900 font-medium">
                    マンツーマン指導
                    <br />
                    <span className="text-gray-700 text-sm">
                      1回3時間 × 10回（全30時間）
                    </span>
                  </dd>
                </div>

                <div className="border-b border-green-200 pb-4">
                  <dt className="text-sm text-gray-600 mb-1">通常価格</dt>
                  <dd className="text-gray-600 line-through text-lg">
                    300,000円（税込）
                  </dd>
                </div>

                <div className="border-b border-green-200 pb-4">
                  <dt className="text-sm text-gray-600 mb-1">
                    キャンペーン価格
                  </dt>
                  <dd className="text-green-600 font-bold text-3xl">
                    150,000円
                    <span className="text-lg text-gray-700 ml-2">（税込）</span>
                  </dd>
                  <p className="text-green-600 text-sm mt-1 font-medium">
                    50%OFF！
                  </p>
                </div>

                <div className="border-b border-green-200 pb-4">
                  <dt className="text-sm text-gray-600 mb-1">
                    キャンペーン期間
                  </dt>
                  <dd className="text-gray-900 font-medium">
                    2025年12月1日〜12月31日
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-gray-600 mb-2">申込方法</dt>
                  <dd className="text-gray-700 text-sm leading-relaxed">
                    公式LINEを友だち追加し、所定のキーワードを送信してください。
                    <br />
                    <span className="text-green-600 font-medium">
                      ※ LINE登録で限定特典もプレゼント
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right: Curriculum & LINE QR */}
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <svg
                  className="w-6 h-6 text-green-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                学べる内容
              </h3>

              <ul className="space-y-3">
                {curriculum.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30 rounded-2xl p-8">
          <p className="text-gray-700 mb-4">
            迷っている段階でも、まずはお気軽にご相談ください
          </p>
          <a
            href="https://lin.ee/CsWXGzA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-200"
          >
            公式LINEで詳細を確認する
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
      </div>
    </section>
  );
}
