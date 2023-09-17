import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'


import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { Carousel } from '@/components/Carousel'
import { GridPattern } from '@/components/GridPattern'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import homePromo1 from '@/images/home-promo-images/home-promo-1.jpg'
import homePromo2 from '@/images/home-promo-images/home-promo-2.jpg'
import homePromo3 from '@/images/home-promo-images/home-promo-3.jpg'
import homePromo4 from '@/images/home-promo-images/home-promo-4.jpg'
import homePromo5 from '@/images/home-promo-images/home-promo-5.jpg'

import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Follow us on social media
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>

      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Angular 1 and Google Web Toolkit.
            </ListItem>
            <ListItem title="E-commerce">
              We are at the forefront of modern e-commerce development. Which
              mainly means adding your logo to the Shopify store template we’ve
              used for the past six years.
            </ListItem>
            <ListItem title="Custom content management">
              At Studio we understand the importance of having a robust and
              customised CMS. That’s why we run all of our client projects out
              of a single, enormous Joomla instance.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

function HomePromo() {
  return (
    <FadeIn>
    <div className="overflow-hidden">
    <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
      <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
        <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Advancing missions work around the world
          </h2>
          <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
          Equip and Engage is a non-profit ministry corporation involved in the advancement of missions work around the world. 
          </p>
        </div>
        <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
          <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
            <div className="relative">
              <Image
                src={homePromo1}
                alt=""
                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
            </div>
          </div>
          <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
            <div className="relative">
              <Image
                src={homePromo2}
                alt=""
                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="relative">
              <Image
                src={homePromo3}
                alt=""
                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
            </div>
          </div>
          <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
            <div className="relative">
              <Image
                src={homePromo4}
                alt=""
                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="relative">
              <Image
                src={homePromo5}
                alt=""
                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </FadeIn>
  )
}

