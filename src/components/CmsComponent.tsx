import { PageIntroContent, StyledImageSection, TextContentSection } from "@/models/contentModels"
import { PageIntroContentComponent } from "./PageIntoContent";
import { SectionWithGridList } from "./SectionWithGridList";
import { CmsStyledImageSection } from "./CmsStyledImageSection";


export function CmsComponent({
    cmsComponent,
    type
}: {
    cmsComponent: any;
    type: string;
}) {
    if (type === "pageIntro") {
        let componentContent: PageIntroContent = cmsComponent;
        return (
            <PageIntroContentComponent 
                eyebrow={componentContent.eyebrow}
                title={componentContent.title}
                subTitle={componentContent.subTitle}
                content={componentContent.content} />
        )
    } else if (type === "textContent") {
        let componentContent: TextContentSection = cmsComponent;
        return (
            <SectionWithGridList 
                eyebrow={componentContent.eyebrow}
                title={componentContent.title}
                bgcolor={componentContent.bgcolor}
                subTitle={componentContent.subTitle}
                content={componentContent.content}
                contentList={componentContent.contentList} />
        )
    }  else if (type === "styledImageSection") {
        let componentContent: StyledImageSection = cmsComponent;
        return (
            <CmsStyledImageSection 
                title={componentContent.title}
                cmsImage={componentContent.image}
                content={componentContent.content}
                buttons={componentContent.buttons} />
        )
    }
}