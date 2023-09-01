import { FC, ReactNode } from 'react'
import styles from './navmenu.module.scss'
import responsive from '../../../styles/responsive.module.scss'
export interface MenuItem {
  link: ReactNode
}

export interface CategoryDelimiter {
  category: string
}

export type NavMenuEntry = MenuItem | CategoryDelimiter

export interface NavMenuProps {
  links: NavMenuEntry[]
  headerLeft?: ReactNode
  headerRight?: ReactNode
}

export const NavMenu: FC<NavMenuProps> = ({ links, headerLeft, headerRight }) => {
  return (
    <nav className={styles.nav_menu}>
      <div className={styles.nav_menu_header}>
        {headerLeft} {headerRight}
      </div>
      <ul className={styles.nav_menu_list}>
        {links.map((link, index) => {
          if ('category' in link) {
            return (
              <li key={index} className={styles.category}>
                {link.category}
              </li>
            )
          }
          return (
            <li key={index} className={styles.link}>
              {link.link}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export interface ToggleNavMenuProps {
  links: NavMenuEntry[]
  headerItem?: ReactNode
  headerItemPosition?: 'left' | 'right'
}

export const ToggleNavMenu: FC<ToggleNavMenuProps> = ({ links, headerItem, headerItemPosition }) => {
  const getRectY = (index: number) => index * (18 / 2) + 2
  return (
    <nav className={styles.nav_menu_toggleable}>
      <input className={styles.nav_check_input} type="checkbox" id={styles.tbsui_ssr_navmenu_toggle} />
      <div className={styles.nav_menu}>
        <div
          className={styles.nav_menu_header}
          style={{
            flexDirection: headerItemPosition === 'left' ? 'row' : 'row-reverse',
          }}
        >
          {headerItem}
          <span className={styles.nav_check_container}>
            <label className={styles.nav_check_label} htmlFor={styles.tbsui_ssr_navmenu_toggle}>
              <svg className={styles.nav_check_icon} viewBox="0 0 24 24">
                <rect className={styles.nav_check_rect} x="0" y="0" width="24" height="24"></rect>
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
        </div>
        <ul className={styles.nav_menu_list}>
          {links.map((link, index) => {
            if ('category' in link) {
              return (
                <li key={index} className={styles.category}>
                  {link.category}
                </li>
              )
            }
            return (
              <li key={index} className={styles.link}>
                {link.link}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export const ResponsiveNavMenu: FC<ToggleNavMenuProps> = ({ links, headerItem, headerItemPosition }) => {
  const getRectY = (index: number) => index * (18 / 2) + 2
  return (
    <nav className={styles.nav_menu_toggleable_responsive}>
      <input className={styles.nav_check_input} type="checkbox" id={styles.tbsui_ssr_navmenu_toggle} />
      <div className={styles.nav_menu}>
        <div
          className={styles.nav_menu_header}
          style={{
            flexDirection: headerItemPosition === 'left' ? 'row' : 'row-reverse',
          }}
        >
          {headerItem}
          <span className={responsive.lg_or_smaller}>
            <span className={styles.nav_check_container}>
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
          </span>
          <span className={responsive.lg_or_larger}>
            <span className={styles.nav_links_hor}>
              {links.map((link, index) => {
                if (!('category' in link))
                  return (
                    <li key={index} className={styles.link}>
                      {link.link}
                    </li>
                  )
              })}
            </span>
          </span>
        </div>
        <ul className={styles.nav_menu_list}>
          {links.map((link, index) => {
            if ('category' in link) {
              return (
                <li key={index} className={styles.category}>
                  {link.category}
                </li>
              )
            }
            return (
              <li key={index} className={styles.link}>
                {link.link}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
