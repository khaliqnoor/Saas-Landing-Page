"use client"

import type React from "react"
import ai from "@/public/images/designer2.jpg"

const RealtimeCodingPreviews: React.FC = () => {
  const themeVars = {
    "--realtime-primary-color": "hsl(var(--primary))",
    "--realtime-background-editor": "hsl(var(--background) / 0.8)", // Tinted gray from background
    "--realtime-background-preview": "hsl(var(--background) / 0.8)", // Tinted gray from background
    "--realtime-text-color": "hsl(var(--foreground))",
    "--realtime-text-editor": "hsl(var(--foreground))",
    "--realtime-text-preview": "hsl(var(--primary-foreground))", // For button text
    "--realtime-border-color": "hsl(var(--border))",
    "--realtime-border-main": "hsl(var(--border))",
    "--realtime-connection-color": "hsl(var(--muted-foreground))",
  }

  return (
    <div
      className="" // Remove className prop if not used
      style={
        {
          width: "100%", // Use 100% for responsiveness within parent
          height: "100%", // Use 100% for responsiveness within parent
          position: "relative",
          background: "transparent",
          ...themeVars,
        } as React.CSSProperties
      }
      role="img"
      aria-label="Realtime Coding Previews interface showing split-screen code editor and live preview"
    >
      {/* Left Panel - Code Editor */}
      <div
        style={{
          position: "absolute",
          top: "13.336px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "350px",
          height: "221px",
          background: "linear-gradient(180deg, var(--realtime-background-editor) 0%, transparent 100%)",
          backdropFilter: "blur(7.907px)",
          borderRadius: "9.488px",
          border: "1px solid var(--realtime-border-main)",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
        data-name="code-editor"
      >
        <div
          style={{
            padding: "9.488px 9.492px",
            height: "100%",
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
         <img src={ai.src} alt="" />
        </div>
      </div>



      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default RealtimeCodingPreviews
