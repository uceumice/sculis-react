import { useState, useEffect } from 'react';

// Sptring Animation
import { animated, useSprings } from 'react-spring';

// MUI
import {
    Container,
    CardHeader,
    CardContent,
    Typography
} from '@mui/material';

// COMMONS
import StyledCard from '../_coms/StyledCard';

/**
 * Motivation Card
 */
export default function Introduction() {
    const [toggle, setToggle] = useState<boolean>(false);

    useEffect(() => {
        setToggle(true);
    }, [toggle]);

    return (
        <StyledCard sx={{
            borderRadius: "20px",
            marginTop: "20px",
            marginBottom: "20px",
        }}>
            <Container sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <CardHeader
                    title={
                        <Typography variant="h6" align="center">
                            {'Eine Planung-App 🚀'}
                        </Typography>
                    }
                />
                <AnimatedLogo toggle={toggle} />
            </Container>

            < CardContent >


                <Typography align="justify" component="div">
                    <Typography component="p" sx={{ marginBottom: "10px" }}>
                        {`Ja, ja - Google und Apple und weitere...`}
                    </Typography>
                    <Typography component="span">
                        {`
                        Es gibt viele solche Planung-Apps.
                        Was unsere aber ausmacht, ist die Fähigkeit,
                        `}
                    </Typography>
                    <Typography
                        component="span"
                        sx={{
                            background: (theme) => theme.custom.gradients.button,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}>
                        {" schnell und einfach mit den Änderungen zum Stundenplan umzugehen."}
                    </Typography>
                </Typography>
            </CardContent >
        </StyledCard >
    )
};


type AnimatedLogoProps = {
    toggle: boolean
}

const AnimatedLogo = ({ toggle }: AnimatedLogoProps) => {
    function IconL0() {
        return <path fillRule="evenodd" clipRule="evenodd" d="M246.245 196.504C232.758 206.121 226.594 223.056 230.744 239.093L253.448 326.826C261.516 358.007 231.307 385.451 201.042 374.435L99.6331 337.525C69.3682 326.51 63.8674 286.068 90.0906 267.369L163.877 214.755C177.364 205.138 183.528 188.202 179.378 172.166L156.674 84.4321C148.606 53.252 178.815 25.808 209.08 36.8235L310.489 73.7334C340.754 84.749 346.254 125.19 320.031 143.889L246.245 196.504ZM229.85 296.165C238.737 327.553 208.336 355.806 177.682 344.649L136.674 329.723C106.02 318.566 100.893 277.382 127.876 259.049L182.131 222.188C196.383 212.505 202.833 194.784 198.14 178.205L180.272 115.093C171.385 83.706 201.786 55.4523 232.44 66.6094L273.448 81.5352C304.102 92.6923 309.229 133.877 282.246 152.209L227.991 189.07C213.739 198.753 207.289 216.474 211.982 233.053L229.85 296.165Z" fill="#262626" stroke="white" />
    }

    function IconL1() {
        return <path fillRule="evenodd" clipRule="evenodd" d="M245.293 192.949C232.696 203.705 228.031 221.113 233.563 236.727L263.827 322.148C274.582 352.506 246.88 382.479 215.77 374.143L111.53 346.212C80.42 337.876 71.4155 298.068 95.9091 277.155L164.829 218.31C177.426 207.554 182.091 190.145 176.559 174.532L146.295 89.1105C135.54 58.7523 163.242 28.7798 194.352 37.1156L298.592 65.0467C329.702 73.3825 338.707 113.191 314.213 134.104L245.293 192.949ZM237.647 293.66C249.235 324.154 221.413 354.949 189.903 346.506L147.75 335.211C116.24 326.768 107.543 286.187 132.825 265.573L183.662 224.124C197.016 213.235 201.897 195.019 195.776 178.913L172.475 117.599C160.887 87.105 188.709 56.3092 220.219 64.7522L262.372 76.0471C293.882 84.4901 302.579 125.071 277.296 145.685L226.46 187.135C213.106 198.023 208.225 216.239 214.346 232.345L237.647 293.66Z" fill="#333333" stroke="white" />
    }

    function IconL2() {
        return <path fillRule="evenodd" clipRule="evenodd" d="M244.035 189.491C232.423 201.304 229.293 219.052 236.165 234.124L273.758 316.583C287.119 345.888 262.134 378.161 230.416 372.568L124.138 353.829C92.4204 348.236 79.9806 309.364 102.558 286.396L166.087 221.768C177.699 209.955 180.829 192.206 173.957 177.134L136.364 94.6757C123.003 65.3704 147.988 33.0975 179.706 38.6902L285.984 57.4299C317.702 63.0226 330.141 101.894 307.564 124.863L244.035 189.491ZM245.195 290.485C259.397 319.853 234.364 352.956 202.239 347.291L159.262 339.713C127.136 334.049 114.935 294.38 138.325 271.641L185.355 225.918C197.709 213.908 200.984 195.336 193.483 179.824L164.927 120.774C150.725 91.406 175.757 58.3026 207.883 63.9672L250.86 71.5452C282.986 77.2098 295.187 116.879 271.797 139.618L224.767 185.34C212.413 197.351 209.138 215.923 216.639 231.435L245.195 290.485Z" fill="#666666" stroke="white" />
    }

    function IconL3() {
        return <path fillRule="evenodd" clipRule="evenodd" d="M242.48 186.155C231.942 198.936 230.371 216.889 238.53 231.305L283.167 310.173C299.031 338.203 276.954 372.53 244.869 369.723L137.363 360.318C105.278 357.511 89.4976 319.871 109.988 295.022L167.642 225.103C178.18 212.323 179.751 194.369 171.592 179.953L126.955 101.085C111.091 73.0559 133.168 38.7283 165.252 41.5353L272.759 50.9409C304.844 53.748 320.624 91.3876 300.134 116.236L242.48 186.155ZM252.438 286.664C269.145 314.682 247.093 349.841 214.596 346.998L171.122 343.195C138.625 340.352 123.013 301.897 144.332 277.206L187.198 227.559C198.459 214.517 200.102 195.73 191.278 180.931L157.684 124.594C140.977 96.5763 163.029 61.4171 195.526 64.2603L239 68.0638C271.497 70.9069 287.109 109.361 265.79 134.052L222.924 183.7C211.663 196.742 210.02 215.528 218.844 230.327L252.438 286.664Z" fill="#999999" stroke="white" />
    }

    function IconL4() {
        return <path fillRule="evenodd" clipRule="evenodd" d="M240.641 182.968C231.256 196.618 231.256 214.64 240.64 228.29L291.981 302.968C310.228 329.508 291.227 365.629 259.02 365.629H151.102C118.895 365.629 99.8942 329.508 118.14 302.968L169.481 228.29C178.866 214.64 178.866 196.618 169.481 182.968L118.141 108.29C99.8942 81.7504 118.895 45.6293 151.102 45.6293H259.02C291.227 45.6293 310.228 81.7503 291.981 108.29L240.641 182.968ZM259.32 282.227C278.406 308.682 259.502 345.629 226.881 345.629H183.241C150.62 345.629 131.716 308.682 150.801 282.227L189.178 229.032C199.258 215.059 199.258 196.2 189.178 182.227L150.801 129.032C131.716 102.577 150.62 65.6293 183.241 65.6293H226.881C259.502 65.6293 278.406 102.577 259.32 129.032L220.944 182.227C210.864 196.2 210.864 215.059 220.944 229.032L259.32 282.227Z" fill="#CCCCCC" stroke="white" />
    }

    const icons = [<IconL0 />, <IconL1 />, <IconL2 />, <IconL3 />, <IconL4 />]

    const springs = useSprings(
        5,
        icons.map((_, index) => ({
            transform: toggle ? 'rotate(0deg) scale(1)' : 'rotate(360deg) scale(0)',
            delay: index * 100,
            config: {
                friction: 16
            },
        })),
    )

    const animatedIcons = springs.map((style, index) => (
        <animated.g
            key={index}
            style={{
                transformOrigin: 'center',
                transformBox: 'fill-box',
                ...style
            }}>
            {icons[index]}
        </animated.g>
    ))

    return (
        <svg width="200" height="200" viewBox="0 0 411 412" fill="none" xmlns="http://www.w3.org/2000/svg">
            {animatedIcons}
        </svg>
    );
};
