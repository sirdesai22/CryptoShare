import { BlockchainBackground } from "@/components/blockchain-background";
import { Button } from "@/components/ui/button";
import { Download, HandCoins, Hexagon, Upload } from "lucide-react";

export default function LandingPage() {
  return (
    <>
      <div className="absolute flex justify-end items-center w-full gap-5 top-3 right-3">
        <div className="flex gap-2 z-50 bg-blue-700 h-fit p-2 rounded-lg font-semibold">
          <HandCoins />
          Pay with Crypto
        </div>

        <div className="flex w-fit bg-blue-700  z-50 top-3 right-3 p-2 gap-2 items-center rounded-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg64wPFKy9dvdwMrqrMwD0fBiTDF1G4GkaWw&s"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div className="flex flex-col">
            <p className="font-semibold">sirdesaiexe</p>
            <p className="text-sm">0x81319b...bf01</p>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-r from-purple-700 to-indigo-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <BlockchainBackground />
        <div className="max-w-md w-full space-y-8 bg-black bg-opacity-50 p-6 rounded-xl backdrop-blur-xl shadow-2xl relative z-10">
          <div className="text-center">
            <Hexagon className="h-16 w-16 text-purple-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-2">CryptoShare</h1>
            <p className="text-xl text-purple-300 mb-8">
              Choose an action to proceed
            </p>
          </div>

          <div className="flex justify-center space-x-20 pb-10">
            <a href="/send">
              <Button className="w-32 h-32 rounded-full bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center">
                <Upload className="h-12 w-12 mb-2" />
                <span className="text-lg font-semibold">SEND</span>
              </Button>
            </a>

            <a href="/receive">
              <Button className="w-32 h-32 rounded-full bg-indigo-600 hover:bg-indigo-700 hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center">
                <Download className="h-12 w-12 mb-2" />
                <span className="text-lg font-semibold">RECEIVE</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
