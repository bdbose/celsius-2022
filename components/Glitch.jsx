import React from 'react';
import styled from 'styled-components';

const Glitch = ({ text }) => {
  const GlitchWrapper = styled.div`
    width: fit-content;
    color: white;
    font-family: var(--react-glitch-font-family);

    &:hover {
      .react-glitch-wrapper {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: var(--react-glitch-font-family);
      }
      .rect-glitch-text-clear-animation {
        color: var(--react-glitch-text-color);
        position: relative;
        display: inline-block;
      }
      .rect-glitch-text {
        color: var(--react-glitch-text-color);
        position: relative;
        display: inline-block;
      }
      .rect-glitch-text::before,
      .rect-glitch-text::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .rect-glitch-text::before {
        left: 2px;
        text-shadow: -2px 0 var(--react-glitch-text-glitch-color-1);
        clip: rect(24px, 550px, 90px, 0);
        animation: glitch-anim-2 2s infinite linear alternate-reverse;
      }
      .rect-glitch-text::after {
        left: -2px;
        text-shadow: -2px 0 var(--react-glitch-text-glitch-color-2);
        clip: rect(85px, 550px, 140px, 0);
        animation: glitch-anim 1.5s infinite linear alternate-reverse;
      }
      @-webkit-keyframes glitch-anim {
        0% {
          clip: rect(84px, 9999px, 129px, 0);
        }
        4.166666666666666% {
          clip: rect(31px, 9999px, 77px, 0);
        }
        8.333333333333332% {
          clip: rect(63px, 9999px, 71px, 0);
        }
        12.5% {
          clip: rect(81px, 9999px, 44px, 0);
        }
        16.666666666666664% {
          clip: rect(72px, 9999px, 2px, 0);
        }
        20.833333333333336% {
          clip: rect(15px, 9999px, 87px, 0);
        }
        25% {
          clip: rect(62px, 9999px, 101px, 0);
        }
        29.166666666666668% {
          clip: rect(1px, 9999px, 141px, 0);
        }
        33.33333333333333% {
          clip: rect(51px, 9999px, 92px, 0);
        }
        37.5% {
          clip: rect(85px, 9999px, 80px, 0);
        }
        41.66666666666667% {
          clip: rect(62px, 9999px, 9px, 0);
        }
        45.83333333333333% {
          clip: rect(111px, 9999px, 141px, 0);
        }
        50% {
          clip: rect(18px, 9999px, 72px, 0);
        }
        54.166666666666664% {
          clip: rect(23px, 9999px, 76px, 0);
        }
        58.333333333333336% {
          clip: rect(70px, 9999px, 7px, 0);
        }
        62.5% {
          clip: rect(62px, 9999px, 106px, 0);
        }
        66.66666666666666% {
          clip: rect(32px, 9999px, 113px, 0);
        }
        70.83333333333334% {
          clip: rect(150px, 9999px, 19px, 0);
        }
        75% {
          clip: rect(135px, 9999px, 31px, 0);
        }
        79.16666666666666% {
          clip: rect(22px, 9999px, 56px, 0);
        }
        83.33333333333334% {
          clip: rect(19px, 9999px, 98px, 0);
        }
        87.5% {
          clip: rect(56px, 9999px, 2px, 0);
        }
        91.66666666666666% {
          clip: rect(137px, 9999px, 85px, 0);
        }
        95.83333333333334% {
          clip: rect(30px, 9999px, 2px, 0);
        }
        100% {
          clip: rect(72px, 9999px, 30px, 0);
        }
      }
      @keyframes glitch-anim {
        0% {
          clip: rect(84px, 9999px, 129px, 0);
        }
        4.166666666666666% {
          clip: rect(31px, 9999px, 77px, 0);
        }
        8.333333333333332% {
          clip: rect(63px, 9999px, 71px, 0);
        }
        12.5% {
          clip: rect(81px, 9999px, 44px, 0);
        }
        16.666666666666664% {
          clip: rect(72px, 9999px, 2px, 0);
        }
        20.833333333333336% {
          clip: rect(15px, 9999px, 87px, 0);
        }
        25% {
          clip: rect(62px, 9999px, 101px, 0);
        }
        29.166666666666668% {
          clip: rect(1px, 9999px, 141px, 0);
        }
        33.33333333333333% {
          clip: rect(51px, 9999px, 92px, 0);
        }
        37.5% {
          clip: rect(85px, 9999px, 80px, 0);
        }
        41.66666666666667% {
          clip: rect(62px, 9999px, 9px, 0);
        }
        45.83333333333333% {
          clip: rect(111px, 9999px, 141px, 0);
        }
        50% {
          clip: rect(18px, 9999px, 72px, 0);
        }
        54.166666666666664% {
          clip: rect(23px, 9999px, 76px, 0);
        }
        58.333333333333336% {
          clip: rect(70px, 9999px, 7px, 0);
        }
        62.5% {
          clip: rect(62px, 9999px, 106px, 0);
        }
        66.66666666666666% {
          clip: rect(32px, 9999px, 113px, 0);
        }
        70.83333333333334% {
          clip: rect(150px, 9999px, 19px, 0);
        }
        75% {
          clip: rect(135px, 9999px, 31px, 0);
        }
        79.16666666666666% {
          clip: rect(22px, 9999px, 56px, 0);
        }
        83.33333333333334% {
          clip: rect(19px, 9999px, 98px, 0);
        }
        87.5% {
          clip: rect(56px, 9999px, 2px, 0);
        }
        91.66666666666666% {
          clip: rect(137px, 9999px, 85px, 0);
        }
        95.83333333333334% {
          clip: rect(30px, 9999px, 2px, 0);
        }
        100% {
          clip: rect(72px, 9999px, 30px, 0);
        }
      }
      @-webkit-keyframes glitch-anim-2 {
        6.666666666666667% {
          clip: rect(71px, 9999px, 57px, 0);
        }
        10% {
          clip: rect(40px, 9999px, 146px, 0);
        }
        13.333333333333334% {
          clip: rect(67px, 9999px, 111px, 0);
        }
        16.666666666666664% {
          clip: rect(92px, 9999px, 115px, 0);
        }
        20% {
          clip: rect(91px, 9999px, 62px, 0);
        }
        23.333333333333332% {
          clip: rect(56px, 9999px, 112px, 0);
        }
        26.666666666666668% {
          clip: rect(18px, 9999px, 47px, 0);
        }
        30% {
          clip: rect(15px, 9999px, 3px, 0);
        }
        33.33333333333333% {
          clip: rect(40px, 9999px, 72px, 0);
        }
        36.666666666666664% {
          clip: rect(90px, 9999px, 58px, 0);
        }
        40% {
          clip: rect(16px, 9999px, 114px, 0);
        }
        43.333333333333336% {
          clip: rect(31px, 9999px, 48px, 0);
        }
        46.666666666666664% {
          clip: rect(25px, 9999px, 132px, 0);
        }
        50% {
          clip: rect(32px, 9999px, 94px, 0);
        }
        53.333333333333336% {
          clip: rect(55px, 9999px, 49px, 0);
        }
        56.666666666666664% {
          clip: rect(95px, 9999px, 142px, 0);
        }
        60% {
          clip: rect(117px, 9999px, 6px, 0);
        }
        63.33333333333333% {
          clip: rect(72px, 9999px, 137px, 0);
        }
        66.66666666666666% {
          clip: rect(111px, 9999px, 24px, 0);
        }
        70% {
          clip: rect(141px, 9999px, 122px, 0);
        }
        73.33333333333333% {
          clip: rect(44px, 9999px, 21px, 0);
        }
        76.66666666666667% {
          clip: rect(94px, 9999px, 114px, 0);
        }
        80% {
          clip: rect(124px, 9999px, 142px, 0);
        }
        83.33333333333334% {
          clip: rect(104px, 9999px, 86px, 0);
        }
        86.66666666666667% {
          clip: rect(70px, 9999px, 127px, 0);
        }
        90% {
          clip: rect(73px, 9999px, 126px, 0);
        }
        93.33333333333333% {
          clip: rect(84px, 9999px, 27px, 0);
        }
        96.66666666666667% {
          clip: rect(43px, 9999px, 150px, 0);
        }
        100% {
          clip: rect(146px, 9999px, 66px, 0);
        }
      }
      @keyframes glitch-anim-2 {
        6.666666666666667% {
          clip: rect(71px, 9999px, 57px, 0);
        }
        10% {
          clip: rect(40px, 9999px, 146px, 0);
        }
        13.333333333333334% {
          clip: rect(67px, 9999px, 111px, 0);
        }
        16.666666666666664% {
          clip: rect(92px, 9999px, 115px, 0);
        }
        20% {
          clip: rect(91px, 9999px, 62px, 0);
        }
        23.333333333333332% {
          clip: rect(56px, 9999px, 112px, 0);
        }
        26.666666666666668% {
          clip: rect(18px, 9999px, 47px, 0);
        }
        30% {
          clip: rect(15px, 9999px, 3px, 0);
        }
        33.33333333333333% {
          clip: rect(40px, 9999px, 72px, 0);
        }
        36.666666666666664% {
          clip: rect(90px, 9999px, 58px, 0);
        }
        40% {
          clip: rect(16px, 9999px, 114px, 0);
        }
        43.333333333333336% {
          clip: rect(31px, 9999px, 48px, 0);
        }
        46.666666666666664% {
          clip: rect(25px, 9999px, 132px, 0);
        }
        50% {
          clip: rect(32px, 9999px, 94px, 0);
        }
        53.333333333333336% {
          clip: rect(55px, 9999px, 49px, 0);
        }
        56.666666666666664% {
          clip: rect(95px, 9999px, 142px, 0);
        }
        60% {
          clip: rect(117px, 9999px, 6px, 0);
        }
        63.33333333333333% {
          clip: rect(72px, 9999px, 137px, 0);
        }
        66.66666666666666% {
          clip: rect(111px, 9999px, 24px, 0);
        }
        70% {
          clip: rect(141px, 9999px, 122px, 0);
        }
        73.33333333333333% {
          clip: rect(44px, 9999px, 21px, 0);
        }
        76.66666666666667% {
          clip: rect(94px, 9999px, 114px, 0);
        }
        80% {
          clip: rect(124px, 9999px, 142px, 0);
        }
        83.33333333333334% {
          clip: rect(104px, 9999px, 86px, 0);
        }
        86.66666666666667% {
          clip: rect(70px, 9999px, 127px, 0);
        }
        90% {
          clip: rect(73px, 9999px, 126px, 0);
        }
        93.33333333333333% {
          clip: rect(84px, 9999px, 27px, 0);
        }
        96.66666666666667% {
          clip: rect(43px, 9999px, 150px, 0);
        }
        100% {
          clip: rect(146px, 9999px, 66px, 0);
        }
      }
    }
  `;
  return (
    <GlitchWrapper>
      <div className='react-glitch-wrapper'>
        <div className='rect-glitch-text' data-text={text}>
          {text}
        </div>
      </div>
    </GlitchWrapper>
  );
};

export default Glitch;
