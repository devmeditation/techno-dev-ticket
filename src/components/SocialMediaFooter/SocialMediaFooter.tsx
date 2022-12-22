import { SocialMediaShareButton } from "../SocialMediaShareButton/SocialMediaShareButton";
import styles from "./socialMediaFooter.module.css";

interface SocialMediaFooterProps {
  shareMessage: string;
  shareUrl: string;
  twitterShareMessage: string;
}

export function SocialMediaFooter({ shareMessage, shareUrl, twitterShareMessage }: SocialMediaFooterProps) {
  return(
    <footer className={styles.socialMediaFooter}>
          <SocialMediaShareButton
            href={`https://wa.me/?text=${shareMessage}`}
            target="_blank"
            imageIcon="/icons/whatsapp.svg"
            imageAlt="Compartilhar no whatsapp"
          />
          
          <SocialMediaShareButton
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
            imageIcon="/icons/linkedin.svg" 
            imageAlt="Compartilhar no linkedin" 
          />
          
          <SocialMediaShareButton
            href={`http://twitter.com/share?text=${twitterShareMessage}&url=${shareUrl}`}
            
            imageIcon="/icons/twitter.svg" 
            imageAlt="Compartilhar no twitter" 
          />
          

          <SocialMediaShareButton
            href={`http://www.facebook.com/sharer/sharer.php?t=${twitterShareMessage}`}
            // href={`http://www.facebook.com/sharer/sharer.php?u=${shareUrl}&t=${twitterShareMessage}`}
            rel="noopener noreferrer"
            imageIcon="/icons/facebook.svg" 
            imageAlt="Compartilhar no facebook" 
          />
          
        </footer>
  )
}