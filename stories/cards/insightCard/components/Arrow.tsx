import { FC } from "react"

type ArrowProps = {
    color?: string;
}

export const Arrow: FC<ArrowProps> = ({ color }) => {
    return (
        <>
            <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1616 7.11244C16.4664 6.80764 16.4664 6.31346 16.1616 6.00866L11.1947 1.04166C10.8899 0.736865 10.3957 0.736865 10.0909 1.04166C9.78607 1.34646 9.78607 1.84064 10.0909 2.14544L14.506 6.56055L10.0909 10.9757C9.78607 11.2805 9.78607 11.7746 10.0909 12.0794C10.3957 12.3842 10.8899 12.3842 11.1947 12.0794L16.1616 7.11244ZM0 7.34103H15.6098V5.78006H0V7.34103Z" fill={color} />
            </svg>
        </>
    )
}

Arrow.defaultProps =  {
    color : "#306CFE",
}

