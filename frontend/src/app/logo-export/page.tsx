"use client";

import React, { useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Download, Loader2 } from "lucide-react";

export default function LogoExportPage() {
  const [exporting, setExporting] = useState(false);
  const [format, setFormat] = useState<"png" | "jpeg" | "pdf">("png");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [logoType, setLogoType] = useState<"icon" | "full">("full");
  const [size, setSize] = useState("1024");

  // Light theme V icon (from Navigation)
  const renderLightIcon = () => {
    // Scale down for preview (max 300px width)
    const previewWidth = Math.min(parseInt(size), 300);
    const previewHeight = Math.floor(previewWidth * 0.833);

    return (
      <svg
        width={previewWidth}
        height={previewHeight}
        viewBox="0 0 60 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0 L20 0 L30 50 Z" fill="#697184" />
        <path d="M40 0 L60 0 L30 50 Z" fill="#413F3D" />
      </svg>
    );
  };

  // Dark theme V icon (from Footer)
  const renderDarkIcon = () => {
    // Scale down for preview (max 300px width)
    const previewWidth = Math.min(parseInt(size), 300);
    const previewHeight = Math.floor(previewWidth * 0.833);

    return (
      <svg
        width={previewWidth}
        height={previewHeight}
        viewBox="0 0 60 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0 L20 0 L30 50 Z" fill="#697184" />
        <path d="M40 0 L60 0 L30 50 Z" fill="#F2F1EF" />
      </svg>
    );
  };

  // Light theme full logo (from Navigation)
  const renderLightFullLogo = () => {
    // Scale down for preview (max 350px base)
    const baseSize = 400;
    const maxPreviewSize = 350;
    const scale = Math.min(
      parseInt(size) / baseSize,
      maxPreviewSize / baseSize
    );

    return (
      <div
        className="flex items-end gap-1 origin-center"
        style={{ transform: `scale(${scale})` }}
      >
        <svg
          width="42"
          height="42"
          viewBox="0 0 60 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-md block mb-0.5"
        >
          <path d="M0 0 L20 0 L30 50 Z" fill="#697184" />
          <path d="M40 0 L60 0 L30 50 Z" fill="#413F3D" />
        </svg>
        <div className="flex flex-col pb-0.5">
          <span className="text-[32px] leading-none font-normal text-[#413F3D] tracking-[-0.05em] font-georgia-serif">
            irtuServe
          </span>
          <span className="text-[8px] font-light text-[#697184] tracking-[0.4em] uppercase mt-0.5 opacity-80 font-arial-sans">
            EXCELLENCE DELIVERED
          </span>
        </div>
      </div>
    );
  };

  // Dark theme full logo (from Footer)
  const renderDarkFullLogo = () => {
    // Scale down for preview (max 350px base)
    const baseSize = 400;
    const maxPreviewSize = 350;
    const scale = Math.min(
      parseInt(size) / baseSize,
      maxPreviewSize / baseSize
    );

    return (
      <div
        className="flex items-end gap-1.5 origin-center"
        style={{ transform: `scale(${scale})` }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 60 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-xl block mb-1"
        >
          <path d="M0 0 L20 0 L30 50 Z" fill="#697184" />
          <path d="M40 0 L60 0 L30 50 Z" fill="#F2F1EF" />
        </svg>
        <div className="flex flex-col pb-1">
          <span className="text-[36px] leading-none font-normal text-[#F2F1EF] tracking-[-0.05em] font-georgia-serif">
            irtuServe
          </span>
          <span className="text-[9px] font-light text-[#B1A6A4] tracking-[0.4em] uppercase mt-1 opacity-90 font-arial-sans">
            EXCELLENCE DELIVERED
          </span>
        </div>
      </div>
    );
  };

  const exportLogo = async () => {
    setExporting(true);
    try {
      // Create a temporary container for full-size export
      const exportContainer = document.createElement("div");
      exportContainer.style.position = "absolute";
      exportContainer.style.left = "-9999px";
      exportContainer.style.display = "flex";
      exportContainer.style.justifyContent = "center";
      exportContainer.style.alignItems = "center";
      document.body.appendChild(exportContainer);

      // Render full-size logo
      const targetSize = parseInt(size);

      // Set container dimensions based on logo type
      if (logoType === "icon") {
        exportContainer.style.width = `${targetSize}px`;
        exportContainer.style.height = `${Math.floor(targetSize * 0.833)}px`;
      } else {
        exportContainer.style.width = `${targetSize * 2.5}px`;
        exportContainer.style.height = `${Math.floor(targetSize * 0.6)}px`;
      }

      if (logoType === "icon") {
        const targetHeight = Math.floor(targetSize * 0.833);
        const svg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        svg.setAttribute("width", targetSize.toString());
        svg.setAttribute("height", targetHeight.toString());
        svg.setAttribute("viewBox", "0 0 60 50");
        svg.setAttribute("fill", "none");

        const path1 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        path1.setAttribute("d", "M0 0 L20 0 L30 50 Z");
        path1.setAttribute("fill", "#697184");

        const path2 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        path2.setAttribute("d", "M40 0 L60 0 L30 50 Z");
        path2.setAttribute("fill", theme === "light" ? "#413F3D" : "#F2F1EF");

        svg.appendChild(path1);
        svg.appendChild(path2);
        exportContainer.appendChild(svg);
      } else {
        // Full logo - create at actual size (no transform/scale for perfect alignment)
        const targetScale = targetSize / 400;

        // Calculate actual sizes based on scale
        const svgSize = Math.round((theme === "light" ? 42 : 48) * targetScale);
        const fontSize = Math.round(
          (theme === "light" ? 32 : 36) * targetScale
        );
        const taglineSize = Math.round(
          (theme === "light" ? 8 : 9) * targetScale
        );
        const gap = Math.round((theme === "light" ? 4 : 6) * targetScale);
        const svgMarginBottom = Math.round(
          (theme === "light" ? -10 : -10) * targetScale
        );
        const textPadding = Math.round(
          (theme === "light" ? 2 : 4) * targetScale
        );
        const taglineMargin = Math.round(
          (theme === "light" ? 4 : 8) * targetScale
        );

        // Main container - matches Navigation/Footer structure exactly
        const logoDiv = document.createElement("div");
        logoDiv.style.display = "flex";
        logoDiv.style.alignItems = "flex-end";
        logoDiv.style.gap = `${gap}px`;

        // SVG - directly with margin (matches Footer structure)
        const svg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        svg.setAttribute("width", svgSize.toString());
        svg.setAttribute("height", svgSize.toString());
        svg.setAttribute("viewBox", "0 0 60 50");
        svg.setAttribute("fill", "none");
        svg.style.display = "block";
        svg.style.marginBottom = `${svgMarginBottom}px`;

        const path1 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        path1.setAttribute("d", "M0 0 L20 0 L30 50 Z");
        path1.setAttribute("fill", "#697184");

        const path2 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        path2.setAttribute("d", "M40 0 L60 0 L30 50 Z");
        path2.setAttribute("fill", theme === "light" ? "#413F3D" : "#F2F1EF");

        svg.appendChild(path1);
        svg.appendChild(path2);
        logoDiv.appendChild(svg);

        // Text wrapper - EXACT copy of Navigation/Footer
        const textWrapper = document.createElement("div");
        textWrapper.style.display = "flex";
        textWrapper.style.flexDirection = "column";
        textWrapper.style.paddingBottom = `${textPadding}px`;

        // Main text
        const mainText = document.createElement("span");
        mainText.textContent = "irtuServe";
        mainText.style.fontFamily = "Georgia, serif";
        mainText.style.fontSize = `${fontSize}px`;
        mainText.style.lineHeight = "1";
        mainText.style.color = theme === "light" ? "#413F3D" : "#F2F1EF";
        mainText.style.letterSpacing = "-0.05em";
        mainText.style.fontWeight = "400";

        // Tagline
        const tagline = document.createElement("span");
        tagline.textContent = "EXCELLENCE DELIVERED";
        tagline.style.fontFamily = "Arial, Helvetica, sans-serif";
        tagline.style.fontSize = `${taglineSize}px`;
        tagline.style.fontWeight = "300";
        tagline.style.color = theme === "light" ? "#697184" : "#B1A6A4";
        tagline.style.letterSpacing = "0.4em";
        tagline.style.textTransform = "uppercase";
        tagline.style.marginTop = `${taglineMargin}px`;
        tagline.style.opacity = theme === "light" ? "0.8" : "0.9";

        textWrapper.appendChild(mainText);
        textWrapper.appendChild(tagline);
        logoDiv.appendChild(textWrapper);
        exportContainer.appendChild(logoDiv);
      }

      // Capture and export
      const canvas = await html2canvas(exportContainer, {
        backgroundColor:
          format === "png" ? null : theme === "light" ? "#FFFFFF" : "#413F3D",
        scale: 2,
        width: logoType === "icon" ? targetSize : targetSize * 2.5,
        height:
          logoType === "icon"
            ? Math.floor(targetSize * 0.833)
            : Math.floor(targetSize * 0.6),
      });

      // Clean up temp container
      document.body.removeChild(exportContainer);

      if (format === "pdf") {
        // Export as PDF
        const imgData = canvas.toDataURL("image/png");
        const pdfWidth = logoType === "icon" ? targetSize : targetSize * 2.5;
        const pdfHeight =
          logoType === "icon"
            ? Math.floor(targetSize * 0.833)
            : Math.floor(targetSize * 0.6);

        // Convert pixels to mm for PDF (assuming 96 DPI)
        const widthMM = pdfWidth * 0.264583;
        const heightMM = pdfHeight * 0.264583;

        const pdf = new jsPDF({
          orientation: widthMM > heightMM ? "landscape" : "portrait",
          unit: "mm",
          format: [widthMM, heightMM],
        });

        pdf.addImage(imgData, "PNG", 0, 0, widthMM, heightMM);
        pdf.save(`virtuserve-${logoType}-${theme}-${size}px.pdf`);
      } else {
        // Export as PNG or JPEG
        canvas.toBlob((blob) => {
          if (!blob) return;
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.download = `virtuserve-${logoType}-${theme}-${size}px.${format}`;
          link.href = url;
          link.click();
          URL.revokeObjectURL(url);
        }, `image/${format}`);
      }
    } catch (error) {
      console.error("Export failed:", error);
    } finally {
      setExporting(false);
    }
  };

  const downloadSVG = () => {
    const targetSize = parseInt(size);
    const targetHeight = Math.floor(targetSize * 0.833);

    // Generate SVG content
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${targetSize}" height="${targetHeight}" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0 L20 0 L30 50 Z" fill="#697184"/>
  <path d="M40 0 L60 0 L30 50 Z" fill="${theme === "light" ? "#413F3D" : "#F2F1EF"}"/>
</svg>`;

    const blob = new Blob([svgContent], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `virtuserve-${logoType}-${theme}-${size}px.svg`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2F1EF] via-white to-[#D8CFD0] pt-32 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#413F3D] mb-4">
            VirtuServe Logo Export
          </h1>
          <p className="text-[#697184] text-lg">
            Export logos exactly as they appear in the Navigation and Footer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-[#413F3D] mb-6">
              Export Settings
            </h2>

            {/* Logo Type */}
            <div>
              <label className="block text-sm font-medium text-[#413F3D] mb-2">
                Logo Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setLogoType("icon")}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    logoType === "icon"
                      ? "bg-[#697184] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  V Icon Only
                </button>
                <button
                  onClick={() => setLogoType("full")}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    logoType === "full"
                      ? "bg-[#697184] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Full Logo
                </button>
              </div>
            </div>

            {/* Theme */}
            <div>
              <label className="block text-sm font-medium text-[#413F3D] mb-2">
                Theme
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setTheme("light")}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    theme === "light"
                      ? "bg-white border-2 border-[#697184] text-[#413F3D]"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Light
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    theme === "dark"
                      ? "bg-[#413F3D] text-white border-2 border-[#697184]"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Dark
                </button>
              </div>
            </div>

            {/* Size */}
            <div>
              <label className="block text-sm font-medium text-[#413F3D] mb-2">
                Size (width in pixels)
              </label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#697184] focus:border-transparent"
                aria-label="Size (width in pixels)"
              >
                <option value="320">320px (Instagram Profile)</option>
                <option value="400">400px (LinkedIn Profile)</option>
                <option value="512">512px</option>
                <option value="820">820px (Facebook Cover Width)</option>
                <option value="1024">1024px</option>
                <option value="1584">1584px (LinkedIn Cover Width)</option>
                <option value="1920">1920px (Desktop)</option>
                <option value="3200">3200px (Print)</option>
              </select>
            </div>

            {/* Format */}
            <div>
              <label className="block text-sm font-medium text-[#413F3D] mb-2">
                Format
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setFormat("png")}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    format === "png"
                      ? "bg-[#697184] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  PNG
                </button>
                <button
                  onClick={() => setFormat("jpeg")}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    format === "jpeg"
                      ? "bg-[#697184] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  JPEG
                </button>
                <button
                  onClick={() => setFormat("pdf")}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    format === "pdf"
                      ? "bg-[#697184] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  PDF
                </button>
              </div>
            </div>

            {/* Export Buttons */}
            <div className="space-y-3 pt-4">
              <button
                onClick={exportLogo}
                disabled={exporting}
                className="w-full bg-gradient-to-r from-[#697184] to-[#413F3D] text-white px-6 py-4 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {exporting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Exporting...
                  </>
                ) : (
                  <>
                    <Download size={20} />
                    Export as {format.toUpperCase()}
                  </>
                )}
              </button>

              {logoType === "icon" && (
                <button
                  onClick={downloadSVG}
                  className="w-full bg-white border-2 border-[#697184] text-[#697184] px-6 py-4 rounded-lg font-semibold hover:bg-[#697184] hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Export as SVG (Vector)
                </button>
              )}
            </div>
          </div>

          {/* Preview */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-[#413F3D] mb-6">
              Preview
            </h2>

            <div
              className={`rounded-xl p-12 flex items-center justify-center min-h-[400px] ${
                theme === "light" ? "bg-white" : "bg-[#413F3D]"
              }`}
            >
              <div
                id="logo-preview"
                className="w-full h-full flex items-center justify-center"
              >
                {logoType === "icon"
                  ? theme === "light"
                    ? renderLightIcon()
                    : renderDarkIcon()
                  : theme === "light"
                    ? renderLightFullLogo()
                    : renderDarkFullLogo()}
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Current Settings:</strong>
                <br />
                Type: {logoType === "icon" ? "V Icon Only" : "Full Logo"}
                <br />
                Theme: {theme === "light" ? "Light" : "Dark"}
                <br />
                Size: {size}px
                <br />
                Format: {format.toUpperCase()}
              </p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-xl font-semibold text-[#413F3D] mb-4">
            Usage Guide
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
            <div>
              <h4 className="font-semibold text-[#697184] mb-2">
                Social Media Profiles
              </h4>
              <p>
                Use <strong>V Icon Only</strong> for profile pictures. Choose
                the theme based on your profile background.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#697184] mb-2">
                Covers & Banners
              </h4>
              <p>
                Use <strong>Full Logo</strong> for cover photos. Light theme for
                professional, dark theme for modern.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#697184] mb-2">Print & Web</h4>
              <p>
                PNG for web (transparent), JPEG for compatibility, PDF for print
                and presentations. SVG for unlimited scaling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
