'use client'

import { Video, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <Video className="w-6 h-6 text-black" />
            </div>
              <h3 className="text-xl font-bold">Meta会議</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              パソコン内にメタバース空間を作って、そこで実際に会って会議しているような体験を提供します。
              いつでも、どこでも、ホイホイ会議で新しい働き方を実現しましょう。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Video className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* サービス */}
          <div>
            <h4 className="text-lg font-semibold mb-6">サービス</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Meta会議</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">料金プラン</a></li>
              {/* <li><a href="#" className="text-gray-300 hover:text-white transition-colors">導入支援</a></li> */}
              {/* <li><a href="#" className="text-gray-300 hover:text-white transition-colors">技術サポート</a></li> */}
            </ul>
          </div>

          {/* お問い合わせ */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-6">お問い合わせ</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent-400" />
                <span className="text-gray-300">info@metaverse-meeting.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-400" />
                <span className="text-gray-300">03-1234-5678</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-400 mt-1" />
                <span className="text-gray-300">東京都渋谷区○○1-2-3<br />○○ビル5階</span>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Meta会議. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">プライバシーポリシー</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">利用規約</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">特定商取引法</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
