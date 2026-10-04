import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Revanth Ajoe — AI/ML Engineer & Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111315",
          color: "#e8eceb",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "80px",
          width: "100%",
        }}
      >
        <div style={{ color: "#9ec8c3", fontSize: 28, marginBottom: 24 }}>revanthajoe.github.io</div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>Revanth Ajoe</div>
        <div style={{ color: "#b8c0be", fontSize: 36, marginTop: 22 }}>AI/ML Engineer &amp; Software Developer</div>
      </div>
    ),
    size,
  );
}
