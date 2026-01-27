import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1a1a1a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "40px",
        }}
      >
        <svg
          width="140"
          height="160"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C7.6 2 4 5.6 4 10C4 12.8 5.5 15.3 7.8 16.7C8.1 16.9 8.3 17.2 8.4 17.6L9 21H15L15.6 17.6C15.7 17.2 15.9 16.9 16.2 16.7C18.5 15.3 20 12.8 20 10C20 5.6 16.4 2 12 2Z"
            fill="#b8860b"
          />
          <rect x="9" y="22" width="6" height="1.5" rx="0.75" fill="#d4a84b" />
          <rect x="9" y="24.5" width="6" height="1.5" rx="0.75" fill="#d4a84b" />
          <path
            d="M10 8C10 6.9 10.9 6 12 6"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </div>
    ),
    {
      width: 192,
      height: 192,
    }
  );
}
