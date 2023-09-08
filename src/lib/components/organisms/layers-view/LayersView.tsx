import React, { FC, ReactNode } from 'react'
import styles from './layers-view.module.scss'

export interface LayersViewProps {
  layers: Array<ReactNode>
  width?: number
  isControllingLayerSizing?: boolean
  isExpanded?: boolean
}

export const LayersView: FC<LayersViewProps> = ({ layers, width, isControllingLayerSizing, isExpanded }) => {
  const style = {
    maxWidth: width ? `${width}px` : undefined,
  }

  return (
    <div className={isExpanded ? styles.layers_view : styles.layers_view_flat} style={style}>
      {layers.map((layer, index) => {
        return (
          <div
            key={index}
            className={[
              isExpanded ? styles.layer : styles.layer_flat,
              isControllingLayerSizing ? styles.sizeRecommendation : '',
            ].join(' ')}
            // style={style}
          >
            {layer}
          </div>
        )
      })}
    </div>
  )
}
