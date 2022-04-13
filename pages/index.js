import Head from 'next/head';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Fire from '../assets/svg/fire.svg';

export default function Home() {
  const Banner = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
    background: radial-gradient(
        37.88% 75.91% at 50% 50%,
        #521457 0%,
        #2e0c31 100%
      ),
      #2e0c31;
    h1 {
      text-align: center;
      font-family: 'Rajdhani';
      font-style: normal;
      font-weight: 500;
      font-size: 64px;
      line-height: 82px;
      color: #fff2e4;
      margin: 0;
      margin-bottom: 21px;
      margin-top: 50px;
      @media screen and (max-width: 900px) {
        font-size: 48px;
        line-height: 0px;
        margin-top: 20vh;
      }
    }
    br {
      display: none;
      @media screen and (max-width: 900px) {
        display: block;
      }
    }
    p {
      margin: auto;
      text-align: center;
      width: 80%;
      font-family: 'Rajdhani';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 31px;
      text-align: center;

      color: #fff2e4;
      @media screen and (max-width: 900px) {
        font-size: 16px;
        width: 90%;
        line-height: 156.1%;
        margin-top: 32px;
      }
    }
    #banner-image {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      @media screen and (max-width: 900px) {
        height: 100px;
        object-fit: cover;
      }
    }
  `;
  const ButtonWrapper = styled.div`
    gap: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    @media screen and (max-width: 900px) {
      margin: 0 5vw;
      margin-top: 60px;
    }
    button {
      display: block;
      width: 234px;
      height: 62px;
      background: #fff2e4;
      border-radius: 6px;
      font-family: 'Rajdhani';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 31px;
      color: #2e0c31;
      border: 1px solid #fff2e4;
      cursor: pointer;
      transition: 0.3s linear;
      @media screen and (max-width: 900px) {
        flex: 1;
        font-size: 14px;
        line-height: 18px;
        height: 42px;
      }
      &:hover {
        filter: brightness(0.8);
      }
    }
    .know-more-btn {
      background: none;
      color: #fff2e4;
      border: 1px solid #fff2e4;
    }
  `;
  return (
    <div>
      <Head></Head>
      <Banner>
        <Navbar />
        <h1>
          JOIN THE <br /> CELSIUS FEST
          <Fire />
        </h1>
        <p>
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful
          content.
        </p>
        <ButtonWrapper>
          <button>Register to events</button>
          <button className='know-more-btn'>Know More</button>
        </ButtonWrapper>
        <img
          src={'https://i.ibb.co/Px5Wmrh/Group-1-2-1-1.png'}
          alt='banner-image'
          id='banner-image'
        />
      </Banner>
    </div>
  );
}
