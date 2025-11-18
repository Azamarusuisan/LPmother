export default function SupportCommentSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            サポート団体からのコメント
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto" />
        </div>

        <div className="bg-green-50/50 border border-green-200 rounded-2xl p-8 sm:p-12">
          <div className="mb-6">
            <p className="text-green-600 font-semibold text-lg mb-1">
              一般社団法人 全国VR推進協会
            </p>
            <p className="text-gray-600 text-sm">代表理事 藤原 憲市</p>
          </div>

          <div className="text-gray-700 leading-relaxed">
            <p className="text-lg">
              「ena様の実体験に根ざした伴走支援と、育成による人材循環は、私たちが応援したいモデルです。
              <span className="text-green-600 font-semibold">
                オンラインとリアルを掛け合わせた発信を継続的に支えていきます。
              </span>
              」
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-green-200">
            <p className="text-sm text-gray-600 leading-relaxed">
              本プログラムは、全国VR推進協会の支援のもと、デジタル技術とリアル拠点を融合した新しい占い師育成モデルとして運営されています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
