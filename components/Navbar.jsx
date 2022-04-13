import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Icon from '../assets/svg/icon.svg';
import Menu from '../assets/svg/menu.svg';

const Navbar = ({ page }) => {
  const Wrapper = styled.nav`
    padding: 15px 5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    #menu-icon {
      display: none;
      @media screen and (max-width: 900px) {
        display: block;
      }
    }
  `;
  const Element = styled.div`
    gap: 52px;
    display: flex;
    @media screen and (max-width: 900px) {
      display: none;
    }
  `;
  const Items = [
    'Home',
    'Sports',
    'Cultural',
    'Technical',
    'About Us',
    'Contact Us',
  ];
  const TextWrapper = styled.span`
    display: block;
    cursor: pointer;
    font-family: 'Teko';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    color: rgba(255, 242, 228, 0.87);
    transition: 0.5s linear;
    &:hover {
      color: #fff2e4;
      transform: scale(1.3);
    }
  `;
  return (
    <Wrapper>
      <Icon />
      <Element>
        {Items.map((ele) => {
          return (
            <Link href={'/' + ele.toLowerCase()} key={ele}>
              <TextWrapper>{ele}</TextWrapper>
            </Link>
          );
        })}
      </Element>
      <Menu id='menu-icon' />
    </Wrapper>
  );
};

export default Navbar;
