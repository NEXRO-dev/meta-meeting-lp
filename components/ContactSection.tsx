'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Calendar, MessageSquare, ExternalLink, FileText } from 'lucide-react'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'メール',
      content: 'info@meta-meeting.com',
      description: '24時間受付'
    },
    {
      icon: Phone,
      title: '電話',
      content: '03-1234-5678',
      description: '平日 9:00-18:00'
    },
    {
      icon: MapPin,
      title: 'オフィス',
      content: '東京都渋谷区○○1-2-3',
      description: '○○ビル5階'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">お気軽にお問い合わせください</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            ご質問やご相談がございましたら、お気軽にお声かけください。<br />
            専門スタッフが丁寧にサポートいたします。
          </motion.p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Google フォーム */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-neutral-800 rounded-3xl p-8"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6 flex items-center text-white">
              <MessageSquare className="w-6 h-6 mr-3 text-white" />
              お問い合わせ・資料請求
            </motion.h3>
            
            <motion.div variants={itemVariants} className="space-y-6">
              {/* お問い合わせ */}
              <div className="text-center bg-neutral-700 rounded-xl p-6">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-white" />
                <h4 className="text-lg font-bold mb-3 text-white">お問い合わせ</h4>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  ご質問やご相談がございましたら、<br />
                  お気軽にお問い合わせください。
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdJCxfFfo6tWaUgfTeWztrqy76ko1W5lypa3FHF4T5Eh7UFvw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white hover:bg-gray-100 text-black py-3 px-6 rounded-lg font-bold transition-colors duration-200"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>お問い合わせフォーム</span>
                </a>
              </div>

              {/* 資料請求 */}
              <div className="text-center bg-neutral-700 rounded-xl p-6">
                <FileText className="w-12 h-12 mx-auto mb-4 text-white" />
                <h4 className="text-lg font-bold mb-3 text-white">資料請求</h4>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Meta会議の詳細資料をご希望の方は、<br />
                  こちらから資料をダウンロードいただけます。
                </p>
                <a
                  href="https://forms.gle/YOUR_DOCUMENT_REQUEST_FORM_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-bold transition-colors duration-200"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>資料請求フォーム</span>
                </a>
              </div>
              
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  ※ 外部サイト（Google Forms）に移動します
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* 
          コンタクト情報は一時的にコメントアウト
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8 flex items-center text-white">
              <Phone className="w-6 h-6 mr-3 text-white" />
              その他のお問い合わせ方法
            </motion.h3>

            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4 p-6 bg-neutral-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{info.title}</h4>
                  <p className="text-lg font-medium text-gray-200 mb-1">{info.content}</p>
                  <p className="text-sm text-gray-400">{info.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 text-black text-center"
            >
              <Calendar className="w-12 h-12 mx-auto mb-4 text-black" />
              <h4 className="text-xl font-bold mb-3 text-black">無料デモ予約</h4>
              <p className="mb-6 opacity-80 text-black">
                実際の操作を体験していただける30分間のデモセッションを無料で提供しています。
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors duration-200">
                デモを予約する
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-neutral-800 rounded-2xl p-6"
            >
              <h4 className="text-lg font-bold mb-4 text-white">営業時間</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">平日</span>
                  <span className="font-medium text-white">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">土日祝</span>
                  <span className="font-medium text-white">休業</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">メール</span>
                  <span className="font-medium text-white">24時間受付</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          */}
        </div>
      </div>
    </section>
  )
}