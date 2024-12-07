import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Hexagon, Download, ArrowLeft } from 'lucide-react'
import { BlockchainBackground } from '../components/blockchain-background'

export default function Receive() {
  const [fileCode, setFileCode] = useState('')
  const [decryptionProgress, setDecryptionProgress] = useState(0)
  const [isDecrypting, setIsDecrypting] = useState(false)

  const handleDecrypt = () => {
    if (fileCode) {
      setIsDecrypting(true)
      simulateDecryption()
    }
  }

  const simulateDecryption = () => {
    setDecryptionProgress(0)
    const interval = setInterval(() => {
      setDecryptionProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          setIsDecrypting(false)
          return 100
        }
        return prevProgress + 10
      })
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 to-indigo-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <BlockchainBackground />
      <div className="max-w-md w-full space-y-8 bg-black bg-opacity-50 p-6 rounded-xl backdrop-blur-xl shadow-2xl relative z-10">
        <div className="text-center">
          <Hexagon className="h-16 w-16 text-purple-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-2">Receive Files</h1>
          <p className="text-xl text-purple-300">Decrypt and download securely</p>
        </div>
        
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Enter file code"
            value={fileCode}
            onChange={(e) => setFileCode(e.target.value)}
            className="w-full px-4 py-2 border border-purple-500 rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          
          <Button 
            className="w-full bg-indigo-600 hover:bg-indigo-700 hover:scale-105 transition-all duration-200" 
            onClick={handleDecrypt}
            disabled={!fileCode || isDecrypting}
          >
            <Download className="mr-2 h-5 w-5" />
            Decrypt and Download
          </Button>
          
          {isDecrypting && (
            <div className="text-white text-center">
              <div className="mt-4 space-y-2">
                <Progress value={decryptionProgress} className="w-full" />
                <p>{decryptionProgress < 100 ? 'Decrypting...' : 'Decryption complete!'}</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="pt-4">
          <a href="/">
            <Button variant="ghost" className="text-purple-300 hover:text-purple-100">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Selection
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}