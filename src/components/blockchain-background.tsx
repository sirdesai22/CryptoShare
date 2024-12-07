import { Hexagon } from 'lucide-react'

export function BlockchainBackground() {
  return (
    <div className="fixed inset-0 z-0 opacity-10 grid grid-cols-6 gap-4 p-4">
      {Array(36).fill(null).map((_, index) => (
        <Hexagon key={index} className="text-purple-400 w-full h-full" />
      ))}
    </div>
  )
}

