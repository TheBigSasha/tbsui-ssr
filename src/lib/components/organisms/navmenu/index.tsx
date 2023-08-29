import { FC, ReactNode } from 'react'
import styles from './navmenu.module.scss'

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
    <div className={styles.nav_menu}>
      <div className={styles.nav_menu_header}>
        {headerLeft} {headerRight}
      </div>
      {links.map((link, index) => {
        if ('category' in link) {
          return (
            <div key={index} className={styles.category}>
              {link.category}
            </div>
          )
        }
        return (
          <div key={index} className={styles.link}>
            {link.link}
          </div>
        )
      })}
    </div>
  )
}
