import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Upload, Lock, Unlock, Star, Share2, Download, Hexagon } from 'lucide-react'
import { BlockchainBackground } from '@/components/blockchain-background'

export default function Send() {
  const [file, setFile] = useState<File | null>(null)
  const [encryptionProgress, setEncryptionProgress] = useState(0)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0])
      simulateEncryption()
    }
  }

  const simulateEncryption = () => {
    setEncryptionProgress(0)
    const interval = setInterval(() => {
      setEncryptionProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
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
          <h1 className="text-4xl font-bold text-white mb-2">CryptoShare</h1>
          <p className="text-xl text-purple-300">Secure file sharing with blockchain power!</p>
        </div>
        
        <div className="space-y-4">
          <div className="relative">
            <Input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="flex items-center justify-center w-full px-4 py-2 border border-purple-500 rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer"
            >
              <Upload className="mr-2 h-5 w-5" />
              Choose a file to encrypt
            </label>
          </div>
          
          {file && (
            <div className="text-white text-center">
              <p>Selected file: {file.name}</p>
              <div className="mt-4 space-y-2">
                <Progress value={encryptionProgress} className="w-full" />
                <p>{encryptionProgress < 100 ? 'Encrypting...' : 'Encryption complete!'}</p>
              </div>
            </div>
          )}
          
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 hover:scale-105 transition-all duration-200">
            {encryptionProgress < 100 ? (
              <>
                <Share2 className="mr-2 h-5 w-5" />
                Encrypt & Share
              </>
            ) : (
              <>
                <Download className="mr-2 h-5 w-5" />
                Decrypt & Download
              </>
            )}
          </Button>
        </div>
        
        <div className="flex justify-evenly space-x-4 mt-8">
          <div className="text-center transform hover:scale-105 transition-transform duration-200 w-24">
            <Star className="h-8 w-8 text-yellow-400 mx-auto" />
            <p className="text-white mt-2">5 <br /> Level</p>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-200 w-24">
            <Lock className="h-8 w-8 text-green-400 mx-auto" />
            <p className="text-white mt-2">50 <br /> Files Shared</p>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-200 w-24">
            <Unlock className="h-8 w-8 text-blue-400 mx-auto" />
            <p className="text-white mt-2">30 <br /> Downloads</p>
          </div>
        </div>
      </div>
    </div>
  )
}

