import { BgColorOption, BlockContent, ContentListItem } from "@/models/contentModels"
import Link from "next/link";
import { Container } from "./Container";
import { GridList, GridListItem } from "./GridList";
import { SectionIntro } from "./SectionIntro";


export function SectionWithGridList({
    eyebrow,
    title,
    subTitle,
    bgcolor,
    content,
    contentList
}: {
    eyebrow: string;
    title: string;
    subTitle: string;
    bgcolor: BgColorOption;
    content: BlockContent[];
    contentList: ContentListItem[];
}) {
    return (
        <div className="mt-24 rounded-4xl bg-sky-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
            <SectionIntro
            eyebrow={eyebrow}
            title={title}
            invert
            >
            <p>
                {subTitle}
            </p>
            </SectionIntro>
            {contentList.length > 0 &&
                <Container className="mt-16">
                    <GridList>
                        {contentList?.map((contentListItem: ContentListItem, index) => (
                            <GridListItem title={contentListItem.title} invert key={index}>
                                {contentListItem.text}
                            </GridListItem>
                        ))}
                    </GridList>
                </Container>
            }
        </div>
    )
}