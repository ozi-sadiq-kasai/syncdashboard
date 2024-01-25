import * as React from 'react'

import { SparklineComponent, Inject,
SparklineTooltip } from '@syncfusion/ej2-react-charts'
const SparkLine = ({ id, height, width, color, type, data }) => {
  return (
    <SparklineComponent
      id={id}
      type={type}
      height={height}
      width={width}
      valueType="Category"
      dataSource={data}
      fill={color}
      xName="x"
      yName="y"
      tooltipSettings={{
        visible: true,
        format: '${x} : ${y}',
        trackLineSettings: { visible: true },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLine