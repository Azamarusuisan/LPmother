export default function MediaSection() {
  const achievements = [
    {
      category: "電話占い実績",
      items: [
        "全国電話占いサイトリピート率9か月連続No.1",
        "相談実績4万人超を達成",
        "恋愛コラム人気ランキング1位",
      ],
    },
    {
      category: "メディア掲載",
      items: [
        "『anan』『週刊女性』掲載",
        "『北海道新聞』『ミスターパートナー』掲載・連載",
        "電話占いメディア株式会社インタビュー掲載",
      ],
    },
    {
      category: "イベント・講演",
      items: [
        "大規模イベント運営：最大100ブース／1,400名来場",
        "占い師向けセミナー講師",
        "オンラインプラットフォームでの定期配信",
      ],
    },
  ];

  return (
    <section id="media" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            実績・メディア掲載
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6" />
          <p className="text-lg text-gray-700">
            長年の活動を通じて、多くのメディアや業界から注目されています
          </p>
        </div>

        <div className="mb-12">
          <div className="space-y-6 max-w-3xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-green-50 border border-green-200 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-green-600 mb-4 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {achievement.category}
                </h3>
                <ul className="space-y-2">
                  {achievement.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-700 text-sm"
                    >
                      <svg
                        className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-8 text-center">
          <p className="text-gray-700 text-lg">
            これらの実績を活かし、
            <span className="text-green-600 font-semibold">
              一般社団法人 癒占（iura）
            </span>
            を母体として、
            <br className="hidden sm:block" />
            プロ占い師の育成とオンラインデビューのサポートを行っています。
          </p>
        </div>
      </div>
    </section>
  );
}
