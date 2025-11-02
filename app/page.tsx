"use client"

import { useState } from "react"
import Waves from "@/components/Waves"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { WavesIcon, Zap, Sunset } from "lucide-react"

export default function WavesDemo() {
  const [config, setConfig] = useState({
    lineColor: "rgba(255, 255, 255, 0.3)",
    backgroundColor: "#0f172a",
    waveSpeedX: 0.0125,
    waveSpeedY: 0.005,
    waveAmpX: 32,
    waveAmpY: 16,
    xGap: 10,
    yGap: 32,
    friction: 0.925,
    tension: 0.005,
    maxCursorMove: 100,
  })

  const [showControls, setShowControls] = useState(false)

  const presets = [
    {
      name: "Ocean Waves",
      icon: WavesIcon,
      config: {
        ...config,
        lineColor: "rgba(96, 165, 250, 0.5)",
        backgroundColor: "#1e3a8a",
        waveAmpX: 40,
        waveAmpY: 20,
        waveSpeedX: 0.01,
        waveSpeedY: 0.008,
      },
    },
    {
      name: "Electric Grid",
      icon: Zap,
      config: {
        ...config,
        lineColor: "rgba(74, 222, 128, 0.6)",
        backgroundColor: "#14532d",
        xGap: 15,
        yGap: 15,
        waveAmpX: 20,
        waveAmpY: 20,
      },
    },
    {
      name: "Sunset Ripples",
      icon: Sunset,
      config: {
        ...config,
        lineColor: "rgba(251, 146, 60, 0.6)",
        backgroundColor: "#7c2d12",
        waveAmpX: 50,
        waveAmpY: 10,
        waveSpeedX: 0.02,
      },
    },
  ]

  return (
    <div className="relative w-screen h-screen overflow-hidden cursor-grab active:cursor-grabbing">
      <Waves {...config} />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="text-center mb-8">
          <div className="flex gap-4 justify-center mb-8">
            {presets.map((preset) => {
              const Icon = preset.icon
              return (
                <Button
                  key={preset.name}
                  variant="outline"
                  onClick={() => setConfig(preset.config)}
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  aria-label={preset.name}
                >
                  <Icon className="w-5 h-5" />
                </Button>
              )
            })}
          </div>

          <Button
            onClick={() => setShowControls(!showControls)}
            className="bg-white/10 border border-white/20 text-white hover:bg-white/20"
          >
            {showControls ? "Hide Controls" : "Show Controls"}
          </Button>
        </div>

        {showControls && (
          <Card className="w-96 bg-black/50 border-white/20 text-white">
            <CardHeader>
              <CardTitle>Wave Controls</CardTitle>
              <CardDescription className="text-gray-300">Adjust the wave parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Wave Amplitude X: {config.waveAmpX}</label>
                <Slider
                  value={[config.waveAmpX]}
                  onValueChange={([value]) => setConfig({ ...config, waveAmpX: value })}
                  max={100}
                  min={0}
                  step={1}
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Wave Amplitude Y: {config.waveAmpY}</label>
                <Slider
                  value={[config.waveAmpY]}
                  onValueChange={([value]) => setConfig({ ...config, waveAmpY: value })}
                  max={100}
                  min={0}
                  step={1}
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Wave Speed X: {config.waveSpeedX.toFixed(4)}</label>
                <Slider
                  value={[config.waveSpeedX * 1000]}
                  onValueChange={([value]) => setConfig({ ...config, waveSpeedX: value / 1000 })}
                  max={50}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Grid Gap X: {config.xGap}</label>
                <Slider
                  value={[config.xGap]}
                  onValueChange={([value]) => setConfig({ ...config, xGap: value })}
                  max={50}
                  min={5}
                  step={1}
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Grid Gap Y: {config.yGap}</label>
                <Slider
                  value={[config.yGap]}
                  onValueChange={([value]) => setConfig({ ...config, yGap: value })}
                  max={100}
                  min={10}
                  step={1}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <footer className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-center gap-6 p-6 text-white/70">
        <a
          href="https://github.com/vdutts7"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          aria-label="View on GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
        <a
          href="https://x.com/vdutts7"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          aria-label="Follow on X"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
        </a>
      </footer>
    </div>
  )
}
