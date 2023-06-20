import { useContext } from 'react';
import { AppContext } from '../context/appContext';

const IconAboutMe = () => {
    const globalContext = useContext(AppContext);
    const { themes } = globalContext;
    //style={{ backgroundColor: `${(themes !== undefined) ? themes : "#21F9B8"}` }}

    return (
        <svg width="354" height="265" viewBox="0 0 354 265" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M298.642 203.022C297.435 203.022 296.254 203.38 295.25 204.052C294.245 204.723 293.463 205.678 293 206.794C292.538 207.911 292.417 209.14 292.653 210.325C292.888 211.51 293.47 212.599 294.324 213.454C295.178 214.309 296.266 214.891 297.451 215.126C298.636 215.362 299.864 215.241 300.979 214.779C302.095 214.316 303.049 213.533 303.72 212.528C304.391 211.523 304.749 210.341 304.749 209.133C304.749 207.512 304.106 205.958 302.961 204.812C301.815 203.666 300.262 203.022 298.642 203.022ZM298.642 212.894C297.899 212.894 297.172 212.673 296.554 212.26C295.936 211.847 295.455 211.259 295.17 210.572C294.886 209.885 294.811 209.129 294.956 208.399C295.101 207.67 295.459 207 295.985 206.474C296.511 205.948 297.18 205.589 297.909 205.444C298.638 205.299 299.394 205.374 300.081 205.658C300.767 205.943 301.354 206.425 301.767 207.043C302.18 207.662 302.401 208.389 302.401 209.133C302.401 210.13 302.005 211.087 301.3 211.792C300.595 212.497 299.639 212.894 298.642 212.894Z" fill="#E4E4E4" />
            <path d="M275.153 198.321H298.642V221.583C298.642 222.396 298.32 223.174 297.746 223.749C297.172 224.323 296.394 224.645 295.582 224.645H278.213C277.402 224.645 276.623 224.323 276.05 223.749C275.476 223.174 275.153 222.396 275.153 221.583V198.321Z" fill="#E4E4E4" />
            <path d="M353.524 225.178H0.476383C0.345455 225.163 0.224437 225.101 0.136527 225.003C0.0486156 224.905 0 224.778 0 224.646C0 224.514 0.0486156 224.387 0.136527 224.289C0.224437 224.191 0.345455 224.128 0.476383 224.114H353.524C353.655 224.128 353.776 224.191 353.863 224.289C353.951 224.387 354 224.514 354 224.646C354 224.778 353.951 224.905 353.863 225.003C353.776 225.101 353.655 225.163 353.524 225.178Z" fill="#CACACA" />
            <path d="M47.5221 215.131L45.3386 225.935L85.9421 239.504L89.1652 223.559L47.5221 215.131Z" fill="#FFB6B6" />
            <path d="M51.6041 213.089L47.3036 234.365L47.3034 234.366C46.5762 237.961 44.4515 241.121 41.3964 243.149C38.3414 245.177 34.6063 245.908 31.0128 245.181L30.5725 245.092L37.6138 210.258L51.6041 213.089Z" fill="#2F2E41" />
            <path d="M93.5342 66.3195C108.761 66.3195 121.104 53.968 121.104 38.7317C121.104 23.4953 108.761 11.1438 93.5342 11.1438C78.3078 11.1438 65.9644 23.4953 65.9644 38.7317C65.9644 53.968 78.3078 66.3195 93.5342 66.3195Z" fill="#FEB8B8" />
            <path d="M119.285 14.9312C115.163 8.23344 108.711 3.29814 101.171 1.07528L97.786 3.54681V0.337597C95.9751 0.060255 94.1422 -0.0465868 92.3114 0.0184804L89.3913 2.66234V0.238142C85.0678 0.775755 80.9026 2.20393 77.1582 4.43262C73.4137 6.66131 70.1714 9.64216 67.6357 13.1872C61.2942 22.3351 60.2238 35.0619 66.461 44.2832C68.173 39.0178 70.2512 34.0774 71.9637 28.8126C73.3094 28.9961 74.6733 29.0028 76.0207 28.8323L78.1037 23.9685L78.6857 28.6264C85.1424 28.0637 94.7192 26.8277 100.84 25.6954L100.245 22.1219L103.806 25.0912C105.681 24.6593 106.794 24.2674 106.703 23.9679C111.255 31.3118 116.826 36.0022 121.378 43.3461C123.107 32.9909 125.097 24.3806 119.285 14.9312Z" fill="#2F2E41" />
            <path d="M102.505 219.261C141.71 219.261 173.493 210.365 173.493 199.391C173.493 188.418 141.71 179.522 102.505 179.522C63.2989 179.522 31.5164 188.418 31.5164 199.391C31.5164 210.365 63.2989 219.261 102.505 219.261Z" fill="#2F2E41" />
            <path d="M152.829 109.675C151.881 103.967 150.903 98.1505 148.252 93.0091C146.51 89.6414 143.745 86.4321 140.017 85.7663C139.282 85.7008 138.561 85.5336 137.872 85.2695C136.78 84.743 122.101 76.3577 119.767 74.8973C117.764 73.6435 114.602 71.322 113.007 71.322C111.403 71.2867 105.252 72.7192 81.2443 70.8413C77.206 72.4634 73.2954 74.3874 69.5457 76.5969C69.4684 76.5459 44.6276 89.894 43.6944 89.8589C41.927 89.7844 40.2842 90.9167 39.271 92.3427C38.2581 93.7686 37.7829 95.5338 37.2854 97.2405C42.711 109.331 47.6752 121.437 53.1014 133.528C53.3555 133.983 53.4904 134.496 53.4938 135.017C53.3848 135.558 53.1539 136.068 52.8188 136.506C50.1579 140.783 50.2425 146.163 50.5331 151.19C50.8241 156.217 51.1838 161.527 48.9386 166.033C48.328 167.27 47.5338 168.403 46.953 169.64C45.5928 172.442 45.1013 181.403 45.8957 184.413L145.429 187.266C143.289 181.38 152.829 109.675 152.829 109.675Z" fill={(themes !== undefined) ? themes : "#21F9B8"} />
            <path d="M28.6819 134.064C28.4833 135.502 28.4633 136.958 28.6224 138.401L30.049 158.902C30.1829 160.834 30.3147 162.761 30.4959 164.689C30.8382 168.429 31.3495 172.14 31.9842 175.846C31.9985 176.372 32.2208 176.871 32.6024 177.233C32.9839 177.595 33.4935 177.791 34.0193 177.778C40.2991 179.107 46.7872 179.054 53.1961 178.692C62.9759 178.146 87.9961 177.112 89.5247 175.125C91.0533 173.138 90.1625 169.924 88.1693 168.318C86.1762 166.711 53.1584 162.794 53.1584 162.794C53.481 160.236 54.4542 157.826 55.3774 155.397C57.0357 151.089 58.5845 146.64 58.6143 142.025C58.6441 137.41 56.9066 132.558 53.1286 129.914C50.0209 127.744 46.0197 127.341 42.2327 127.43C39.4774 127.509 34.7167 126.849 32.2 127.927C30.2084 128.805 29.054 132.113 28.6819 134.064Z" fill="#FBBEBE" />
            <path d="M153.006 180.406C154.659 179.775 156.481 180.004 158.253 180.242C163.957 181.022 169.745 181.822 175.032 184.102C177.514 185.166 179.877 186.586 181.555 188.676C183.044 190.559 183.913 192.864 184.738 195.134L186.644 200.36C187.455 202.323 188.013 204.381 188.307 206.485C188.903 212.739 184.629 218.635 179.252 221.884C173.876 225.133 167.547 226.29 161.381 227.502C155.215 228.714 149.025 230.055 142.885 231.476C140.02 232.22 137.114 232.792 134.182 233.19C127.61 233.934 120.739 232.837 114.494 235.013C112.012 235.882 109.574 237.174 107 237.775C105.288 238.135 103.558 238.399 101.817 238.565L89.9974 239.915C87.5939 240.237 85.1741 240.423 82.7497 240.472C77.5872 240.472 72.5086 239.249 67.4955 238.025C66.9628 237.932 66.4557 237.727 66.0072 237.424C65.2132 236.798 65.0394 235.69 64.9251 234.687C64.4187 230.246 63.9758 225.801 63.5963 221.35C63.4773 219.904 63.388 218.34 64.1772 217.123C65.1701 215.634 67.1064 215.166 68.8737 214.877C76.3675 213.651 83.9591 213.123 91.5504 213.302C94.4344 210.417 99.1903 210.402 102.968 208.832C104.358 208.193 105.703 207.461 106.994 206.641C113.752 202.696 121.304 200.308 129.1 199.652C130.627 199.605 132.144 199.389 133.622 199.006C136.546 198.097 139.212 195.623 142.215 196.229C142.587 195.201 142.846 193.825 143.704 193.12C144.129 192.757 144.657 192.514 145.049 192.126C145.878 191.287 145.952 189.965 145.828 188.793C145.704 187.621 145.426 186.419 145.729 185.276C145.855 184.843 146.04 184.43 146.28 184.049C147.764 181.479 150.013 180.158 153.006 180.406Z" fill="#2F2E41" />
            <path d="M36.9983 97.6086C36.5148 98.1153 36.1399 98.7154 35.8965 99.3723C31.8838 108.422 29.5137 118.114 28.8971 127.995C28.9079 128.476 28.7969 128.953 28.5745 129.381C28.3551 129.665 28.1109 129.929 27.8447 130.17C27.6127 130.446 27.4371 130.764 27.328 131.107C27.2189 131.45 27.1784 131.812 27.2088 132.17C27.2392 132.529 27.34 132.879 27.5053 133.198C27.6707 133.518 27.8974 133.802 28.1724 134.035C28.2176 134.073 28.2639 134.109 28.3114 134.144C29.1304 132.602 31.0912 132.098 32.834 131.964C41.1786 131.303 49.3299 135.188 57.6995 134.895C57.109 132.853 56.2597 130.891 55.7781 128.825C53.6484 119.65 58.9602 109.66 55.7037 100.823C55.0531 99.0547 53.9662 97.3161 52.2537 96.5412C51.5446 96.255 50.8025 96.0585 50.0447 95.9562C47.9299 95.5738 43.7198 93.9393 41.6751 94.5951C40.9203 94.8387 40.6227 95.5487 39.9971 95.978C39.0468 96.5853 37.786 96.8087 36.9983 97.6086Z" fill={(themes !== undefined) ? themes : "#21F9B8"} />
            <path d="M152.889 127.927C150.372 126.849 145.611 127.509 142.856 127.43C139.069 127.341 135.068 127.744 131.96 129.914C128.182 132.558 126.444 137.41 126.474 142.025C126.504 146.64 128.053 151.089 129.711 155.397C130.634 157.826 131.608 160.236 131.93 162.794C131.93 162.794 98.9124 166.711 96.9192 168.318C94.9261 169.924 94.0353 173.138 95.5639 175.125C97.0925 177.112 144.789 179.107 151.069 177.778C151.595 177.791 152.105 177.595 152.486 177.233C152.868 176.871 153.09 176.372 153.104 175.846C153.739 172.14 154.25 168.429 154.593 164.689C154.774 162.761 154.906 160.834 155.04 158.902L156.466 138.401C156.625 136.958 156.605 135.502 156.407 134.064C156.035 132.113 154.88 128.805 152.889 127.927Z" fill="#FBBEBE" />
            <path d="M145.092 95.978C144.466 95.5487 144.168 94.8387 143.414 94.5951C141.369 93.9393 137.159 95.5738 135.044 95.9562C134.286 96.0585 133.544 96.255 132.835 96.5412C131.122 97.3161 130.036 99.0547 129.385 100.823C126.128 109.66 131.44 119.65 129.311 128.825C128.829 130.891 127.98 132.853 127.389 134.895C135.759 135.188 143.91 131.303 152.255 131.964C153.998 132.098 155.958 132.602 156.777 134.144C156.825 134.109 156.871 134.073 156.916 134.035C157.191 133.802 157.418 133.518 157.583 133.198C157.749 132.879 157.849 132.529 157.88 132.17C157.91 131.812 157.87 131.45 157.761 131.107C157.652 130.764 157.476 130.446 157.244 130.17C156.978 129.929 156.734 129.665 156.514 129.381C156.292 128.953 156.181 128.476 156.192 127.995C155.575 118.114 153.205 108.422 149.192 99.3723C148.949 98.7154 148.574 98.1153 148.09 97.6086C147.303 96.8087 146.042 96.5853 145.092 95.978Z" fill={(themes !== undefined) ? themes : "#21F9B8"} />
            <path d="M159.05 230.553L157.599 241.479L114.792 241.078L116.934 224.952L159.05 230.553Z" fill="#FFB6B6" />
            <path d="M170.004 229.174L165.325 264.404L164.88 264.345C161.245 263.862 157.952 261.953 155.723 259.04C153.495 256.127 152.514 252.447 152.997 248.81L152.997 248.81L155.855 227.292L170.004 229.174Z" fill="#2F2E41" />
            <path d="M58.3432 185.935C58.3432 186.432 57.564 185.935 57.4928 185.403C56.947 181.385 53.7595 178.071 50.0464 176.462C46.3333 174.853 42.1035 174.768 38.0827 175.15C32.0017 175.726 25.1755 178.056 22.9517 183.744C22.4255 185.074 17.4963 196.913 17.9773 199.575C19.2731 206.679 24.1279 212.754 30.0107 216.962C35.8934 221.169 42.7669 223.683 49.6233 225.95C67.751 231.933 86.3498 236.378 105.223 239.238C108.281 239.7 111.369 240.127 114.297 241.111C116.918 241.99 119.37 243.306 121.932 244.339C127.889 246.733 134.298 247.588 140.647 248.428C141.729 248.567 142.97 248.666 143.77 247.931C144.803 246.974 144.461 245.303 144.167 243.927C143.089 238.695 143.993 233.25 146.704 228.648C147.767 226.859 149.149 225.026 148.948 222.957C148.71 220.543 146.307 218.834 143.914 218.446C141.521 218.058 139.089 218.63 136.685 218.943C135.862 219.132 134.999 219.047 134.228 218.699C133.871 218.458 133.547 218.171 133.265 217.845C131.61 216.247 129.492 215.215 127.214 214.897C124.936 214.578 122.616 214.989 120.587 216.072C119.698 216.569 118.354 215.461 117.429 215.044L106.989 210.315C94.996 204.885 82.943 199.431 70.2543 195.993C69.2419 195.794 68.2796 195.394 67.4246 194.816C66.7942 194.319 66.3424 193.646 65.7615 193.092C64.4954 191.895 62.7319 191.418 61.2144 190.568C59.697 189.719 57.9956 187.639 58.3432 185.935Z" fill="#2F2E41" />
            <path d="M85.3691 178.757C89.4787 178.757 92.8102 175.423 92.8102 171.311C92.8102 167.199 89.4787 163.865 85.3691 163.865C81.2595 163.865 77.928 167.199 77.928 171.311C77.928 175.423 81.2595 178.757 85.3691 178.757Z" fill="#FBBEBE" />
            <path d="M101.846 178.757C105.956 178.757 109.287 175.423 109.287 171.311C109.287 167.199 105.956 163.865 101.846 163.865C97.7363 163.865 94.4048 167.199 94.4048 171.311C94.4048 175.423 97.7363 178.757 101.846 178.757Z" fill="#FBBEBE" />
            <path d="M147.778 188.089H45.5484C44.3548 188.088 43.2106 187.613 42.3666 186.768C41.5226 185.924 41.0478 184.779 41.0464 183.585V121.524C41.0478 120.33 41.5226 119.185 42.3666 118.341C43.2106 117.496 44.3548 117.021 45.5484 117.02H147.778C148.972 117.021 150.116 117.496 150.96 118.341C151.804 119.185 152.279 120.33 152.28 121.524V183.585C152.279 184.779 151.804 185.924 150.96 186.768C150.116 187.613 148.972 188.088 147.778 188.089Z" fill="#3F3D56" />
            <path d="M96.4151 155.535C98.0601 155.535 99.3937 154.201 99.3937 152.554C99.3937 150.908 98.0601 149.574 96.4151 149.574C94.7701 149.574 93.4365 150.908 93.4365 152.554C93.4365 154.201 94.7701 155.535 96.4151 155.535Z" fill="white" />
            <path d="M284.156 145.473C272.055 145.473 260.674 143.671 252.108 140.398C243.427 137.082 238.647 132.627 238.647 127.854C238.647 123.081 243.427 118.626 252.108 115.309C260.674 112.037 272.055 110.234 284.156 110.234C296.256 110.234 307.637 112.037 316.203 115.309C324.884 118.626 329.664 123.081 329.664 127.854C329.664 132.627 324.884 137.082 316.203 140.398C307.637 143.671 296.256 145.473 284.156 145.473ZM284.156 110.986C272.145 110.986 260.858 112.771 252.376 116.012C244.007 119.209 239.398 123.415 239.398 127.854C239.398 132.293 244.007 136.499 252.376 139.696C260.858 142.937 272.145 144.722 284.156 144.722C296.166 144.722 307.453 142.937 315.935 139.696C324.304 136.499 328.913 132.293 328.913 127.854C328.913 123.414 324.304 119.209 315.935 116.012C307.453 112.771 296.166 110.986 284.156 110.986Z" fill={(themes !== undefined) ? themes : "#21F9B8"} />
            <path d="M302.958 168.292C299.198 168.292 294.51 166.117 289.323 161.898C282.207 156.111 274.956 147.149 268.906 136.664C262.856 126.178 258.725 115.413 257.275 106.354C255.805 97.173 257.27 90.8028 261.401 88.4164C265.532 86.0301 271.778 87.9452 278.988 93.8091C286.104 99.5962 293.355 108.558 299.405 119.044C305.455 129.53 309.585 140.294 311.036 149.354C312.506 158.534 311.04 164.905 306.91 167.291C305.751 167.961 304.425 168.292 302.958 168.292ZM265.373 88.1616C264.032 88.1616 262.826 88.4611 261.777 89.0673C257.935 91.2869 256.599 97.3836 258.017 106.235C259.453 115.206 263.551 125.879 269.557 136.288C275.562 146.696 282.75 155.584 289.796 161.315C296.748 166.969 302.692 168.86 306.534 166.64C310.376 164.42 311.711 158.324 310.294 149.473C308.858 140.501 304.759 129.828 298.754 119.42C292.749 109.011 285.561 100.123 278.514 94.3925C273.462 90.2831 268.941 88.1616 265.373 88.1616Z" fill={(themes !== undefined) ? themes : "#21F9B8"} />
            <path d="M265.353 168.292C263.886 168.292 262.56 167.961 261.401 167.291C257.27 164.905 255.805 158.535 257.275 149.354C258.725 140.294 262.856 129.53 268.906 119.044C274.956 108.558 282.207 99.5963 289.323 93.8093C296.533 87.9453 302.779 86.0299 306.91 88.4165C311.04 90.8029 312.506 97.1731 311.036 106.354C309.585 115.413 305.455 126.178 299.405 136.664C293.355 147.15 286.104 156.111 278.988 161.898C273.801 166.117 269.113 168.292 265.353 168.292ZM302.938 88.1617C299.37 88.1617 294.85 90.283 289.796 94.3927C282.75 100.123 275.562 109.011 269.557 119.42C263.551 129.828 259.453 140.501 258.017 149.473C256.599 158.324 257.935 164.421 261.777 166.64C262.826 167.246 264.033 167.546 265.373 167.546C268.941 167.546 273.461 165.425 278.514 161.315C285.561 155.584 292.749 146.696 298.754 136.288C304.759 125.879 308.858 115.206 310.294 106.235C311.711 97.3838 310.376 91.2871 306.534 89.0674C305.485 88.4614 304.278 88.1617 302.938 88.1617Z" fill={(themes !== undefined) ? themes : "#21F9B8"} />
            <path d="M284.155 136.27C288.801 136.27 292.566 132.502 292.566 127.854C292.566 123.205 288.801 119.437 284.155 119.437C279.51 119.437 275.744 123.205 275.744 127.854C275.744 132.502 279.51 136.27 284.155 136.27Z" fill={(themes !== undefined) ? themes : "#21F9B8"} />
            <path d="M266.814 60.4896L286.522 40.8295L266.814 21.1694L272.823 15.1771L298.538 40.8295L272.823 66.4819L266.814 60.4896Z" fill="#E6E6E6" />
            <path d="M218.547 32.9423H210.536V40.9586H218.547V32.9423Z" fill="#E6E6E6" />
            <path d="M250.752 32.9423H242.741V40.9586H250.752V32.9423Z" fill="#E6E6E6" />
            <path d="M234.649 32.9423H226.638V40.9586H234.649V32.9423Z" fill="#E6E6E6" />
            <path d="M199.681 60.2893L179.953 40.6292L199.661 20.969L193.652 14.9768L167.957 40.6292L193.672 66.2815L199.681 60.2893Z" fill="#E6E6E6" />
            <path d="M266.814 56.6821L286.522 37.022L266.814 17.3615L272.823 11.3693L298.538 37.022L272.823 62.6743L266.814 56.6821Z" fill={(themes !== undefined) ? themes : "#21F9B8"} />
            <path d="M210.536 38.4246H218.547V30.4082H210.536L210.536 38.4246ZM250.752 30.4082H242.741V38.4246H250.752V30.4082ZM226.638 38.4246H234.649V30.4082H226.638V38.4246Z" fill={(themes !== undefined) ? themes : "#21F9B8"} />
            <path d="M199.681 56.4815L179.953 36.8213L199.661 17.1612L193.652 11.1689L167.957 36.8213L193.672 62.4737L199.681 56.4815Z" fill={(themes !== undefined) ? themes : "#21F9B8"} />
        </svg>
    )
}

export default IconAboutMe