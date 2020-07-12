/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { FunctionComponent, createElement } from 'react';

import { RenderingMetadata } from '../types';
import { Fonts } from './fonts';
import { Styles } from './styles';

interface Props {
  metadata: RenderingMetadata;
}

export const Template: FunctionComponent<Props> = ({
  metadata: {
    uiPublicUrl,
    locale,
    darkMode,
    injectedMetadata,
    i18n,
    bootstrapScriptUrl,
    strictCsp,
  },
}) => {
  const logo2 = (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="32" height="32" viewBox="0 0 160.000000 144.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,144.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M655 1430 c-234 -47 -420 -240 -433 -448 l-5 -77 -58 -53 c-44 -40
-69 -75 -101 -140 l-43 -86 -2 -140 c0 -78 -4 -164 -8 -192 -15 -107 41 -201
153 -256 62 -31 73 -33 162 -32 73 1 109 6 155 24 33 12 65 27 71 31 7 6 39 2
80 -8 93 -23 406 -23 511 0 192 42 338 170 417 365 29 73 31 84 31 212 0 134
0 135 -36 210 -60 125 -178 235 -339 315 -43 22 -63 40 -93 86 -98 151 -281
225 -462 189z m219 -129 c75 -37 148 -108 182 -177 23 -48 29 -52 68 -58 59
-9 156 -57 207 -103 105 -94 154 -219 147 -375 -3 -78 -9 -104 -35 -160 -40
-86 -84 -140 -152 -189 -87 -62 -157 -79 -332 -79 l-149 0 0 203 0 202 -29 17
c-85 48 -89 180 -7 233 61 40 150 22 187 -39 39 -64 14 -171 -46 -198 l-25
-11 0 -165 0 -165 108 6 c147 7 208 31 288 111 118 118 145 286 69 436 -51
101 -165 180 -280 195 l-55 6 -29 63 c-36 79 -76 125 -143 162 -46 25 -63 29
-133 29 -70 0 -87 -4 -133 -29 -60 -34 -101 -76 -134 -139 -17 -33 -22 -59
-22 -122 0 -44 3 -101 8 -127 l9 -47 -59 -26 c-84 -37 -119 -68 -149 -130 -21
-43 -28 -70 -28 -119 1 -35 4 -69 7 -75 4 -6 25 -11 47 -11 85 0 139 -57 139
-147 0 -41 -5 -58 -26 -83 -66 -78 -154 -80 -224 -5 -22 23 -25 34 -23 93 1
37 2 85 1 107 -7 181 -3 219 27 278 31 63 94 127 150 154 l34 16 -6 71 c-13
159 61 305 196 384 104 61 237 66 345 13z"/>
<path d="M797 752 c-23 -25 -22 -85 1 -105 28 -25 87 -22 106 5 22 31 20 74
-4 98 -26 26 -81 26 -103 2z"/>
<path d="M215 325 c-28 -27 -31 -45 -14 -78 16 -29 28 -37 61 -37 33 0 68 35
68 67 0 30 -42 73 -70 73 -11 0 -32 -11 -45 -25z"/>
</g>
</svg>
  );
  const logo = (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g fill="none">
        <path
          fill="#FDD009"
          d="M11.9338171,13.1522761 L19.2872353,16.5080972 L26.7065664,10.0005147 C26.8139592,9.46384495 26.866377,8.92859725 26.866377,8.36846422 C26.866377,3.78984954 23.1459864,0.0647302752 18.5719941,0.0647302752 C15.8357526,0.0647302752 13.2836129,1.41337248 11.7323847,3.67480826 L10.4983628,10.0839872 L11.9338171,13.1522761 Z"
        />
        <path
          fill="#23BAB1"
          d="M4.32214501,20.9473399 C4.21475229,21.4841518 4.1596354,22.0410142 4.1596354,22.6044179 C4.1596354,27.1948353 7.89096419,30.9300509 12.4774572,30.9300509 C15.2361432,30.9300509 17.8007837,29.5687528 19.3495969,27.2841381 L20.5743853,20.8965739 L18.9399136,17.7698399 L11.5573744,14.401505 L4.32214501,20.9473399 Z"
        />
        <path
          fill="#EE5097"
          d="M4.27553714,8.20847294 L9.31503995,9.3995555 L10.4190826,3.6639867 C9.73040545,3.1371289 8.88035513,2.84874358 8.00601361,2.84874358 C5.81596922,2.84874358 4.0348979,4.63252339 4.0348979,6.82484908 C4.0348979,7.30904633 4.11572655,7.77333532 4.27553714,8.20847294"
        />
        <path
          fill="#17A7E0"
          d="M3.83806807,9.40996468 C1.58651435,10.1568087 0.0210807931,12.3172812 0.0210807931,14.6937583 C0.0210807931,17.0078087 1.45071086,19.0741436 3.5965765,19.8918041 L10.6668813,13.494428 L9.36879313,10.717795 L3.83806807,9.40996468 Z"
        />
        <path
          fill="#92C73D"
          d="M20.6421734,27.2838537 C21.3334075,27.8156885 22.1793383,28.1057803 23.0428837,28.1057803 C25.232786,28.1057803 27.0138574,26.3228537 27.0138574,24.130528 C27.0138574,23.6470417 26.9331708,23.1827528 26.7732181,22.7477573 L21.7379769,21.5681931 L20.6421734,27.2838537 Z"
        />
        <path
          fill="#0678A0"
          d="M21.6667227,20.2469532 L27.2099485,21.5446872 C29.4623545,20.7995495 31.0277881,18.6382239 31.0277881,16.2608936 C31.0277881,13.9511092 29.5947487,11.8871917 27.4447635,11.0719486 L20.1946185,17.4303615 L21.6667227,20.2469532 Z"
        />
      </g>
    </svg>
  );
  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width" />
        <title>RCP Kibana</title>
        <Fonts url={uiPublicUrl} />
        {/* Favicons (generated from http://realfavicongenerator.net/) */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${uiPublicUrl}/favicons/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${uiPublicUrl}/favicons/rcp-icons/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${uiPublicUrl}/favicons/rcp-icons/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${uiPublicUrl}/favicons/rcp-icons/manifest.json`} />
        <link
          rel="mask-icon"
          color="#e8488b"
          href={`${uiPublicUrl}/favicons/safari-pinned-tab.svg`}
        />
        <link rel="shortcut icon" href={`${uiPublicUrl}/favicons/favicon.png`} />
        <meta name="msapplication-config" content={`${uiPublicUrl}/favicons/browserconfig.xml`} />
        <meta name="theme-color" content="#ffffff" />
        <Styles darkMode={darkMode} />

        {/* Inject stylesheets into the <head> before scripts so that KP plugins with bundled styles will override them */}
        <meta name="add-styles-here" />
        <meta name="add-scripts-here" />
      </head>
      <body>
        {createElement('kbn-csp', {
          data: JSON.stringify({ strictCsp }),
        })}
        {createElement('kbn-injected-metadata', { data: JSON.stringify(injectedMetadata) })}
        <div
          className="kbnWelcomeView"
          id="kbn_loading_message"
          style={{ display: 'none' }}
          data-test-subj="kbnLoadingMessage"
        >
          <div className="kbnLoaderWrap">
            {logo2}
            <div
              className="kbnWelcomeText"
              data-error-message={i18n('core.ui.welcomeErrorMessage', {
                defaultMessage:
                  'RCP Kibana did not load properly. Check the server output for more information.',
              })}
            >
              {i18n('core.ui.welcomeMessage', { defaultMessage: 'Loading RCP Kibana' })}
            </div>
            <div className="kbnProgress" />
          </div>
        </div>

        <div className="kbnWelcomeView" id="kbn_legacy_browser_error" style={{ display: 'none' }}>
          {logo2}

          <h2 className="kbnWelcomeTitle">
            {i18n('core.ui.legacyBrowserTitle', {
              defaultMessage: 'Please upgrade your browser',
            })}
          </h2>
          <div className="kbnWelcomeText">
            {i18n('core.ui.legacyBrowserMessage', {
              defaultMessage:
                'This RCP Kibana installation has strict security requirements enabled that your current browser does not meet.',
            })}
          </div>
        </div>

        <script>
          {`
            // Since this is an unsafe inline script, this code will not run
            // in browsers that support content security policy(CSP). This is
            // intentional as we check for the existence of __kbnCspNotEnforced__ in
            // bootstrap.
            window.__kbnCspNotEnforced__ = true;
          `}
        </script>
        <script src={bootstrapScriptUrl} />
      </body>
    </html>
  );
};
