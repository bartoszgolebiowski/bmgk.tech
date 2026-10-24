import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const baseProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export const CodeIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="m9 18-6-6 6-6" />
    <path d="m15 6 6 6-6 6" />
  </svg>
);

export const MonitorIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
  </svg>
);

export const GlobeIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18" />
    <path d="M12 3a14 14 0 0 0 0 18" />
  </svg>
);

export const CpuIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
    <path d="M9 2v4" />
    <path d="M15 2v4" />
    <path d="M9 18v4" />
    <path d="M15 18v4" />
    <path d="M2 9h4" />
    <path d="M2 15h4" />
    <path d="M18 9h4" />
    <path d="M18 15h4" />
  </svg>
);

export const LayersIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="m12 2 9 5-9 5-9-5 9-5Z" />
    <path d="m3 12 9 5 9-5" />
    <path d="m3 17 9 5 9-5" />
  </svg>
);

export const PlugIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M9 2v6" />
    <path d="M15 2v6" />
    <path d="M6 8h12v3a6 6 0 0 1-12 0V8Z" />
    <path d="M12 17v5" />
  </svg>
);

export const ClockIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const SparklesIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="m12 3 1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" />
    <path d="M18 15.5 19 18l2.5 1-2.5 1-1 2.5-1-2.5L14.5 19l2.5-1 1-2.5Z" />
  </svg>
);

export const CompassIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="m16 8-2.3 5.7L8 16l2.3-5.7L16 8Z" />
  </svg>
);

export const CheckIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="m5 12 4 4L19 6" />
  </svg>
);

export const ArrowRightIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const ArrowUpIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M12 19V5" />
    <path d="m6 11 6-6 6 6" />
  </svg>
);

export const MailIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const ExternalLinkIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M14 4h6v6" />
    <path d="M20 4 10 14" />
    <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
  </svg>
);

export const MenuIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </svg>
);

export const CloseIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </svg>
);

export const DownloadIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  </svg>
);

export const UploadIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M12 16V4" />
    <path d="m7 9 5-5 5 5" />
    <path d="M5 20h14" />
  </svg>
);

export const SlidersIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M4 7h10" />
    <path d="M18 7h2" />
    <circle cx="16" cy="7" r="2" />
    <path d="M4 17h2" />
    <path d="M10 17h10" />
    <circle cx="8" cy="17" r="2" />
  </svg>
);

export const ArchiveIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <rect x="3" y="4" width="18" height="4" rx="1" />
    <path d="M5 8v12h14V8" />
    <path d="M10 12h4" />
  </svg>
);

export const ImportIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M14 3h5v18H5V3h5" />
    <path d="M12 7v8" />
    <path d="m8 11 4 4 4-4" />
  </svg>
);
