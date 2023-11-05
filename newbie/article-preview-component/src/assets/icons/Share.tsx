import React from 'react';

export type SVGProps = React.PropsWithoutRef<JSX.IntrinsicElements['svg']> & {
  accessibilityTitle: string;
  accessibilityDesc?: {
    descId: string;
    desc: string;
  };
  titleId: string;
};

export default function Pinterest({
  accessibilityDesc,
  accessibilityTitle,
  titleId,
  ...props
}: SVGProps) {
  return (
    <svg
      className={props.className}
      width="15"
      height="13"
      fill="none"
      viewBox="0 0 15 13"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={titleId}>{accessibilityTitle}</title>
      {accessibilityDesc && (
        <desc id={accessibilityDesc.descId}>{accessibilityDesc.desc}</desc>
      )}

      <path
        fill="#6E8098"
        d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
      />
    </svg>
  );
}
