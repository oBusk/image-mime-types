const MIMES = [
  "image/*",

  "image/aces",
  "image/avci",
  "image/avcs",
  "image/avif",
  "image/bmp",
  "image/cgm",
  "image/dicom-rle",
  "image/emf",
  "image/fits",
  "image/g3fax",
  "image/gif",
  "image/heic",
  "image/heic-sequence",
  "image/heif",
  "image/heif-sequence",
  "image/hej2k",
  "image/hsj2",
  "image/ief",
  "image/jls",
  "image/jp2",
  "image/jpeg",
  "image/jph",
  "image/jphc",
  "image/jpm",
  "image/jpx",
  "image/jxr",
  "image/jxra",
  "image/jxrs",
  "image/jxs",
  "image/jxsc",
  "image/jxsi",
  "image/jxss",
  "image/ktx",
  "image/ktx2",
  "image/png",
  "image/prs.btif",
  "image/prs.pti",
  "image/sgi",
  "image/svg+xml",
  "image/t38",
  "image/tiff",
  "image/tiff-fx",
  "image/vnd.adobe.photoshop",
  "image/vnd.airzip.accelerator.azv",
  "image/vnd.dece.graphic",
  "image/vnd.djvu",
  "image/vnd.dvb.subtitle",
  "image/vnd.dwg",
  "image/vnd.dxf",
  "image/vnd.fastbidsheet",
  "image/vnd.fpx",
  "image/vnd.fst",
  "image/vnd.fujixerox.edmics-mmr",
  "image/vnd.fujixerox.edmics-rlc",
  "image/vnd.microsoft.icon",
  "image/vnd.ms-modi",
  "image/vnd.ms-photo",
  "image/vnd.net-fpx",
  "image/vnd.pco.b16",
  "image/vnd.tencent.tap",
  "image/vnd.valve.source.texture",
  "image/vnd.wap.wbmp",
  "image/vnd.xiff",
  "image/vnd.zbrush.pcx",
  "image/webp",
  "image/wmf",
  "image/x-3ds",
  "image/x-cmu-raster",
  "image/x-cmx",
  "image/x-freehand",
  "image/x-icon",
  "image/x-jng",
  "image/x-mrsid-image",
  "image/x-ms-bmp",
  "image/x-pcx",
  "image/x-pict",
  "image/x-portable-anymap",
  "image/x-portable-bitmap",
  "image/x-portable-graymap",
  "image/x-portable-pixmap",
  "image/x-rgb",
  "image/x-tga",
  "image/x-xbitmap",
  "image/x-xpixmap",
  "image/x-xwindowdump",

  "video/*",

  "video/3gpp",
  "video/3gpp2",
  "video/h261",
  "video/h263",
  "video/h264",
  "video/iso.segment",
  "video/jpeg",
  "video/jpm",
  "video/mj2",
  "video/mp2t",
  "video/mp4",
  "video/mpeg",
  "video/ogg",
  "video/quicktime",
  "video/vnd.dece.hd",
  "video/vnd.dece.mobile",
  "video/vnd.dece.pd",
  "video/vnd.dece.sd",
  "video/vnd.dece.video",
  "video/vnd.dvb.file",
  "video/vnd.fvt",
  "video/vnd.mpegurl",
  "video/vnd.ms-playready.media.pyv",
  "video/vnd.uvvu.mp4",
  "video/vnd.vivo",
  "video/webm",
  "video/x-f4v",
  "video/x-fli",
  "video/x-flv",
  "video/x-m4v",
  "video/x-matroska",
  "video/x-mng",
  "video/x-ms-asf",
  "video/x-ms-vob",
  "video/x-ms-wm",
  "video/x-ms-wmv",
  "video/x-ms-wmx",
  "video/x-ms-wvx",
  "video/x-msvideo",
  "video/x-sgi-movie",
  "video/x-smv",
];

export default function Home() {
  return (
    <main>
      {MIMES.map((mime) => (
        <div className="p-4" key={mime}>
          <h4>{mime}</h4>
          <input type="file" accept={mime} />
        </div>
      ))}
    </main>
  );
}
