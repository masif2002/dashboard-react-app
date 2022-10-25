import React from 'react'

import { SparklineComponent, Inject, SparklineTooltip, TrackLineSettings } from '@syncfusion/ej2-react-charts'

class SparkLine extends React.PureComponent {
  render() {
    const { id, height, width, color, dataSource, type } = this.props;

  return (
    <SparklineComponent 
      id={id}
      height={height}
      width={width}
      dataSource={dataSource}
      lineWidth={1}
      valueType='Numeric'
      fill={color}
      border={{color, width: 2}}  
      xName='x'
      yName='yval'
      type={type}
      tooltipSettings={{
        visible: true,
        format: '${x}:${yval}',
        trackLineSettings: {
          visible: true
        }
      }}
    >
      <Inject services={[SparklineTooltip]}/>
    </SparklineComponent>
  )
    }
}

export default SparkLine