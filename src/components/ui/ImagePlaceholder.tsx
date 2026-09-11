/**
 * Shown wherever the existing site references a media file that has been
 * deleted from its own library (those URLs 404 on ajfibertek.co.in too).
 * A neutral branded panel is served instead of a broken image.
 */
export default function ImagePlaceholder({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={[
        'grid h-full w-full place-items-center bg-navy-50 text-navy-200',
        className ?? '',
      ].join(' ')}
    >
      <svg
        viewBox="0 0 48 48"
        className="h-12 w-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="6" y="10" width="36" height="28" rx="3" />
        <circle cx="17" cy="20" r="3" />
        <path d="m9 34 11-11 8 8 6-5 5 5" />
      </svg>
    </div>
  );
}
