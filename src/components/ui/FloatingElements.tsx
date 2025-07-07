'use client'

import { motion } from 'framer-motion'
import { WrenchScrewdriverIcon, FireIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const floatingIcons = [
  { Icon: WrenchScrewdriverIcon, delay: 0, duration: 4 },
  { Icon: FireIcon, delay: 1, duration: 5 },
  { Icon: ShieldCheckIcon, delay: 2, duration: 6 },
]

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingIcons.map(({ Icon, delay, duration }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10"
          initial={{ y: 0, x: 0, rotate: 0 }}
          animate={{
            y: [-20, -60, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${20 + index * 30}%`,
            top: `${30 + index * 20}%`,
          }}
        >
          <Icon className="h-12 w-12 text-primary-300" />
        </motion.div>
      ))}
    </div>
  )
}