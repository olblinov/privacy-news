import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.LinkList(),
    //Component.TagCloud()
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer(
      {
        sortFn: (a, b) => {
          const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
          
          const isYear = (str:string) => /^\d{4}$/.test(str); // Check if it's a 4-digit year
          const isMonth = (str:string) => months.includes(str);
      
          if ((!a.file && !b.file) || (a.file && b.file)) {
            if (isYear(a.displayName) && isYear(b.displayName)) {
              return parseInt(b.displayName) - parseInt(a.displayName); // Descending order for years
            }
            
            if (isMonth(a.displayName) && isMonth(b.displayName)) {
              return months.indexOf(b.displayName) - months.indexOf(a.displayName); // December to January
            }
      
            // Default alphabetical sorting
            return a.displayName.localeCompare(b.displayName, undefined, {
              numeric: true,
              sensitivity: "base",
            });
          }
      
          if (a.file && !b.file) {
            return 1;
          } else {
            return -1;
          }
        },
      }
    )),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
