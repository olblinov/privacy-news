import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const LinkList: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const links = fileData.frontmatter?.links 
  const baseDir = pathToRoot(fileData.slug!)
  if (links && links.length > 0) {
    return (
      <ul class={classNames(displayClass, "links")}>
        {links.map((link) => {
          return (
            <li>
              <a href={link} target="_blank" class="link-link">
                {link}
              </a>
            </li>
          )
        })}
      </ul>
    )
  } else {
    return null
  }
}

LinkList.css = `
.links {
  list-style: disc;
  display: flex;
  padding-left: 40px;
  gap: 0.4rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}
`

export default (() => LinkList) satisfies QuartzComponentConstructor
