import { CmsLink } from "@/models/contentModels"
import Link from "next/link";


export function CmsLink({
    link,
    classNames
}: {
    link: CmsLink
    classNames?: string
}) {
    if (link && link.text && link.link) {
        return (
            <Link href={link.link} className={classNames ? classNames : undefined} target={link.target ? link.target : undefined}>{link.text}</Link>
        )
    }
}