import React, { FC, ReactNode } from 'react'
import styles from './layers-view.module.scss'

export interface LayersViewProps {
  layers: Array<ReactNode>
  width?: number
  isControllingLayerSizing?: boolean
}

export const LayersView: FC<LayersViewProps> = ({ layers, width, isControllingLayerSizing }) => {
  const style = {
    width: width ? `${width}px` : undefined,
    height: 'fit-content',
  }

  return (
    <div className={styles.layers_view}>
      {layers.map((layer, index) => {
        return (
          <div
            key={index}
            className={[styles.layer, isControllingLayerSizing ? styles.sizeRecommendation : ''].join(' ')}
            style={style}
          >
            {layer}
          </div>
        )
      })}
    </div>
  )
}
