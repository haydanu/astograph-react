import React from 'react';
import { Link } from 'react-router-dom';

import './tradeHeader.css';

export default function TradeHeader() {
  return (
    <div className='asset-info'>
      <div className='trade-header'>
        <Link className='trade-header_left' to='/'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'>
            <path
              fill='#313147'
              fill-rule='evenodd'
              d='M10.001 12L20 2h-5.656l-10 10 10 10H20z'></path>
          </svg>
        </Link>

        <div className='trade-header_center'>
          <div className='trade-header_center content'>
            <div className='market-half_left'>
              <div className='market-half-left small-content'>
                <span>XLM</span>
              </div>
              <div className='market-half-left small-content'>
                <div>
                  <span>Native</span>
                </div>
              </div>
            </div>
            <div>
              <svg
                width='32'
                height='32'
                viewBox='0 0 48 48'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M38.975 10.813l-5.044 2.57L9.576 25.788a14.509 14.509 0 0 1 21.459-14.542l2.887-1.471.43-.22A17.722 17.722 0 0 0 6.274 25.247a3.224 3.224 0 0 1-1.75 3.116L3 29.139v3.62l4.482-2.284 1.451-.74 1.43-.729 25.675-13.082 2.885-1.47 5.964-3.038V7.797l-5.912 3.016zm5.912 4.225L11.822 31.873l-2.885 1.473L3 36.371v3.617l5.896-3.004 5.043-2.57 24.38-12.422a14.509 14.509 0 0 1-21.48 14.553l-.177.094-3.13 1.595a17.722 17.722 0 0 0 28.081-15.696 3.225 3.225 0 0 1 1.75-3.116l1.524-.776v-3.608z'
                  fill='#FFF'></path>
              </svg>
            </div>
          </div>
          <a
            className='market-header_swapLink'
            href='/markets/native/ETH:GBVOL67TMUQBGL4TZYNMY3ZQ5WGQYFPFD5VJRWXR72VA33VFNL225PL5'>
            <span className='swapLink-content'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='12'
                viewBox='0 0 24 24'>
                <path
                  fill='#313147'
                  fillRule='evenodd'
                  d='M9.344 22l5-5H0v-4h24l-3.351 3.352L20 17l-5 5H9.344zm5.312-20l-5 5H24v4H0l3.351-3.352L4 7l5-5h5.656z'></path>
              </svg>
            </span>
          </a>
          <div className='trade-header_center-right'>
            <div>
              <svg
                width='32'
                height='32'
                viewBox='0 0 48 48'
                xmlns='http://www.w3.org/2000/svg'>
                <g fill='#FFF'>
                  <path d='M23.888 3l-.281.957v27.765l.281.281 12.888-7.618z'></path>
                  <path d='M23.888 3L11 24.385l12.888 7.618V18.527zm0 31.443l-.158.194v9.89l.158.464 12.896-18.162z'></path>
                  <path d='M23.888 44.99V34.443L11 26.83zm0-12.987l12.888-7.618-12.888-5.858zM11 24.385l12.888 7.618V18.527z'></path>
                </g>
              </svg>
            </div>
            <div className='market-half_left'>
              <div className='small-content'>
                <span className='MarketHalf__TokenNameEl-r3ov65-3 gROqnq'>
                  Ether
                </span>
              </div>
              <div className='small-content'>
                <div className='HoverTextTooltip__El-nqnk5d-0 gExRmk'>
                  <div className='MarketHalf__IssuerUrlEl-r3ov65-1 kpQddB'>
                    <span className='IssuerUrl__El-sc-1wnloln-0 hngyeP'>
                      <svg
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                        width='12'
                        height='12'
                        className='IssuerUrl__TetherEl-sc-1wnloln-1 kFvbnM'>
                        <path
                          d='M15.762 19.686a.72.72 0 0 1 .65.404.681.681 0 0 1-.104.742C14.558 22.844 11.985 24 9.256 24 4.152 24 0 19.967 0 15.01c0-4.956 4.152-8.99 9.256-8.99a9.43 9.43 0 0 1 7.014 3.106c.186.205.23.497.114.745a.716.716 0 0 1-.652.407H13.41c-.284 0-.572.024-.846.073a.705.705 0 0 1-.483-.08 5.853 5.853 0 0 0-2.825-.729c-3.13 0-5.673 2.478-5.673 5.524 0 3.04 2.543 5.51 5.673 5.51 1.098 0 2.138-.288 3.007-.834a.719.719 0 0 1 .515-.101c.203.034.418.045.633.045h2.35zM14.742 0c2.473 0 4.798.935 6.545 2.636C23.038 4.333 24 6.59 24 8.99c0 2.402-.964 4.657-2.713 6.357-1.747 1.699-4.07 2.633-6.54 2.633h-.003c-2.685 0-5.242-1.13-7.014-3.104a.68.68 0 0 1-.114-.746.719.719 0 0 1 .652-.408h2.321c.286 0 .574-.022.845-.072a.74.74 0 0 1 .483.079c2.194 1.211 5.069.833 6.836-.886a5.412 5.412 0 0 0 1.664-3.909c0-3.038-2.545-5.51-5.673-5.51-1.1 0-2.139.288-3.008.836a.743.743 0 0 1-.515.1 3.716 3.716 0 0 0-.633-.045H8.24a.72.72 0 0 1-.65-.404.682.682 0 0 1 .104-.742C9.443 1.155 12.013 0 14.742 0z'
                          fill='#181936'></path>
                      </svg>
                      stellarport.io
                    </span>
                  </div>
                </div>
              </div>
              <div className='small-content'>
                <span className='small-content_span'>ETH</span>
                <a
                  href='https://stellar.expert/explorer/public/asset/ETH-GBVOL67TMUQBGL4TZYNMY3ZQ5WGQYFPFD5VJRWXR72VA33VFNL225PL5'
                  target='blank'
                  className='small-content_link'
                  rel='noreferrer noopener'>
                  <div className='small-content_code'>
                    <span className='small-content_code-content'>
                      GBVO…5PL5
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <button className='trade-header_right'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'>
            <path
              fill='#313147'
              d='M12 .5L8.291 8.07 0 9.286l6 5.893L4.585 23.5l7.415-3.929 7.416 3.929L18 15.178 24 9.285 15.707 8.07z'></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
