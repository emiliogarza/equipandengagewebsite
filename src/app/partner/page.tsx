import { type Metadata } from 'next'

import { client } from '../../../sanity/lib/client'
import { CmsComponent } from '@/components/CmsComponent'
import { Page } from '@/models/contentModels'

async function getData() {
  const query = `
  *[_type == "page" && slug.current == "partner"]{
    title,
    slug,
    _type,
    pageContent[]->
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support Equip and Engage Ministries by donating online.',
}

export default async function Process() {
  const apiResponse: Page[] = await getData();
  const page: Page = apiResponse[0];
  const cmsContentArray = page.pageContent;
  return (
    <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
    {cmsContentArray?.map((cmsContent, index) => (
      <CmsComponent key={index} cmsComponent={cmsContent} type={cmsContent._type} />
    ))};
    </div>
  )
}
