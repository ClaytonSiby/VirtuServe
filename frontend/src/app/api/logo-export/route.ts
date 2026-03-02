import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { logoType, theme, size, format } = await request.json();

        // Validate inputs
        if (!["icon", "full"].includes(logoType)) {
            return NextResponse.json(
                { error: "Invalid logo type" },
                { status: 400 }
            );
        }

        if (!["light", "dark"].includes(theme)) {
            return NextResponse.json({ error: "Invalid theme" }, { status: 400 });
        }

        // Generate SVG content based on parameters
        let svgContent = "";

        if (logoType === "icon") {
            const width = parseInt(size);
            const height = Math.floor(width * 0.833);

            if (theme === "light") {
                svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0 L20 0 L30 50 Z" fill="#697184"/>
  <path d="M40 0 L60 0 L30 50 Z" fill="#413F3D"/>
</svg>`;
            } else {
                svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0 L20 0 L30 50 Z" fill="#697184"/>
  <path d="M40 0 L60 0 L30 50 Z" fill="#F2F1EF"/>
</svg>`;
            }
        } else {
            // Full logo
            const width = parseInt(size);
            const height = Math.floor(width * 0.3); // Approximate aspect ratio

            if (theme === "light") {
                svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- V Icon -->
  <path d="M0 20 L20 20 L30 70 Z" fill="#697184"/>
  <path d="M40 20 L60 20 L30 70 Z" fill="#413F3D"/>
  
  <!-- VirtuServe Text -->
  <text x="70" y="60" font-family="Georgia, serif" font-size="38" fill="#413F3D" letter-spacing="-0.05em">irtuServe</text>
  
  <!-- Tagline -->
  <text x="70" y="75" font-family="Arial, Helvetica, sans-serif" font-size="8.5" fill="#697184" letter-spacing="0.4em" opacity="0.8">EXCELLENCE DELIVERED</text>
</svg>`;
            } else {
                svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- V Icon -->
  <path d="M0 20 L20 20 L30 70 Z" fill="#697184"/>
  <path d="M40 20 L60 20 L30 70 Z" fill="#F2F1EF"/>
  
  <!-- VirtuServe Text -->
  <text x="70" y="60" font-family="Georgia, serif" font-size="38" fill="#F2F1EF" letter-spacing="-0.05em">irtuServe</text>
  
  <!-- Tagline -->
  <text x="70" y="75" font-family="Arial, Helvetica, sans-serif" font-size="8.5" fill="#B1A6A4" letter-spacing="0.4em" opacity="0.9">EXCELLENCE DELIVERED</text>
</svg>`;
            }
        }

        // Return SVG
        if (format === "svg") {
            return new NextResponse(svgContent, {
                headers: {
                    "Content-Type": "image/svg+xml",
                    "Content-Disposition": `attachment; filename="virtuserve-${logoType}-${theme}-${size}px.svg"`,
                },
            });
        }

        // For other formats, return SVG and let client handle conversion
        return NextResponse.json({
            success: true,
            svg: svgContent,
            filename: `virtuserve-${logoType}-${theme}-${size}px`,
        });
    } catch (error) {
        console.error("Logo export error:", error);
        return NextResponse.json(
            { error: "Failed to generate logo" },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json({
        message: "VirtuServe Logo Export API",
        endpoints: {
            POST: "Generate and download logo",
        },
        params: {
            logoType: ["icon", "full"],
            theme: ["light", "dark"],
            size: "number (width in pixels)",
            format: ["svg", "png", "jpeg"],
        },
    });
}
