import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { QrCode, Copy, Check } from "lucide-react";

export default function ShareQR({ compact = false }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.origin : "https://crokotech.com";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="bg-white border border-border rounded-2xl p-5 card-hover">
      <div className="flex items-center gap-2 text-[#0f7a4d] font-semibold mb-4">
        <QrCode size={20} /> Partagez notre site
      </div>
      <div className="flex items-center gap-5">
        <div className="p-3 rounded-2xl croco-gradient shrink-0">
          <div className="bg-white p-2 rounded-xl">
            <QRCodeSVG
              value={url}
              size={compact ? 96 : 120}
              level="M"
              fgColor="#0b3d2c"
              bgColor="#ffffff"
            />
          </div>
        </div>
        <div className="min-w-0">
          <p className="text-sm text-slate-600 leading-relaxed">
            Scannez ce QR code avec votre téléphone pour ouvrir le site, ou copiez le lien.
          </p>
          <button
            onClick={copy}
            className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#0f7a4d]/30 text-[#0f7a4d] hover:bg-[#0f7a4d]/5 transition-colors px-4 py-2 text-sm font-medium"
          >
            {copied ? (<><Check size={16} /> Lien copié !</>) : (<><Copy size={16} /> Copier le lien</>)}
          </button>
        </div>
      </div>
    </div>
  );
}
