import type { Image } from 'sanity'

export interface Page {
    _type: string;
    title: string;
    slug: {
        _type: string;
        current: string;
    };
    pageContent: (BaseContentComponent)[];
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

export interface StyledImageSection extends BaseContentComponent {
    image: CmsImage;
    buttons: CmsButton[];
    content: BlockContent[];
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
    target: string;
}

export interface CmsButton {
    text: string;
    link: string;
    target?: string;
    invertedColor: boolean;
}

export interface CmsImage {
    _type: string;
    image: Image;
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