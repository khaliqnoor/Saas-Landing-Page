import type React from "react"
import ai from "@/public/images/Designer (5).jpeg"

interface ParallelCodingAgentsProps {
  className?: string
}

const ParallelCodingAgents: React.FC<ParallelCodingAgentsProps> = ({ className = "" }) => {
  // Theme-based CSS variables using global theme
  const themeVars = {
    "--pca-background-color": "hsl(var(--background))",
    "--pca-background-glass": "hsl(var(--card) / 0.2)",
    "--pca-background-gradient-start": "hsl(var(--card) / 0.2)",
    "--pca-background-gradient-end": "transparent",
    "--pca-text-primary": "hsl(var(--foreground))",
    "--pca-text-secondary": "hsl(var(--muted-foreground))",
    "--pca-border-color": "hsl(var(--border))",
    "--pca-border-main": "hsl(var(--border))",
    "--pca-shadow-color": "rgba(0, 0, 0, 0.12)", // Keeping as is, common shadow
    "--pca-container-background": "hsl(var(--card) / 0.4)",
    "--pca-container-gradient-start": "hsl(var(--card) / 0.4)",
    "--pca-container-gradient-end": "transparent",
  }


  

  return (
    <div
      className={className}
      style={
        {
          width: "100%",
          height: "100%",
          position: "relative",
          background: `linear-gradient(180deg, var(--pca-container-gradient-start) 0%, var(--pca-container-gradient-end) 100%)`,
          backdropFilter: "blur(8.372px)",
          borderRadius: "10.047px",
          boxSizing: "border-box",
          flexShrink: 0,
          margin: "0 auto",
          ...themeVars,
        } as React.CSSProperties
      }
      role="img"
      aria-label="Parallel coding agents working on different tasks simultaneously"
    >
      {/* Inner content area with gradient background */}
            {/* Main content container with backdrop blur */}
      <div
        style={{
          position: "absolute",
          top: "13.336px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "340px",
          height: "221.395px",
          background: "var(--ai-background-color)",
          backdropFilter: "blur(16px)",
          borderRadius: "9.488px",
          border: "1px solid var(--ai-border-main)",
          overflow: "hidden",
        }}
      >
        <div
          className="bg-card border border-border"
          style={{
            padding: "9.488px",
            height: "100%",
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              width: "100%",
              top: "47.67px",
              height: "33.118px",
              background: "hsl(var(--foreground) / 0.08)",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              width: "100%",
              top: "80.791px",
              height: "45.465px",
              background: "var(--ai-highlight-primary)",
              zIndex: 1,
            }}
          />
          <div
            style={{
              fontFamily: "'Geist Mono', 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
              fontSize: "10.279px",
              lineHeight: "15.814px",
              letterSpacing: "-0.3163px",
              color: "var(--ai-text-color)",
              width: "100%",
              maxWidth: "320px",
              position: "relative",
              zIndex: 2,
              margin: 0,
            }}
          >
            <img src={ai.src} alt="" className="object-fit " />
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default ParallelCodingAgents
