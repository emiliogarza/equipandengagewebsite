import { BlockContent } from "@/models/contentModels"
import { PageIntro } from "./PageIntro"


export function PageIntroContentComponent({
    eyebrow,
    title,
    subTitle,
    content
}: {
    eyebrow?: string;
    title: string;
    subTitle?: string;
    content?: BlockContent[];
}) {
    return (
        <PageIntro eyebrow={eyebrow ? eyebrow : ''} title={title}>
        <p>
          {subTitle}
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
            {content?.map((contentItem, index) => (
                <p key={index}>{contentItem.children[0].text}</p>
            ))}
        </div>
      </PageIntro>
    )
}