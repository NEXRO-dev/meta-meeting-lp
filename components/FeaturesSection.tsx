'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Video, 
  Users, 
  Globe, 
  Zap
} from 'lucide-react'

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const mainFeatures = [
    {
      icon: Globe,
      title: 'どこからでも参加可能',
      description: '家でもオフィスでも、どこからでも会議に参加可能。場所を選ばない柔軟な働き方を実現します。',
      color: 'bg-white'
    },
    {
      icon: Video,
      title: 'アバター会議体験',
      description: 'アバターを使った臨場感のある会議体験。表情や身振りでより豊かなコミュニケーションを。',
      color: 'bg-white'
    },
    {
      icon: Users,
      title: 'リアルタイム共有',
      description: 'リンク共有で欠席者もリアルタイムで内容確認。誰も置き去りにしない包括的な会議運営。',
      color: 'bg-white'
    },
    {
      icon: Zap,
      title: '自動議事録保存',
      description: '議事録は自動保存され、後からいつでも閲覧可能。重要な決定事項を見逃しません。',
      color: 'bg-white'
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

  return (
    <section id="features" className="section-padding bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">なぜMeta会議？</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            従来のビデオ会議では味わえない、新しい会議体験をお届けします。<br />
            AIっぽくない、人間らしいコミュニケーションを重視したサービスです。
          </motion.p>
        </motion.div>

        {/* メイン特徴 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift border border-gray-700"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color === 'bg-white' ? 'text-black' : 'text-white'}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              
              {/* ホバー時の装飾 */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
            </motion.div>
          ))}
        </motion.div>



        {/* 体験談セクション - コメントアウト */}
        {/*
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 text-center"
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-12 text-white">
            利用者の声
          </motion.h3>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "田中様",
                company: "株式会社ABC",
                comment: "まるで本当に同じ部屋にいるようで、リモートワークの孤独感が一切ありません。"
              },
              {
                name: "佐藤様", 
                company: "XYZ商事",
                comment: "セットアップが驚くほど簡単で、ITに詳しくない社員でもすぐに使えました。"
              },
              {
                name: "山田様",
                company: "DEF企画",
                comment: "プレゼンテーションの臨場感が段違いです。クライアントにも大好評です。"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mx-auto mb-4">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.comment}"</p>
                <div className="text-sm">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        */}
      </div>
    </section>
  )
}
