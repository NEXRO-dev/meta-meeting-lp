'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Globe, Zap } from 'lucide-react'

// タイピングアニメーション用のコンポーネント
const TypingText = ({ text, className = "", delay = 0 }: { text: string, className?: string, delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 50 + delay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, delay])

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  )
}

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const features = [
    { icon: Users, text: 'リアルな会議体験' },
    { icon: Globe, text: 'どこからでもアクセス' },
    { icon: Zap, text: '簡単セットアップ' }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-800 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gray-700 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-gray-600 rounded-full mix-blend-screen filter blur-xl opacity-15 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* メインキャッチコピー */}
          <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-8 mt-12">
            <div className="block text-gray-300 mb-2">
              <TypingText text="いつでも、どこでも" delay={0} />
            </div>
            <div className="text-white text-4xl md:text-6xl font-extrabold">
              <TypingText text="ホイホイ会議" delay={400} />
            </div>
          </motion.h1>

          {/* サブキャッチコピー */}
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
            移動時間ゼロ、共有も議事録も自動化。<br />
            シンプルでストレスフリーな新時代の会議体験。
          </motion.p>

          {/* 特徴アイコン */}
          <motion.div variants={itemVariants} className="flex justify-center items-center space-x-8 md:space-x-12 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 hover-lift">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <span className="text-sm font-medium text-gray-300">{feature.text}</span>
              </div>
            ))}
          </motion.div>




        </motion.div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
