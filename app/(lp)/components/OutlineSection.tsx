export default function OutlineSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            運営情報
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto" />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* 店舗概要 */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-green-600 mb-6 pb-4 border-b border-green-200">
              店舗概要
            </h3>

            <dl className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <dt className="text-gray-600 text-sm col-span-1">屋号</dt>
                <dd className="text-gray-900 font-medium col-span-2">
                  東銀座の母ena
                </dd>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <dt className="text-gray-600 text-sm col-span-1">所在地</dt>
                <dd className="text-gray-900 col-span-2 text-sm">
                  〒165-0027
                  <br />
                  東京都中野区野方5-2-10-501
                </dd>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <dt className="text-gray-600 text-sm col-span-1">代表者</dt>
                <dd className="text-gray-900 font-medium col-span-2">
                  六平 多美子
                </dd>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <dt className="text-gray-600 text-sm col-span-1">
                  事業内容
                </dt>
                <dd className="text-gray-900 col-span-2">
                  占い／占いスクール運営
                </dd>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-green-200">
                <dt className="text-gray-600 text-sm col-span-1">
                  公式サイト
                </dt>
                <dd className="text-green-600 col-span-2 break-all text-sm">
                  <a
                    href="https://www.majyoena.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-700 transition-colors hover:underline"
                  >
                    www.majyoena.net
                  </a>
                </dd>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <dt className="text-gray-600 text-sm col-span-1">
                  Instagram
                </dt>
                <dd className="text-green-600 col-span-2">
                  <a
                    href="https://www.instagram.com/higashiginzanohaha.ena/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-700 transition-colors flex items-center text-sm"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    @higashiginzanohaha.ena
                  </a>
                </dd>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <dt className="text-gray-600 text-sm col-span-1">
                  公式LINE
                </dt>
                <dd className="text-green-600 col-span-2">
                  <a
                    href="https://lin.ee/CsWXGzA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-700 transition-colors flex items-center text-sm"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                    友だち追加はこちら
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
