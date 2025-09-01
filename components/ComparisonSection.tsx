'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, X, Triangle } from 'lucide-react'

export default function ComparisonSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const comparisonData = [
    {
      feature: 'アバターで会議に参加',
      metahoi: true,
      competitor1: false,
      competitor2: 'partial', // 一部対応
    },
    {
      feature: '欠席者へのリアルタイム共有',
      metahoi: true,
      competitor1: 'partial', // 録画後共有
      competitor2: false,
    },
    {
      feature: '自動議事録保存',
      metahoi: true,
      competitor1: false,
      competitor2: false,
    },
    {
      feature: '幅広い利用シーン（個人・企業・教育）',
      metahoi: true,
      competitor1: 'partial', // 主にビジネス
      competitor2: 'partial', // エンタメ寄り
    },
    {
      feature: '同時参加可能人数（無料/有料）',
      metahoi: '30人 / 100人',
      competitor1: '100人 / 300人',
      competitor2: '50人 / 100人',
    },
    {
      feature: '料金体系',
      metahoi: '月額サブスク（2000円〜）',
      competitor1: '従量課金+サブスク',
      competitor2: '要相談',
    }
  ]

  const renderCell = (value: boolean | string, isMetahoi = false) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className={`w-6 h-6 mx-auto ${isMetahoi ? 'text-green-400' : 'text-green-500'}`} />
      ) : (
        <X className={`w-6 h-6 mx-auto ${isMetahoi ? 'text-red-400' : 'text-red-500'}`} />
      )
    }
    
    if (value === 'partial') {
      return <Triangle className={`w-6 h-6 mx-auto ${isMetahoi ? 'text-yellow-400' : 'text-yellow-500'}`} />
    }
    
    return <span className={`text-sm ${isMetahoi ? 'text-white' : 'text-gray-300'} text-center block`}>{value}</span>
  }

  return (
    <section id="comparison" className="section-padding bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">既存サービスとの違い</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Meta会議が他のオンライン会議システムとどこが違うのか、<br />
            主要な機能を比較してご覧ください。
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-neutral-900 rounded-2xl overflow-hidden border border-gray-700">
            {/* ヘッダー */}
            <div className="grid grid-cols-4 bg-neutral-800 border-b border-gray-700">
              <div className="p-4 border-r border-gray-700">
              </div>
              <div className="p-4 border-r border-gray-700 text-center">
                <h3 className="font-bold text-white text-lg">Meta会議</h3>
              </div>
              <div className="p-4 border-r border-gray-700 text-center">
                <h3 className="font-bold text-white text-lg">Z（某会議サービス）</h3>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-white text-lg">M（某メタ系サービス）</h3>
              </div>
            </div>

            {/* データ行 */}
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-4 border-b border-gray-700 last:border-b-0 hover:bg-neutral-800 transition-colors duration-200`}
              >
                <div className="p-4 border-r border-gray-700">
                  <span className="font-medium text-white">{row.feature}</span>
                </div>
                <div className="p-4 border-r border-gray-700 flex items-center justify-center bg-neutral-800">
                  {renderCell(row.metahoi, true)}
                </div>
                <div className="p-4 border-r border-gray-700 flex items-center justify-center">
                  {renderCell(row.competitor1)}
                </div>
                <div className="p-4 flex items-center justify-center">
                  {renderCell(row.competitor2)}
                </div>
              </div>
            ))}
          </div>

          {/* 凡例 */}
          <div className="mt-8 flex justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">対応</span>
            </div>
            <div className="flex items-center space-x-2">
              <Triangle className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-300">一部対応</span>
            </div>
            <div className="flex items-center space-x-2">
              <X className="w-5 h-5 text-red-400" />
              <span className="text-gray-300">非対応</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
