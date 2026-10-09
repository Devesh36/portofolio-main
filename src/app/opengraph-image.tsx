import { DATA } from "@/data/resume";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = `${DATA.name} — ${DATA.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // The local portrait is a PNG despite its .jpeg filename. Embed it so
  // crawlers never depend on another image host.
  const portrait = await readFile(join(process.cwd(), "public", DATA.avatarUrl));

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px",
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "sans-serif",
          border: "1px solid #27272a",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#a1a1aa",
            fontSize: 26,
          }}
        >
          <span>{new URL(DATA.url).hostname}</span>
          <span>Portfolio</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: "-3px" }}>
              {DATA.name}
            </div>
            <div
              style={{
                marginTop: 20,
                fontSize: 28,
                lineHeight: 1.4,
                color: "#d4d4d8",
              }}
            >
              {DATA.role}
            </div>
          </div>
          {/* ImageResponse embeds these bytes in the generated PNG. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/png;base64,${portrait.toString("base64")}`}
            alt={DATA.name}
            width={176}
            height={176}
            style={{ borderRadius: 24, objectFit: "cover" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            borderTop: "1px solid #27272a",
            paddingTop: 28,
            color: "#a1a1aa",
            fontSize: 25,
          }}
        >
          {DATA.focus[0].value}
        </div>
      </div>
    ),
    size
  );
}
