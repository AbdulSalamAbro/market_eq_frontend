import { FC } from "react";
import styled from "styled-components";

type StypeProps = {
    bg?: boolean;
    padding?: boolean;
}

export const PageRoot = styled.div<StypeProps>`
    max-width: 1440px;
    margin: 0 auto;
    font-family: Noto Sans;
    
    ${({ bg }) => bg ? `
        height: 744px;
    ` : null
    }

    ${({ padding }) => padding ? `
        padding: 100px;
    ` : null
    }

    #fist-sec{
        padding-bottom: 100px;
    }

    @media (max-width: 1024px) {
        #fist-sec{
            padding-bottom: 40px;
            width: 100%;
        }
      
        
        ${({ padding }) => padding ? `
            padding: 40px;
        `    : null
        }
    }

    @media (max-width: 768px) {
        
        ${({ padding }) => padding ? `
            padding: 40px 20px;
        `    : null
        }
          
       ${({ bg }) => bg ? `
           height: 510px;
        ` : null
        }

        #fist-sec{
            padding-left: 20px !important;
            padding-right: 20px !important;
        }

    }
    
`;

type LayerProps = {
    children: React.ReactNode;
    bg: boolean;
    padding?: boolean;
    imgHeight?: boolean;
}

const PageLayer: FC<LayerProps> = ({ children, bg, padding, imgHeight }) => {
    return (
        <div
            style={{
                backgroundColor: bg ? "#0E204C" : "transparent",
            }}
        >
            <PageRoot bg={imgHeight} padding={padding}>
                {children}
            </PageRoot>
        </div>
    )
}

PageLayer.defaultProps = {
    bg: false,
    imgHeight: false,
}

export default PageLayer;

