import type React from "react"
import ai from "@/public/images/Designer (3).jpeg"
import { AlignCenter } from "lucide-react"

interface OneClickIntegrationsIllustrationProps {
  className?: string
}

const OneClickIntegrationsIllustration: React.FC<OneClickIntegrationsIllustrationProps> = ({ className = "" }) => {
  const themeVars = {
    "--oci-primary-color": "hsl(var(--primary))",
    "--oci-background-color": "hsl(var(--background))",
    "--oci-foreground-color": "hsl(var(--foreground))",
    "--oci-muted-foreground-color": "hsl(var(--muted-foreground))",
    "--oci-border-color": "hsl(var(--border))",
    "--oci-shadow-color": "rgba(0, 0, 0, 0.12)",
    "--oci-gradient-light-gray-start": "hsl(var(--foreground) / 0.2)",
    "--oci-gradient-light-gray-end": "transparent",
  } as React.CSSProperties

  // Helper component for rendering each logo box
  const LogoBox: React.FC<{
    logoSvg?: React.ReactNode
    isGradientBg?: boolean
  }> = ({ logoSvg, isGradientBg }) => {
    const boxStyle: React.CSSProperties = {
      width: "60px",
      height: "60px",
      position: "relative",
      borderRadius: "9px",
      border: `1px ${themeVars["--oci-border-color"]} solid`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      flexShrink: 0,
    }

    const innerContentStyle: React.CSSProperties = {
      width: "36px",
      height: "36px",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }

    if (isGradientBg) {
      boxStyle.background = `linear-gradient(180deg, ${themeVars["--oci-gradient-light-gray-start"]} 0%, ${themeVars["--oci-gradient-light-gray-end"]} 100%)`
      boxStyle.boxShadow = `0px 1px 2px ${themeVars["--oci-shadow-color"]}`
      boxStyle.backdropFilter = "blur(18px)"
      boxStyle.padding = "6px 8px"
    }

    return <div style={boxStyle}>{logoSvg && <div style={innerContentStyle}>{logoSvg}</div>}</div>
  }

  
  
 

 

  return (
    <div
      className={`w-full h-full relative ${className}`}
      style={{
        ...themeVars,
      }}
      role="img"
      aria-label="One-click integrations illustration showing a grid of connected squares"
    >
      {/* Background radial gradient */}
      <div
        style={{
          width: "377.33px",
          height: "278.08px",
          left: "0px",
          top: "24px",
          position: "absolute",
          background: `radial-gradient(ellipse 103.87% 77.04% at 52.56% -1.80%, 
            ${themeVars["--oci-foreground-color"]}00 0%, 
            ${themeVars["--oci-foreground-color"]}F5 15%, 
            ${themeVars["--oci-foreground-color"]}66 49%, 
            ${themeVars["--oci-foreground-color"]}F5 87%, 
            ${themeVars["--oci-foreground-color"]}00 100%)`,
        }}
      />

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
              top: "13.336px",
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

export default OneClickIntegrationsIllustration
