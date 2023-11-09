import Link from "next/link";
import styled from "styled-components";
import { FC } from "react";
import navModalData from "./data";

type LinkDataType = {
    label: string
    href: string
}
  
const ModalWrapper = styled.div`
  position: fixed;  
  left: 0;
  right: 0;
  top: 58px;
  width: 100%;
  height: 100%;
  background-color: #0E204C;
  z-index: 9999;
  transition: transform 0.3s ease-in-out;

  
  overflow-y: scroll;
  overflow-x: hidden;

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */


  &::-webkit-scrollbar {
    width: 8px;
  }
  
  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent; 
  }
  
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
    width: 10px;
    border-radius: 10px;
    height: 200px; 
  }

  // if with greater than 768 px
  @media (min-width: 768px) {
    display: none;
  }

`;

const GridWrapper = styled.div`
  position: relative;
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  width: 100%;


  @media (max-width: 550px) {
    padding: 20px;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 50px;
  }
`;

const GridItem = styled.div`
  height: 100%;
  width: 100%;

  .link {
    padding: 20px;
    border-bottom: 1px solid #FFFFFF1A;
    font-size: 14px;
    cursor: pointer;
    font-weight: 400;
    line-height: 20px;    
  }
  .flex-col {
    display: flex;
    flex-direction: column;
  }

  h2 {
    padding-bottom: 20px;
    font-size: 20px;
    font-weight: 500;
    text-transform: capitalize;
    border-bottom: 1px solid #FFFFFF1A;
  }
`;

type NavModalItemProps = {
    title: string;
    links: ReadonlyArray<LinkDataType>;
  }
  
  const NavModalItem: FC<NavModalItemProps> = ({ title, links }) => {
    return (
      <GridItem>
        <h2>{title}</h2>
        <div className="flex-col">
          {
            links.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className="link"
              >{link.label}</Link>
            ))
          }
        </div>
      </GridItem>
    )
  }

export const NavFullPage = () => {
    return (
      <>
        <ModalWrapper>
          <GridWrapper>
            {
              navModalData.map((item) => (
                <NavModalItem
                  key={item.title}
                  title={item.title}
                  links={item.links}
                />
              ))
            }
          </GridWrapper>
        </ModalWrapper>
      </>
    )
}