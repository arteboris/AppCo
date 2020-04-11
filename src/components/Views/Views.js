import React from 'react';
import PropTypes from 'prop-types';
import { Line, defaults } from 'react-chartjs-2';
import css from './Views.module.css';

defaults.scale.ticks.beginAtZero = true;
defaults.global.defaultFontFamily = 'Montserrat';
defaults.global.defaultFontSize = 16;
defaults.global.defaultFontColor = '#CCCCCC';
defaults.global.defaultFontWeight = 400;

const Views = ({ date, views }) => {
  const data = {
    labels: [0, '2019-10-01', '2019-10-02', ...date],
    datasets: [
      {
        data: [0, 0, 0, ...views],
        fill: false,
        borderColor: '#3A80BA',
        lineTension: 0.3,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          stacked: true,
          gridLines: {
            display: true,
            color: '#F1F1F1',
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    layout: {
      padding: {
        left: 0,
        rigth: 0,
        bottom: 50,
        top: 20,
      },
    },
    tooltips: {
      enabled: true,
    },
  };

  return (
    <div>
      <h2>Views</h2>
      <article className={css.canvas_container}>
        <Line data={data} options={options} />
      </article>
    </div>
  );
};

Views.propTypes = {
  date: PropTypes.arrayOf(String).isRequired,
  views: PropTypes.arrayOf(Number).isRequired,
};

export default Views;
