'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check, Star, Users, Building, Crown, ChevronDown } from 'lucide-react'

export default function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const plans = [
    {
      name: '無料プラン',
      icon: Users,
      price: '0',
      period: '月3回まで無料',
      description: '個人利用やお試しに最適',
      features: [
        '月3回まで会議無料（最大30人）',
        '4回目以降：月額2,000円で利用可能',
        '基本的なアバター機能',
        'HD画質ビデオ通話',
        '画面共有機能',
        'チャット機能'
      ],

      popular: false
    },
    {
      name: 'ベーシックプラン',
      icon: Building,
      price: '2,000',
      period: '月額',
      description: '小規模チーム向けプラン',
      features: [
        '月10回まで会議可能（最大100人）',
        '年間契約：16,000円〜',
        'カスタムアバター',
        'HD画質ビデオ通話',
        '録画・再生機能',
        'ファイル共有機能',
        'チャット機能',
        '基本サポート'
      ],

      popular: false
    },
    {
      name: 'プロプラン',
      icon: Crown,
      price: '2,500',
      period: '月額',
      description: '中規模企業向けプラン',
      features: [
        '月20回まで会議可能（最大100人）',
        '年間契約：20,000円〜',
        'プレミアムアバター',
        '4K画質ビデオ通話',
        '録画・再生機能',
        'ファイル共有機能',
        'カレンダー連携',
        '優先サポート'
      ],

      popular: true
    },
    {
      name: 'ビジネスプラン',
      icon: Building,
      price: '3,000',
      period: '月額',
      description: '大規模企業向けプラン',
      features: [
        '回数無制限（最大100人）',
        '年間契約：25,000円〜',
        'フルカスタマイズ可能',
        '4K画質ビデオ通話',
        '高度な録画・分析機能',
        'API連携',
        'チーム管理機能',
        '専任サポート'
      ],

      popular: false
    },
    {
      name: 'ダイヤモンドプラン',
      icon: Crown,
      price: '要相談',
      period: 'カスタム価格',
      description: '大規模会議対応プラン',
      features: [
        '大規模会議対応',
        '参加者数無制限',
        'フルカスタマイズ可能',
        '8K画質対応',
        '高度なセキュリティ',
        'オンプレミス対応',
        'SLA保証',
        '24時間専任サポート'
      ],

      popular: false
    }
  ]

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

  const faqs = [
    {
      question: 'プラン変更は可能ですか？',
      answer: 'はい、いつでもプランの変更が可能です。アップグレードは即座に、ダウングレードは次回請求サイクルから適用されます。'
    },
    {
      question: '無料体験期間はありますか？',
      answer: '無料プランでは月3回まで会議無料（最大30人）でご利用いただけます。4回目以降は月額2,000円で利用可能です。事前登録していただくとリリースから２ヶ月間、月３回まで無料体験できます。'
    },
    {
      question: '解約手数料はかかりますか？',
      answer: '解約手数料は一切かかりません。いつでも自由に解約していただけます。'
    },
    {
      question: 'サポート体制について',
      answer: 'ベーシックプランは基本サポート、プロプランは優先サポート、ビジネスプランは専任サポート、ダイヤモンドプランは24時間専任サポートが付きます。'
    },
    {
      question: '会議の参加人数制限はありますか？',
      answer: '無料・ベーシック・プロ・ビジネスプランは最大100人まで（無料プランのみ30人）、ダイヤモンドプランは参加者数無制限です。'
    },
    {
      question: '年間契約の割引はありますか？',
      answer: 'はい、年間契約では割引が適用されます。ベーシックプラン16,000円〜、プロプラン20,000円〜、ビジネスプラン25,000円〜となります。'
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">シンプルな料金プラン</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            事前登録していただくとリリースから２ヶ月間、月３回までまで無料体験
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative rounded-3xl p-[2px] shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                plan.name === '無料プラン' 
                  ? 'bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600'
                  : plan.name === 'ベーシックプラン'
                  ? 'bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600'
                  : plan.name === 'プロプラン'
                  ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500'
                  : plan.name === 'ビジネスプラン'
                  ? 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600'
                  : plan.name === 'ダイヤモンドプラン'
                  ? 'bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500'
                  : 'bg-gray-700'
              } ${plan.popular ? 'xl:scale-105' : ''}`}
            >
              <div className="bg-neutral-900 rounded-3xl p-6 h-full">
              {/* 人気プランバッジ */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-black px-6 py-2 rounded-full flex items-center space-x-2 text-sm font-bold">
                    <Star className="w-4 h-4" />
                    <span>人気プラン</span>
                  </div>
                </div>
              )}

              {/* プランヘッダー */}
              <div className="text-center mb-8">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                  plan.popular ? 'bg-white' : 'bg-gray-700'
                }`}>
                  <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-black' : 'text-white'}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4 text-sm">{plan.description}</p>
                
                <div className="mb-6">
                  {plan.price === '要相談' ? (
                    <div className="text-2xl font-bold text-white">{plan.price}</div>
                  ) : (
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-white">¥{plan.price}</span>
                      {plan.price !== '0' && <span className="text-gray-400 ml-1 text-sm">/月</span>}
                    </div>
                  )}
                  <div className="text-gray-500 mt-1 text-sm">{plan.period}</div>
                </div>
              </div>

              {/* 機能リスト */}
              <div className="mb-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 追加情報 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.div variants={itemVariants} className="bg-neutral-900 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-700">
            <h3 className="text-2xl font-bold mb-8 text-white text-center">よくある質問</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-700 last:border-b-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center py-4 text-left hover:bg-neutral-800 px-4 rounded-lg transition-colors duration-200"
                  >
                    <h4 className="font-semibold text-white text-lg">{faq.question}</h4>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? 'auto' : 0,
                      opacity: openFaq === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
