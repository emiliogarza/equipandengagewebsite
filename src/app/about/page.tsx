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
    'Equip and Engage INC. is a non-profit organization involved in the advancement of missions work around the world.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="" title="About us">
        <p>
          Equip and Engage INC. is a non-profit organization involved in the advancement of missions work around the world.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Equip and Engage was founded by Rev. Tyler Sullivan, an Associate Minister in Missions with the UPCI, who has spent time ministering in over 20 countries. 
          </p>
          <p>
            This organization exists to assist in fulfilling the Great Commission of Jesus Christ by providing tools and resources needed to impact the International Apostolic Church. By partnering with the local church, it is our desire reach beyond borders and into nations where lasting foundations can be laid.
          </p>
        </div>
      </PageIntro>

      <Culture />

    </>
  )
}
