import styled from "styled-components"
import { PageRoot } from "../pageLayer";

// used 3 times
const Root = styled.section`
    background-color : rgba(61, 65, 96, 0.03);
`;


const TextConatiner = styled.div`
    text-align: center;
    max-width: 1240px;
    width: 100%;
    margin: auto;

    h1 {
        color : rgba(61, 65, 96, 1);
        font-size : 82px;
        line-height : 126.444px;
        font-weight : 700;
    }

    p {
        color : #3D4160;
        margin : 30px 0 0;
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;

    }

    @media (max-width : 1024px) {
         padding-right : 0px;
        h1 {
            font-size: 32px;
            line-height: 140.2%; /* 44.864px */
        }

        p {
            font-size : 14px;
            line-height : 19px;
            margin-top : 12px;
        }
    }

   


`;



const OverviewSection = ({banner}) => (
    <Root id="overview">
        <PageRoot>
            <div className="py-10 px-5 desktop:p-10 xlTablet:p-[100px]">
                <TextConatiner>
                    <h1>{banner.BannerHeaderOne}<br />{banner.BannerHeaderTwo}</h1>
                    <p>{banner.BannerDescription}</p>
                </TextConatiner>
            </div>
        </PageRoot>
    </Root>
)

OverviewSection.defaultProps = {
    title: {
        bold: "We accelerate",
        normal: "sustainable and inclusive growth"
    },
    desc1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mi sodales, congue dui a, pretium est. Ut vitae lacus vel erat vulputate tempor. Proin rhoncus nulla ac diam aliquam, a rutrum massa faucibus. Praesent vulputate imperdiet turpis eu euismod. Ut lectus turpis, dictum accumsan ultrices nec, tempus et justo. Morbi tempus quis lectus at aliquam. Nulla tempor eleifend arcu et tristique. Nulla magna magna, lacinia quis velit sed, volutpat posuere velit.',
    desc2: "Integer sollicitudin magna sed augue pellentesque, sit amet sagittis magna pharetra. Donec varius, augue ac finibus iaculis, purus dui luctus erat, eu malesuada lacus odio eu velit. Fusce nec leo eu ipsum cursus tincidunt sed scelerisque sem. Vestibulum pellentesque sem ac risus blandit rhoncus. Pellentesque quis velit tincidunt, egestas libero et, mollis augue. Aenean eu posuere metus, posuere tempus est. Donec tristique sapien eget egestas consectetur. Morbi vulputate lacinia luctus.",
    link: "#"
}



export default OverviewSection
