import { ImageResponse } from "next/og";

export const alt = "Satish Kumar Nagaraj — Data science, operations and performance analytics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "66px 74px", background: "#111512", color: "#f1f0e9", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#c7f36b", fontSize: 20, letterSpacing: 4 }}>
        <span style={{ width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #c7f36b" }}>SN</span>
        <span>PORTFOLIO / LONDON</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 83, fontWeight: 600, lineHeight: 1.02, letterSpacing: -5 }}>
        <span>SATISH KUMAR NAGARAJ</span>
        <span style={{ marginTop: 22, color: "#9bc8ff", fontSize: 31, fontWeight: 400, letterSpacing: 0 }}>DATA · OPERATIONS · PERFORMANCE</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #465047", paddingTop: 19, color: "#a9b1a6", fontSize: 17 }}>
        <span>DATA SCIENCE / OPERATIONS / SHITO-RYU KARATE / WEB</span>
        <span>51°30&apos; N</span>
      </div>
    </div>,
    size,
  );
}