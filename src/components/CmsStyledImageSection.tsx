import { BlockContent, CmsButton, CmsImage } from "@/models/contentModels"
import { Button } from "./Button";
import { StyledImageSection } from "./StyledImageSection";
import { urlForImage } from "../../sanity/lib/image";
import imageCity from '@/images/home-promo-images/home-promo-3.jpg'

export function CmsStyledImageSection({
    title,
    cmsImage,
    content,
    buttons
}: {
    title: string;
    cmsImage: CmsImage;
    content?: BlockContent[];
    buttons?: CmsButton[];
}) {
    return (
    <StyledImageSection title={title} image={{ src: urlForImage(cmsImage.image) }}>
        <div className="space-y-6 text-base text-neutral-600">
            {content?.map((contentItem, index) => (
                <p key={index}>{contentItem.children[0].text}</p>
            ))}
            {buttons?.map((button, index) => (
              <Button href={button.link} invert={button.invertedColor} target={button.target}>
                  {button.text}
              </Button>
            ))}
        </div>
    </StyledImageSection>
    )
}