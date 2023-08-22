import { FC, ReactNode } from 'react'
import styles from './navmenu.module.scss'

interface MenuItem {
  link: ReactNode
}

interface CategoryDelimiter {
  category: string
}

type NavMenuEntry = MenuItem | CategoryDelimiter

interface NavMenuProps {
  links: NavMenuEntry[]
}

export const NavMenu: FC<NavMenuProps> = ({ links }) => {
  return (
    <div className={styles.navmenu}>
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
