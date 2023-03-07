import React from 'react';

export const iconsDB = {
  files: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.5 0H8.5L7 1.5V6H2.5L1 7.5V22.5699L2.5 24H14.5699L16 22.5699V18H20.7L22 16.5699V4.5L17.5 0ZM17.5 2.12L19.88 4.5H17.5V2.12ZM14.5 22.5H2.5V7.5H7V16.5699L8.5 18H14.5V22.5ZM20.5 16.5H8.5V1.5H16V6H20.5V16.5Z"
        fill="#C5C5C5"
      />
    </svg>
  ),
  search: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.25 1.02546e-06C13.6605 -0.000791296 12.1046 0.457574 10.7694 1.32007C9.43422 2.18256 8.37657 3.4124 7.72375 4.8617C7.07094 6.31099 6.85077 7.91801 7.0896 9.4895C7.32843 11.061 8.01604 12.5301 9.06995 13.72L1 22.88L2.12 23.88L10.17 14.76C11.2055 15.5693 12.4192 16.1196 13.7103 16.365C15.0014 16.6104 16.3325 16.5437 17.5927 16.1707C18.8528 15.7976 20.0055 15.1288 20.955 14.2201C21.9044 13.3114 22.623 12.1891 23.0509 10.9465C23.4789 9.70396 23.6038 8.37703 23.4153 7.07642C23.2267 5.77581 22.7302 4.53915 21.967 3.46924C21.2039 2.39933 20.1962 1.52711 19.0278 0.925416C17.8595 0.323719 16.5642 0.00991516 15.25 0.0100108V1.02546e-06ZM15.25 15C13.915 15 12.6099 14.6041 11.4999 13.8624C10.3898 13.1207 9.52469 12.0665 9.01379 10.8331C8.5029 9.59973 8.36919 8.24248 8.62964 6.93311C8.89009 5.62373 9.53305 4.42106 10.4771 3.47705C11.4211 2.53305 12.6237 1.89009 13.9331 1.62964C15.2425 1.36919 16.5997 1.5029 17.8331 2.01379C19.0665 2.52469 20.1207 3.38985 20.8624 4.49988C21.6041 5.60991 22 6.91498 22 8.25C22 10.0402 21.2888 11.7571 20.0229 13.023C18.7571 14.2888 17.0402 15 15.25 15Z"
        fill="#C5C5C5"
      />
    </svg>
  ),
  debug: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_8368_4953)">
        <path d="M3.46279 12.86L3.45815 12.79C3.45964 12.8134 3.46119 12.8367 3.46279 12.86Z" fill="#C5C5C5" />
        <path
          d="M10.7275 13.5509L7.69304 10.501L8.70723 9.4868L11.9159 12.7117L15.0789 9.54875L16.0931 10.5629L13.0589 13.5972L16.0934 16.647L15.0792 17.6612L11.8705 14.4362L8.70748 17.5993L7.69329 16.5851L10.7275 13.5509Z"
          fill="#C5C5C5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.9329 5.00286V6H18.2784L21.1205 3.15788L22.1347 4.17207L19.4435 6.86321L19.476 6.94805C20.0424 8.42597 20.3614 10.094 20.3614 11.86C20.3614 12.1955 20.3499 12.5274 20.3274 12.8552L20.3222 12.93H23.8629V14.3643H20.142L20.1315 14.4217C19.8292 16.075 19.2409 17.5825 18.4398 18.851L18.3802 18.9454L21.8027 22.3852L20.7859 23.3968L17.512 20.1063L17.4131 20.2169C15.934 21.8712 14.0177 22.8629 11.93 22.8629C9.81001 22.8629 7.86653 21.8402 6.37842 20.1395L6.27988 20.0268L3.07125 23.2355L2.05706 22.2213L5.42258 18.8558L5.36431 18.7615C4.59172 17.5118 4.02373 16.0363 3.72847 14.4217L3.71797 14.3643H0V12.93H3.53777L3.53262 12.8552C3.51009 12.5274 3.49858 12.1955 3.49858 11.86C3.49858 10.117 3.80935 8.46951 4.36194 7.00599L4.39377 6.92168L1.63228 4.14621L2.64904 3.13457L5.50003 6H6.92715V5.00286C6.92715 2.23986 9.16701 0 11.93 0C14.693 0 16.9329 2.23986 16.9329 5.00286ZM8.36144 5.00286V6H15.4986V5.00286C15.4986 3.03199 13.9009 1.43429 11.93 1.43429C9.95914 1.43429 8.36144 3.03199 8.36144 5.00286ZM18.1609 7.52498L18.1267 7.43429H5.73328L5.69915 7.52498C5.21331 8.81605 4.93286 10.2859 4.93286 11.86C4.93286 14.6199 5.7951 17.061 7.11691 18.7793C8.43755 20.4962 10.1529 21.4286 11.93 21.4286C13.7072 21.4286 15.4225 20.4962 16.7431 18.7793C18.0649 17.061 18.9271 14.6199 18.9271 11.86C18.9271 10.2859 18.6467 8.81605 18.1609 7.52498Z"
          fill="#C5C5C5"
        />
      </g>
      <defs>
        <clipPath id="clip0_8368_4953">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  git: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.0067 8.22168C21.0102 7.52792 20.8205 6.84689 20.4589 6.25485C20.0971 5.66281 19.5778 5.18315 18.959 4.86957C18.3401 4.556 17.6461 4.42091 16.9548 4.47941C16.2635 4.53793 15.6022 4.78773 15.0448 5.20085C14.4875 5.61397 14.0561 6.17409 13.7991 6.8185C13.5421 7.4629 13.4695 8.16613 13.5895 8.84944C13.7096 9.53274 14.0174 10.1692 14.4787 10.6874C14.94 11.2056 15.5365 11.5852 16.2012 11.7836C15.9558 12.2824 15.576 12.703 15.1047 12.9979C14.6334 13.2929 14.0892 13.4505 13.5331 13.4532H10.5437C9.43702 13.4571 8.37138 13.8727 7.55427 14.6191V7.39809C8.46159 7.21288 9.26783 6.69737 9.81668 5.95151C10.3655 5.20565 10.6178 4.28256 10.5248 3.36121C10.4317 2.43987 9.99985 1.5859 9.31292 0.964873C8.62599 0.343845 7.73295 0 6.80691 0C5.88087 0 4.98783 0.343845 4.3009 0.964873C3.61397 1.5859 3.18211 2.43987 3.08904 3.36121C2.99596 4.28256 3.24831 5.20565 3.79715 5.95151C4.34599 6.69737 5.15223 7.21288 6.05955 7.39809V16.5159C5.15393 16.6891 4.34299 17.1877 3.77969 17.9176C3.21639 18.6476 2.93968 19.5585 3.00173 20.4785C3.06379 21.3984 3.46033 22.2639 4.11656 22.9115C4.77279 23.5592 5.64335 23.9444 6.56403 23.9944C7.48472 24.0445 8.39187 23.7558 9.1144 23.183C9.83693 22.6102 10.3249 21.7928 10.4862 20.885C10.6475 19.9771 10.4712 19.0417 9.99023 18.255C9.50932 17.4683 8.75717 16.8848 7.87564 16.6145C8.12152 16.1162 8.50142 15.6963 8.97272 15.4019C9.44401 15.1074 9.98803 14.9503 10.5437 14.9479H13.5331C14.4658 14.9436 15.3739 14.6486 16.1311 14.1039C16.8882 13.5592 17.4566 12.792 17.7572 11.9091C18.6531 11.7914 19.476 11.3528 20.0735 10.6748C20.671 9.9968 21.0025 9.12533 21.0067 8.22168ZM4.56483 3.73752C4.56483 3.29408 4.69633 2.8606 4.94269 2.4919C5.18906 2.12319 5.53922 1.83581 5.9489 1.66611C6.3586 1.49642 6.8094 1.45202 7.24432 1.53854C7.67924 1.62504 8.07874 1.83857 8.3923 2.15214C8.70586 2.4657 8.9194 2.8652 9.00591 3.30012C9.09241 3.73504 9.04802 4.18585 8.87832 4.59553C8.70862 5.00521 8.42125 5.35539 8.05254 5.60175C7.68383 5.84811 7.25035 5.9796 6.80691 5.9796C6.21227 5.9796 5.642 5.74339 5.22152 5.32291C4.80105 4.90245 4.56483 4.33216 4.56483 3.73752ZM9.04899 20.1794C9.04899 20.6229 8.91749 21.0563 8.67113 21.425C8.42476 21.7937 8.0746 22.0811 7.66492 22.2508C7.25523 22.4205 6.80442 22.4649 6.36951 22.3784C5.93458 22.292 5.53509 22.0784 5.22152 21.7648C4.90796 21.4512 4.69443 21.0517 4.60791 20.6169C4.52141 20.1819 4.5658 19.7311 4.7355 19.3214C4.9052 18.9117 5.19258 18.5615 5.56128 18.3152C5.92999 18.0689 6.36347 17.9373 6.80691 17.9373C7.40155 17.9373 7.97183 18.1736 8.3923 18.594C8.81277 19.0145 9.04899 19.5848 9.04899 20.1794ZM17.2699 10.4638C16.8265 10.4638 16.393 10.3322 16.0243 10.0859C15.6556 9.83954 15.3683 9.48937 15.1986 9.07969C15.0289 8.67 14.9844 8.2192 15.0709 7.78427C15.1574 7.34935 15.3709 6.94985 15.6845 6.63629C15.9981 6.32273 16.3976 6.10919 16.8325 6.02268C17.2674 5.93617 17.7183 5.98058 18.1279 6.15027C18.5377 6.31997 18.8878 6.60734 19.1341 6.97605C19.3805 7.34476 19.512 7.77823 19.512 8.22168C19.512 8.81632 19.2757 9.3866 18.8553 9.80706C18.4348 10.2275 17.8645 10.4638 17.2699 10.4638Z"
        fill="#C5C5C5"
      />
    </svg>
  ),
  extensions: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_8368_4956)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5 1.5L15 0H22.5L24 1.5V9L22.5 10.5H15L13.5 9V1.5ZM15 1.5V9H22.5V1.5H15ZM0 15V6L1.5 4.5H9L10.5 6V13.5H18L19.5 15V22.5L18 24H10.5H9H1.5L0 22.5V15ZM9 13.5V6H1.5V13.5H9ZM9 15H1.5V22.5H9V15ZM10.5 22.5H18V15H10.5V22.5Z"
          fill="#C5C5C5"
        />
      </g>
      <defs>
        <clipPath id="clip0_8368_4956">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  settings: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_8368_4958)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.85 8.75L24 9.57996V14.42L19.85 15.25L22.2 18.77L18.77 22.2L15.25 19.85L14.42 24H9.57996L8.75 19.85L5.22998 22.2L1.80005 18.77L4.15002 15.25L0 14.42V9.57996L4.15002 8.75L1.80005 5.22998L5.22998 1.80005L8.75 4.15002L9.57996 0H14.42L15.25 4.15002L18.77 1.80005L22.2 5.22998L19.85 8.75ZM18.28 13.8199L22.28 13.01V11.01L18.28 10.2L17.74 8.90002L20.03 5.46997L18.6 4.04004L15.17 6.32996L13.87 5.79004L13.0601 1.79004H11.0601L10.25 5.79004L8.94995 6.32996L5.52002 4.04004L4.08997 5.46997L6.38 8.90002L5.83997 10.2L1.83997 11.01V13.01L5.83997 13.8199L6.38 15.12L4.08997 18.55L5.52002 19.98L8.94995 17.6899L10.25 18.23L11.0601 22.23H13.0601L13.87 18.23L15.17 17.6899L18.6 19.98L20.03 18.55L17.74 15.12L18.28 13.8199ZM10.0943 9.14807C10.6584 8.77118 11.3216 8.56995 12 8.56995C12.9089 8.57258 13.7798 8.93484 14.4225 9.57751C15.0652 10.2202 15.4274 11.0911 15.43 12C15.43 12.6784 15.2288 13.3416 14.8519 13.9056C14.475 14.4697 13.9394 14.9093 13.3126 15.1689C12.6859 15.4286 11.9962 15.4965 11.3308 15.3641C10.6654 15.2318 10.0543 14.9051 9.57457 14.4254C9.09488 13.9457 8.7682 13.3345 8.63585 12.6692C8.50351 12.0038 8.57143 11.3141 8.83104 10.6874C9.09065 10.0606 9.53029 9.52496 10.0943 9.14807ZM11.0499 13.4218C11.3311 13.6097 11.6618 13.71 12 13.71C12.2249 13.7113 12.4479 13.668 12.656 13.5825C12.8641 13.4971 13.0531 13.3712 13.2121 13.2122C13.3712 13.0531 13.497 12.8641 13.5825 12.656C13.668 12.4479 13.7113 12.2249 13.7099 12C13.7099 11.6618 13.6096 11.3311 13.4217 11.0499C13.2338 10.7687 12.9669 10.5496 12.6544 10.4202C12.3419 10.2907 11.9981 10.2569 11.6664 10.3229C11.3347 10.3889 11.03 10.5517 10.7909 10.7909C10.5517 11.03 10.3888 11.3347 10.3229 11.6664C10.2569 11.9981 10.2907 12.342 10.4202 12.6544C10.5496 12.9669 10.7687 13.2339 11.0499 13.4218Z"
          fill="#C5C5C5"
        />
      </g>
      <defs>
        <clipPath id="clip0_8368_4958">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  closeAll: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.62132 8.0858L7.91421 7.37869L6.5 8.7929L5.08579 7.37869L4.37868 8.0858L5.79289 9.50001L4.37868 10.9142L5.08579 11.6213L6.5 10.2071L7.91421 11.6213L8.62132 10.9142L7.20711 9.50001L8.62132 8.0858Z"
        fill="#C5C5C5"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 3L6 2H13L14 3V10L13 11H11V13L10 14H3L2 13V6L3 5H5V3ZM6 5H10L11 6V10H13V3H6V5ZM10 6H3V13H10V6Z" fill="#C5C5C5" />
    </svg>
  ),
  ellipsis: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 8C4 8.19778 3.94135 8.39112 3.83147 8.55557C3.72159 8.72002 3.56541 8.84819 3.38268 8.92388C3.19996 8.99957 2.99889 9.01937 2.80491 8.98079C2.61093 8.9422 2.43275 8.84696 2.29289 8.70711C2.15304 8.56725 2.0578 8.38907 2.01922 8.19509C1.98063 8.00111 2.00043 7.80004 2.07612 7.61732C2.15181 7.43459 2.27998 7.27841 2.44443 7.16853C2.60888 7.05865 2.80222 7 3 7C3.26522 7 3.51957 7.10536 3.70711 7.29289C3.89464 7.48043 4 7.73478 4 8Z"
        fill="#C5C5C5"
      />
      <path
        d="M9 8C9 8.19778 8.94135 8.39112 8.83147 8.55557C8.72159 8.72002 8.56541 8.84819 8.38268 8.92388C8.19996 8.99957 7.99889 9.01937 7.80491 8.98079C7.61093 8.9422 7.43275 8.84696 7.29289 8.70711C7.15304 8.56725 7.0578 8.38907 7.01922 8.19509C6.98063 8.00111 7.00043 7.80004 7.07612 7.61732C7.15181 7.43459 7.27998 7.27841 7.44443 7.16853C7.60888 7.05865 7.80222 7 8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8Z"
        fill="#C5C5C5"
      />
      <path
        d="M14 8C14 8.19778 13.9414 8.39112 13.8315 8.55557C13.7216 8.72002 13.5654 8.84819 13.3827 8.92388C13.2 8.99957 12.9989 9.01937 12.8049 8.98079C12.6109 8.9422 12.4327 8.84696 12.2929 8.70711C12.153 8.56725 12.0578 8.38907 12.0192 8.19509C11.9806 8.00111 12.0004 7.80004 12.0761 7.61732C12.1518 7.43459 12.28 7.27841 12.4444 7.16853C12.6089 7.05865 12.8022 7 13 7C13.2652 7 13.5196 7.10536 13.7071 7.29289C13.8946 7.48043 14 7.73478 14 8Z"
        fill="#C5C5C5"
      />
    </svg>
  ),
  unity: (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny-ps" viewBox="0 0 1488 1681" width="16" height="16" style={{ backgroundColor: 'white' }}>
      <title>Unity_2021-svg</title>
      <g id="g849">
        <path
          id="path6"
          className="shp0"
          d="M1487.5 1176.11L1487.5 392.04L808.5 0L808.5 301.03L1074.5 455.04C1085 462.04 1085 476.05 1074.5 479.55L759.5 661.56C749 668.56 738.5 665.06 731.5 661.56L416.5 479.55C406 476.05 406 458.54 416.5 455.04L682.5 301.03L682.5 0L0 392.04L0 1176.11L0 1172.61L0 1176.11L259 1025.6L259 717.57C259 707.07 273 700.07 280 703.57L595 885.58C605.5 892.58 609 899.59 609 910.09L609 1274.12C609 1284.62 595 1291.62 588 1288.12L322 1134.11L63 1284.62L742 1680.16L1421 1288.12L1162 1137.61L896 1291.62C885.5 1298.62 875 1291.62 875 1277.62L875 913.59C875 903.09 882 892.58 889 889.08L1204 707.07C1214.5 700.07 1225 707.07 1225 721.07L1225 1029.1L1487.5 1176.11Z"
        />
        <path
          id="path8"
          className="shp1"
          d="M742 1680.16L1421 1288.12L1162 1137.61L896 1291.62C885.5 1298.62 875 1291.62 875 1277.62L875 913.59C875 903.09 882 892.58 889 889.08L1204 707.07C1214.5 700.07 1225 707.07 1225 721.07L1225 1029.1L1484 1179.61L1484 392.04L742 822.58L742 1680.16Z"
        />
        <path
          id="path10"
          className="shp2"
          d="M808.5 0L808.5 301.03L1074.5 455.04C1085 462.04 1085 476.05 1074.5 479.55L759.5 661.56C749 668.56 738.5 665.06 731.5 661.56L416.5 479.55C406 476.05 406 458.54 416.5 455.04L682.5 301.03L682.5 0L0 392.04L742 822.58L1484 392.04L808.5 0Z"
        />
        <path
          id="path12"
          className="shp0"
          d="M591.5 1291.62L325.5 1137.61L66.5 1288.12L745.5 1680.16L745.5 822.58L0 392.04L0 1176.11L0 1172.61L0 1176.11L259 1025.6L259 717.57C259 707.07 273 700.07 280 703.57L595 885.58C605.5 892.58 609 899.59 609 910.09L609 1274.12C612.5 1288.12 602 1298.62 591.5 1291.62L591.5 1291.62Z"
        />
      </g>
    </svg>
  ),
  javascript: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" preserveAspectRatio="xMinYMin meet">
      <path d="M0 0h256v256H0V0z" fill="#F7DF1E" />
      <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
    </svg>
  ),
  bottomArrow: (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.97612 10.0719L12.3334 5.7146L12.9521 6.33332L8.28548 11L7.66676 11L3.0001 6.33332L3.61882 5.7146L7.97612 10.0719Z" fill="#C5C5C5" />
    </svg>
  ),
  rightArrow: (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.0719 8.02397L5.7146 3.66666L6.33332 3.04794L11 7.71461V8.33333L6.33332 13L5.7146 12.3813L10.0719 8.02397Z" fill="#C5C5C5" />
    </svg>
  ),
  linkedin: (
    <svg style={{ color: '#0077B5' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
      {' '}
      <path
        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
        fill="#0077B5"
      ></path>{' '}
    </svg>
  ),
  itchio: (
    <svg style={{ color: 'red' }} width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M71.92 34.77C50.2 47.67 7.4 96.84 7 109.73v21.34c0 27.06 25.29 50.84 48.25 50.84 27.57 0 50.54-22.85 50.54-50 0 27.12 22.18 50 49.76 50s49-22.85 49-50c0 27.12 23.59 50 51.16 50h.5c27.57 0 51.16-22.85 51.16-50 0 27.12 21.47 50 49 50s49.76-22.85 49.76-50c0 27.12 23 50 50.54 50 23 0 48.25-23.78 48.25-50.84v-21.34c-.4-12.9-43.2-62.07-64.92-75C372.56 32.4 325.76 32 256 32S91.14 33.1 71.92 34.77zm132.32 134.39c-22 38.4-77.9 38.71-99.85.25-13.17 23.14-43.17 32.07-56 27.66-3.87 40.15-13.67 237.13 17.73 269.15 80 18.67 302.08 18.12 379.76 0 31.65-32.27 21.32-232 17.75-269.15-12.92 4.44-42.88-4.6-56-27.66-22 38.52-77.85 38.1-99.85-.24-7.1 12.49-23.05 28.94-51.76 28.94a57.54 57.54 0 0 1-51.75-28.94zm-41.58 53.77c16.47 0 31.09 0 49.22 19.78a436.91 436.91 0 0 1 88.18 0C318.22 223 332.85 223 349.31 223c52.33 0 65.22 77.53 83.87 144.45 17.26 62.15-5.52 63.67-33.95 63.73-42.15-1.57-65.49-32.18-65.49-62.79-39.25 6.43-101.93 8.79-155.55 0 0 30.61-23.34 61.22-65.49 62.79-28.42-.06-51.2-1.58-33.94-63.73 18.67-67 31.56-144.45 83.88-144.45zM256 270.79s-44.38 40.77-52.35 55.21l29-1.17v25.32c0 1.55 21.34.16 23.33.16 11.65.54 23.31 1 23.31-.16v-25.28l29 1.17c-8-14.48-52.35-55.24-52.35-55.24z"
        fill="red"
      ></path>
    </svg>
  ),
};
