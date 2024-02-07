import { type Metadata } from 'next'

import { client } from '../../../sanity/lib/client'
import { Page } from '@/models/contentModels'
import { CmsComponent } from '@/components/CmsComponent'

export const metadata: Metadata = {
  title: 'About us',
  description:
    'Equip and Engage INC. is a non-profit organization involved in the advancement of missions work around the world.',
}

async function getAboutUsData() {
  const query = `
  *[_type == "page" && slug.current == "about-us"]{
    title,
    slug,
    _type,
    pageContent[]->{
      _type,  
      eyebrow, 
      title, 
      subTitle,
      content,
      bgcolor,
      contentList[]
    }    
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function About() {
  const apiResponse: Page[] = await getAboutUsData();
  const page: Page = apiResponse[0];
  const cmsContentArray = page.pageContent;
  return (
    <>
    {cmsContentArray?.map((cmsContent, index) => (
      <CmsComponent key={index} cmsComponent={cmsContent} type={cmsContent._type} />
    ))};
    </>
  )
}
