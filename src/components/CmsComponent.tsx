import { BaseContentComponent, BlockContent, PageIntroContent, TextContentSection } from "@/models/contentModels"
import { PageIntro } from "./PageIntro"
import { title } from "process";
import { content } from "tailwindcss/defaultTheme";
import { PageIntroContentComponent } from "./PageIntoContent";
import { SectionWithGridList } from "./SectionWithGridList";


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
    }
}