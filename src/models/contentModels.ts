export interface Page {
    _type: string;
    title: string;
    slug: {
        _type: string;
        current: string;
    };
    pageContent: (PageIntroContent | TextContentSection)[];
}

export interface BaseContentComponent {
    _type: string;
    title: string;
}

export interface PageIntroContent extends BaseContentComponent {
    subTitle: string;
    eyebrow: string;
    content: BlockContent[]
}

export interface TextContentSection extends BaseContentComponent {
    subTitle: string;
    eyebrow: string;
    bgcolor: BgColorOption;
    content: BlockContent[];
    contentList: ContentListItem[];
}

export interface ContentListItem {
    _type: string;
    title: string;
    text: string;
    link: CmsLink;
    contentListItemText: BlockContent[];
}

export enum BgColorOption {
    DARK_BLUE = 'darkBlue',
    BLACK = 'black',
    WHITE = 'white'
}

export interface CmsLink {
    text: string;
    link: string;
}


export interface BlockContent {
    _type: string;
    _key: string;
    children: Block[];
}

export interface Block {
    marks?: string[];
    text: string;
    _type: string;
    _key: string;
}