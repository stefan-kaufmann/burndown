import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import ChartData from './ChartData';

interface Props {
  chartData: ChartData;
}

export default function Chart({chartData}: Props) {
  const theme = useTheme();

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <LineChart
          data={chartData.items}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 16,
          }}
        >
          <XAxis dataKey="day" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary} />
          <Line type="monotone" dataKey="realValue" stroke={theme.palette.primary.main} dot={true} />
          <Line type="monotone" dataKey="idealValue" stroke={theme.palette.primary.light} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}