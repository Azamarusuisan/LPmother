export default function MessageSection() {
  return (
    <section id="message" className="py-20 bg-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            代表メッセージ
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-4" />
          <p className="text-green-600 font-medium">
            東銀座の母 ena 代表 / 六平 多美子
          </p>
        </div>

        <div className="bg-white border border-green-200 rounded-2xl p-8 sm:p-12">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              私自身、三度の結婚と離婚を経験し、経済的にも精神的にも厳しい局面を何度も乗り越えてきました。
              生きる自信をなくしかけた時期に踏みとどまらせてくれたのは、子どもの存在です。
            </p>

            <p className="text-lg">
              喜びも挫折も知っているからこそ、
              <span className="text-green-600 font-semibold">
                きれいごとではない現実的な選択肢を一緒に探し、心に灯をともして具体的な一歩へつなげる支援
              </span>
              を大切にしています。
            </p>

            <p className="text-lg">
              鑑定は"当てる"だけでなく、不安で立ち止まっている方に寄り添うこと。
              そして占い師として、
              <span className="text-green-600 font-semibold">
                "人の役に立つことで魂が喜ぶ"感覚
              </span>
              を知ってほしい。
            </p>

            <p className="text-lg">
              求められることに誠実に応えながら、鑑定と育成の循環で笑顔の連鎖を広げていきます。
              この講座では、私が40年かけて学んできたこと、
              そして私自身が人生で経験した喜びや痛みから得た気づきを、
              すべてお伝えします。
            </p>

            <div className="mt-8 pt-6 border-t border-green-200">
              <p className="text-right text-gray-600 text-sm">
                東銀座の母 ena 代表
                <br />
                <span className="text-gray-900 font-medium text-base">
                  六平 多美子
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
