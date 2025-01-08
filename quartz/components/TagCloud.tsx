import { pathToRoot, slugTag } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { FullSlug, getAllSegmentPrefixes, simplifySlug } from "../util/path"

const TagCloud: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
  const tags = [
      ...new Set(
        allFiles.flatMap((data) => data.frontmatter?.tags ?? []).flatMap(getAllSegmentPrefixes),
      ),
    ].sort((a, b) => a.localeCompare(b))
  const baseDir = pathToRoot(fileData.slug!)
  if (tags && tags.length > 0 && fileData.slug === "index") {
    return (
        <div>
            <h2>Tag Cloud</h2>
            <ul class={classNames(displayClass, "tags")}>
                {tags.map((tag) => {
                const linkDest = baseDir + `/tags/${slugTag(tag)}`
                return (
                    <li>
                    <a href={linkDest} class="internal tag-link">
                        {tag}
                    </a>
                    </li>
                )
                })}
            </ul>
      </div>
    )
  } else {
    return null
  }
}

TagCloud.css = `
.tags {
  list-style: none;
  display: flex;
  padding-left: 0;
  gap: 0.4rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.section-li > .section > .tags {
  justify-content: flex-end;
}
  
.tags > li {
  display: inline-block;
  white-space: nowrap;
  margin: 0;
  overflow-wrap: normal;
}

a.internal.tag-link {
  border-radius: 8px;
  background-color: var(--highlight);
  padding: 0.2rem 0.4rem;
  margin: 0 0.1rem;
}
`

export default (() => TagCloud) satisfies QuartzComponentConstructor
