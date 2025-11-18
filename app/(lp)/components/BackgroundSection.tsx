import Image from "next/image";

export default function BackgroundSection() {
  return (
    <section id="background" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            なぜ「東銀座の母」は<br className="sm:hidden" />
            プロを育てるのか
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto" />
        </div>

        {/* 鑑定風景の画像 */}
        <div className="mb-12 max-w-3xl mx-auto">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl border border-green-200">
            <Image
              src="/images/LP3.webp"
              alt="タロット鑑定の実際の風景 - マンツーマンでの鑑定の様子"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">実際のタロット鑑定の様子</p>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <div className="bg-green-50 border border-green-200 rounded-xl p-8">
            <p className="text-lg">
              代表の六平多美子は、幼少期から占いに触れながら育ちました。
              成人してからは、占いをコミュニケーションの手段として日常で活用。
              エステサロンを運営していた時期には、お客様へのサービスとして占いを提供したところ、
              その的中率と寄り添う姿勢が大きな反響を呼びました。
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-8">
            <p className="text-lg">
              その評判が広がり、大手電話占いサービスからオファーを受け、
              プロの占い師としてのキャリアをスタート。
              以来、約40年にわたり、電話や対面を通じて4万人を超える方々の相談に応じてきました。
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-8">
            <p className="text-lg">
              一方で、家庭と仕事の両立の難しさに直面し、私生活では息子の抜毛症や三度の結婚と離婚を経験。
              経済面でも厳しい局面が続き、生きる自信をなくしかけた時期がありました。
              子どもの存在に支えられて踏みとどまり、現実に向き合い続けた実体験が、
              いまの"寄り添いと行動提案"という鑑定スタイルの中核になっています。
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-8">
            <p className="text-lg">
              経済的・心理的な現実、子育てや自立の課題、信頼関係の再構築、キャリアの再設計など、
              人生局面の"痛み"と"選択"を潜り抜けてきた経験は、
              単なる運勢解釈にとどまらない現実適応的なカウンセリング力の土台となっています。
              占いは単なる予言ではなく、
              <span className="text-green-600 font-semibold">
                「今を直視し、希望を取り戻すための対話」
              </span>
              であるという信念のもと、
              同じ志を持つ仲間を育てるため、プロ養成講座を開講しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
