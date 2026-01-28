import type React from "react"
import { Search } from "lucide-react"
import ai from "@/public/images/Designer (4).jpeg"

interface McpConnectivityIllustrationProps {
  className?: string
}

const McpConnectivityIllustration: React.FC<McpConnectivityIllustrationProps> = ({ className = "" }) => {
  // Integration data with new SVG paths
  const integrations = [
    { name: "Figma", icon: "/images/mcp-integrations/figma.svg", installed: true },
    { name: "Shadcn UI", icon: "/images/mcp-integrations/shadcn.svg" },
    { name: "Next.js", icon: "/images/mcp-integrations/nextjs.svg", installed: true },
    { name: "Tailwind CSS", icon: "/images/mcp-integrations/tailwind-css.svg" },
    { name: "Resend", icon: "/images/mcp-integrations/resend.svg", installed: true },
    { name: "React", icon: "/images/mcp-integrations/react.svg" },
  ]

  return (
    <div
      className={`w-full h-full flex items-center justify-center p-4 relative ${className}`}
      role="img"
      aria-label="MCP Connectivity component showcasing installed integrations list"
    >
      {/* Main Message Box */}
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

export default McpConnectivityIllustration
