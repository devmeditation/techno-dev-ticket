import { AnchorHTMLAttributes } from "react";
import styles from "./socialMediaShareButton.module.css";

interface SocialMediaShareButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  imageIcon?: string;
  imageAlt?: string;
}

export function SocialMediaShareButton({
  imageIcon,
  imageAlt,
  ...rest
}: SocialMediaShareButtonProps) {
  return (
    <a
      {...rest}

      target="_blank"
      rel="noopener noreferrer"
      className={styles.socialMediaShareButton}
    >
      <img src={imageIcon} alt={imageAlt} />
    </a>
  );
}
