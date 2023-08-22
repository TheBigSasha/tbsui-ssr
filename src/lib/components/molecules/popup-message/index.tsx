import { FC, PropsWithChildren } from 'react'
import styles from './popup-message.module.scss'

export type PopupMessageVariant = 'INFO' | 'WARNING' | 'ERROR' | 'SUCCESS'

export interface PopupMessageProps {
  label: string
  variant?: PopupMessageVariant
  delay?: 0 | 1 | 5 | 10
  style?: React.CSSProperties
}

export const PopupMessage: FC<PropsWithChildren<PopupMessageProps>> = ({
  label,
  variant = 'PRIMARY',
  children,
  delay = 5,
  style,
}) => {
  return (
    <div
      style={style}
      className={`${styles.popup_message} ${styles[variant.toLowerCase()]} ${styles[`fade_in_delay_${delay}`]}`}
    >
      <h3 className={styles.popup_message_label}>{label}</h3>
      {children}
    </div>
  )
}
