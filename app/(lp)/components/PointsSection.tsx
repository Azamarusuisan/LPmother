export default function PointsSection() {
  const points = [
    {
      title: "鑑定歴40年・相談実績4万人超",
      subtitle: "実体験に基づく伴走型アドバイス",
      description:
        "鑑定歴約40年、累計相談4万人超（電話占い含む）。寄り添い・深掘り・行動提案を体系化し、3か月以内の変化実感の声が多数。",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "育成実績",
      subtitle: "スクール生200名超、50名がオンラインデビュー",
      description:
        "2021年5月設立の一般社団法人 癒占（iura）を母体に、卒業後の活動機会も支援。",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "代表の実体験",
      subtitle: "3度の結婚と離婚、子育て、経済的困難を経験",
      description:
        "家族・仕事・自立の意思決定に向き合った実体験を、現実的かつ共感的な助言に昇華。",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="points" className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            講座の3つの特徴
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white border border-green-200 rounded-xl p-8 hover:border-green-400 transition-all duration-300 hover:shadow-xl hover:shadow-green-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 border border-green-300 rounded-full mb-6 text-green-600">
                {point.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {point.title}
              </h3>

              <p className="text-sm text-green-600 mb-4 font-medium">{point.subtitle}</p>

              <p className="text-gray-700 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
