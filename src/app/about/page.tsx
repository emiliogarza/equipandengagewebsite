import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'
import Link from 'next/link'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-sky-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our passion"
        title="The Great Commission of Jesus Christ"
        invert
      >
        <p>
          Partner with us
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Prayer" invert>
            Pray for the Equip and Engage Ministry over our future events such as Beyond 2024.
          </GridListItem>
          <GridListItem title="Partner" invert>
            You will be a part of the foundation of a lasting ministry. <Link href="/partner" className='underline'>Give Now</Link>
          </GridListItem>
          <GridListItem title="Time" invert>
            Get involved by attending a Equip and Engage ministry event soon.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'About us',
  description:
    'Equip and Engage is a non-profit ministry corporation involved in the advancement of missions work around the world.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="" title="About us">
        <p>
          Equip and Engage is a non-profit ministry corporation involved in the advancement of missions work around the world.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Established by Tyler Sullivan in 2022, it is the goal of E&E to reach beyond borders and into regions and nations to engage and impact the international Apostolic Church through training and equipping.
          </p>
          <p>
            Tyler Sullivan is a licensed minister with the United Pentecostal Church as well as an Associate Minister in Missions with the Global Missions Division. He has traveled to over 20 countries and has seen God do many miraculous things.
          </p>
          <p>
            By partnering with the local churches, we can reach into areas where a lasting impact can be formed, and the Great Commission of Jesus Christ can be fulfilled; to go into all the world.
          </p>
        </div>
      </PageIntro>

      <Culture />

    </>
  )
}
