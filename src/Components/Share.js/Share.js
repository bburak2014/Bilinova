import React from "react";
import {
  FacebookShareButton,
  WhatsappShareButton,
  EmailShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappIcon,
  FacebookIcon,
  EmailIcon,
  LinkedinIcon,
  TelegramIcon,
} from "react-share";
const shareUrl = "https://www.google.com/";

function Share() {
  return (
    <>
      <FacebookShareButton
        url={shareUrl}
        quote={"Title or jo bhi aapko likhna ho"}
        hashtag={"#portfolio..."}
      >
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>

      <WhatsappShareButton
        url={shareUrl}
        quote={"Title or jo bhi aapko likhna ho"}
        hashtag={"#portfolio..."}
      >
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>
      <EmailShareButton
        url={shareUrl}
        quote={"Title or jo bhi aapko likhna ho"}
        hashtag={"#portfolio..."}
      >
        <EmailIcon size={40} round={true} />
      </EmailShareButton>
      <LinkedinShareButton
        url={shareUrl}
        quote={"Title or jo bhi aapko likhna ho"}
        hashtag={"#portfolio..."}
      >
        <LinkedinIcon size={40} round={true} />
      </LinkedinShareButton>
      <TelegramShareButton
        url={shareUrl}
        quote={"Title or jo bhi aapko likhna ho"}
        hashtag={"#portfolio..."}
      >
        <TelegramIcon size={40} round={true} />
      </TelegramShareButton>
    </>
  );
}

export default Share;