function HomeSocialLinks() {
  return (
    <div
    className='relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32 mt-12'
  >
    <GridPattern
      className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
      yOffset={-256}
    />
    <Container>
      <FadeIn>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Connect with us
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 gap-x-2 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <a role="link" aria-haspopup="true" data-ux="Link" target="_blank" data-aid="SOCIAL_FACEBOOK_LINK" aria-label="Facebook Social Link" href="https://www.facebook.com/equipengage" data-typography="LinkAlpha" data-tccl="ux2.SOCIAL.social1.Section.Default.Link.Default.13544.click,click">
            <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40" data-ux="IconSocial" className="inline align-middle pr-0 mr-0"><g><path d="M20 12a8 8 0 10-9.25 7.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.008c-.994 0-1.304.617-1.304 1.25V12h2.219l-.355 2.313H13.25v5.59A8.002 8.002 0 0020 12z" fill="#1877F2"></path><path d="M15.114 14.313L15.47 12h-2.22v-1.5c0-.633.31-1.25 1.304-1.25h1.008V7.281s-.915-.156-1.79-.156c-1.828 0-3.022 1.107-3.022 3.113V12H8.719v2.313h2.031v5.59c.828.13 1.672.13 2.5 0v-5.59h1.864z" fill="#fff"></path></g></svg>
            <span>@equipengage</span>
          </a>
          <a role="link" aria-haspopup="true" data-ux="Link" target="_blank" data-aid="SOCIAL_INSTAGRAM_LINK" aria-label="Instagram Social Link" href="https://www.instagram.com/equipandengageinc/" data-typography="LinkAlpha" data-tccl="ux2.SOCIAL.social1.Section.Default.Link.Default.13545.click,click">
            <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40" data-ux="IconSocial"  className="inline align-middle pr-0 mr-0"><g fill="#E1306C"><path d="M14.667 12a2.57 2.57 0 0 0-.782-1.885A2.57 2.57 0 0 0 12 9.333a2.57 2.57 0 0 0-1.885.782A2.57 2.57 0 0 0 9.333 12c0 .736.26 1.365.782 1.885.52.521 1.149.782 1.885.782a2.57 2.57 0 0 0 1.885-.782c.521-.52.782-1.149.782-1.885zm1.437 0c0 1.139-.4 2.108-1.198 2.906-.798.799-1.767 1.198-2.906 1.198-1.139 0-2.108-.4-2.906-1.198-.799-.798-1.198-1.767-1.198-2.906 0-1.139.4-2.108 1.198-2.906.798-.799 1.767-1.198 2.906-1.198 1.139 0 2.108.4 2.906 1.198.799.798 1.198 1.767 1.198 2.906zm1.125-4.27c0 .263-.094.489-.281.676a.923.923 0 0 1-.677.282.923.923 0 0 1-.677-.282.923.923 0 0 1-.281-.677c0-.264.093-.49.28-.677a.923.923 0 0 1 .678-.281c.264 0 .49.094.677.281a.923.923 0 0 1 .281.677zM12 5.437l-.797-.006a56.514 56.514 0 0 0-1.099 0c-.25.004-.585.014-1.005.032-.42.017-.778.052-1.073.104a4.177 4.177 0 0 0-.745.192c-.347.14-.653.34-.916.605-.264.263-.466.569-.605.916-.076.202-.14.45-.192.745a8.255 8.255 0 0 0-.104 1.073c-.018.42-.028.755-.032 1.005-.003.25-.003.616 0 1.1l.006.796-.006.797c-.003.483-.003.849 0 1.099.004.25.014.585.032 1.005.017.42.052.778.104 1.073.052.295.116.543.192.745.14.347.34.653.605.916.263.264.569.466.916.605.202.076.45.14.745.192.295.052.653.087 1.073.104.42.018.755.028 1.005.032.25.003.616.003 1.1 0l.796-.005.797.005c.483.003.849.003 1.099 0 .25-.004.585-.014 1.005-.032.42-.017.778-.052 1.073-.104.295-.052.543-.116.745-.192.347-.14.653-.34.916-.605.264-.263.466-.569.605-.916.076-.202.14-.45.192-.745.052-.295.087-.653.104-1.073.018-.42.028-.755.032-1.005.003-.25.003-.616 0-1.1L18.562 12l.006-.797c.003-.483.003-.849 0-1.099a38.59 38.59 0 0 0-.032-1.005 8.255 8.255 0 0 0-.104-1.073 4.177 4.177 0 0 0-.192-.745 2.703 2.703 0 0 0-.605-.916 2.703 2.703 0 0 0-.916-.605 4.177 4.177 0 0 0-.745-.192 8.255 8.255 0 0 0-1.073-.104c-.42-.018-.755-.028-1.005-.032-.25-.003-.616-.003-1.1 0L12 5.438zM20 12c0 1.59-.017 2.691-.052 3.302-.07 1.445-.5 2.563-1.292 3.354-.791.792-1.91 1.222-3.354 1.292-.611.035-1.712.052-3.302.052s-2.691-.017-3.302-.052c-1.445-.07-2.563-.5-3.354-1.292-.792-.791-1.222-1.91-1.292-3.354C4.017 14.691 4 13.59 4 12s.017-2.691.052-3.302c.07-1.445.5-2.563 1.292-3.354.791-.792 1.91-1.222 3.354-1.292C9.309 4.017 10.41 4 12 4s2.691.017 3.302.052c1.445.07 2.563.5 3.354 1.292.792.791 1.222 1.91 1.292 3.354.035.611.052 1.712.052 3.302z"></path></g></svg>
          @equipandengageinc
          </a>
          <a role="link" aria-haspopup="true" data-ux="Link" target="_blank" data-aid="SOCIAL_TWITTER_LINK" aria-label="Twitter Social Link" href="https://www.twitter.com/equipengage" data-typography="LinkAlpha"  className="inline align-middle pr-0 mr-0"><svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40" data-ux="IconSocial"  className="inline align-middle pr-0 mr-0"><g fill="#1DA1F2"><path fill-rule="evenodd" d="M9.026 19.01c6.038 0 9.341-5.007 9.341-9.341 0-.141 0-.282-.006-.423A6.689 6.689 0 0020 7.543a6.654 6.654 0 01-1.889.519 3.303 3.303 0 001.447-1.819 6.53 6.53 0 01-2.087.794A3.277 3.277 0 0015.076 6a3.287 3.287 0 00-3.284 3.285c0 .256.032.505.083.749a9.323 9.323 0 01-6.767-3.432 3.292 3.292 0 001.018 4.386 3.32 3.32 0 01-1.486-.41v.045a3.29 3.29 0 002.632 3.22 3.198 3.198 0 01-.865.115c-.21 0-.416-.019-.614-.057a3.283 3.283 0 003.067 2.28 6.585 6.585 0 01-4.079 1.408A6.32 6.32 0 014 17.544a9.339 9.339 0 005.026 1.466z"></path></g>
          </svg>
          @equipengage
          </a>
          </div>
      </FadeIn>
    </Container>
  </div>
  )
}

export default async function Home() {
  
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn>
          <Carousel />
          {/* <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Award-winning development studio based in Denmark.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a development studio working at the intersection of design
            and technology. It’s a really busy intersection though — a lot of
            our staff have been involved in hit and runs.
          </p> */}
        </FadeIn>
      </Container>

      {/* <CaseStudies caseStudies={caseStudies} /> */}

      <HomePromo />      

      <HomeSocialLinks />

      {/* <Services /> */}

      {/* <ContactSection /> */}
    </>
  )
}
