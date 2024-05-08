import { FC, ReactNode } from 'react'
import responsive from '../../../styles/responsive.module.scss'
import styles from './navmenu.module.scss'
export interface MenuItem {
  link: ReactNode
}

export interface CategoryDelimiter {
  category: string
}

export interface CollapsibleCategory {
  title: ReactNode
  elements: MenuItem[]
}

export type NavMenuEntry = MenuItem | CategoryDelimiter | CollapsibleCategory

export interface NavMenuProps {
  links: NavMenuEntry[]
  headerLeft?: ReactNode
  headerRight?: ReactNode
  positionItems?: 'center' | 'left' | 'right'
  fillScreen?: 'always' | 'mobile' | 'never'
}

const DropDownCollapsibleCategory = ({ cat }: { cat: CollapsibleCategory }) => {
  return (
    <li className={[styles.dropdown_cat].join(' ')}>
      {cat.title}
      <span className={styles.spin_chevron}></span>
      <div className={styles.dropdown}>
        <ul className={styles.dropdown_cat_list}>
          {cat.elements.map((item, index) => (
            <li key={index} className={styles.link}>
              {item.link}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

const Gap: FC<{ type: 'always' | 'mobile' | 'never' }> = ({ type }) => {
  if (type === 'always') {
    return <li className={styles.gap} />
  }
  if (type === 'mobile') {
    return (
      <li className={responsive.lg_or_smaller}>
        <div className={styles.gap} />
      </li>
    )
  }
  if (type === 'never') {
    return null
  }
  return null
}

export interface ToggleNavMenuProps {
  links: NavMenuEntry[]
  headerItem?: ReactNode
  headerItemPosition?: 'left' | 'right'
  fillScreen?: 'always' | 'mobile' | 'never'
  positionItems?: 'center' | 'left' | 'right'
}

export interface NeoNavMenuProps extends ToggleNavMenuProps {
  scrollCollapse?: 'never' | 'standard' | 'card'
  scrollCollapsed?: boolean
  className?: string
}

const getRectY = (index: number) => index * (18 / 2) + 2

export const ResponsiveNavMenu: FC<NeoNavMenuProps> = ({
  links,
  headerItem,
  headerItemPosition,
  fillScreen = 'mobile',
  positionItems = 'left',
  scrollCollapse = 'standard',
  scrollCollapsed = true,
  className = '',
}) => {
  const getRectY = (index: number) => index * (18 / 2) + 2

  const scrollCollapseStyle =
    scrollCollapse === 'never'
      ? styles.scroll_collapse_never
      : scrollCollapse === 'card'
      ? styles.nav_menu_cardify_collapsible
      : styles.nav_menu_collapsible

  const classNameCollapsed = scrollCollapsed ? '' : styles.expanded
  return (
    <nav className={[styles.nav_menu_toggleable_responsive, classNameCollapsed, className].join(' ')}>
      <input className={styles.nav_check_input} type="checkbox" id={styles.tbsui_ssr_navmenu_toggle} />
      <div className={[styles['nav_menu'], scrollCollapseStyle].join(' ')}>
        <div
          className={styles.nav_menu_header}
          style={{
            flexDirection: headerItemPosition === 'left' ? 'row' : 'row-reverse',
          }}
        >
          <span className={styles.tbsui_ssr_header_item}>{headerItem}</span>
          <span className={[styles.nav_check_container].join(' ')}>
            <label className={styles.nav_check_label} htmlFor={styles.tbsui_ssr_navmenu_toggle}>
              <svg className={styles.nav_check_icon} viewBox="0 0 24 24">
                <rect className={styles.nav_check_rect} x="0" y="0" width="24" height="24" rx={12}></rect>
                <g className={styles.nav_check_x_1}>
                  <rect className={styles.nav_check_line} y={getRectY(0)} rx={1}></rect>
                </g>
                <g className={styles.nav_check_x_2}>
                  <rect className={styles.nav_check_line} y={getRectY(1)} rx={1}></rect>
                  <rect className={styles.nav_check_line} y={getRectY(2)} rx={1}></rect>
                </g>
              </svg>
            </label>
          </span>
          <span className={styles.nav_links_wrapper}>
            <span className={styles.nav_links_hor}>
              {links.map((link, index) => {
                if (!('category' in link) && !('elements' in link)) {
                  return (
                    <li key={index} className={styles.link}>
                      {(link as MenuItem).link}
                    </li>
                  )
                }
                if ('elements' in link) {
                  return <DropDownCollapsibleCategory key={index} cat={link as unknown as CollapsibleCategory} />
                }
              })}
            </span>
          </span>
        </div>
        <ul className={[styles.nav_menu_list, styles[`nav_menu_list_${positionItems}`]].join(' ')}>
          {links.map((link, index) => {
            if ('category' in link) {
              return (
                <li key={index} className={styles.category}>
                  {link.category}
                </li>
              )
            }
            if ('elements' in link) {
              return (
                <>
                  <li key={index} className={styles.category_nested}>
                    {link.title}
                  </li>
                  {link.elements.map((innerLink) => (
                    <li key={index} className={styles.link_nested}>
                      {innerLink.link}
                    </li>
                  ))}
                </>
              )
            }
            return (
              <li key={index} className={styles.link}>
                {link.link}
              </li>
            )
          })}
          {<Gap type={fillScreen} />}
        </ul>
      </div>
    </nav>
  )
}

export const NAV_MENU_TOGGLE_ID = styles.tbsui_ssr_navmenu_toggle
export const NAVMENU_HEADER_ITEM_CLASS_COLLAPSED = styles.tbsui_ssr_header_item_collapsed
export const NAVMENU_HEADER_ITEM_CLASS_EXPANDED = styles.tbsui_ssr_header_item_expanded
export const NAVMENU_EXPANDED_CLASS = styles.expanded //Enables toggling expanded state without React
export const NAVMENU_HEADER_SHRINK_ITEM_CLASS = styles.tbsui_ssr_header_shrink_item
