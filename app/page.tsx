import Image from 'next/image';
import satyam from 'public/images/home/satyam_profile.jpeg'
import anshul from 'public/images/home/anshul_profile.jpeg'
import atul from 'public/images/home/atul_profile.jpeg'
import karamjeet from 'public/images/home/karamjeet_profile.jpeg'
import akhil from 'public/images/home/akhil_profile.jpeg'
import kunal from 'public/images/home/kunal_bhatia_profile.jpeg'
import fareed from 'public/images/home/fareed_profile.jpeg'
import themring from 'public/images/home/themring_profile.jpeg'
import vishal from 'public/images/home/vishal_profile.jpeg'
import sagar from 'public/images/home/sagar_profile.jpeg'
import hemant from 'public/images/home/hemant-negi.jpeg'
import hemantLinkdin from 'public/images/home/hn-linkdin.jpeg'
import hemantLeetocde from 'public/images/home/leetcode.jpeg'
import hemantGithub from 'public/images/home/hemantGithub.png'
import hemantBehance from 'public/images/home/behance.jpg'
import hemantTwitter from 'public/images/home/twitter.jpg';
import back from 'public/images/home/back.jpg';
import handstand from 'public/images/home/handstand.jpg';
import skipping from 'public/images/home/skipping.jpg';
import running from 'public/images/home/running.jpg'
import humanFlag from 'public/images/home/humanFlag.jpeg';
import swimming from 'public/images/home/swimming.jpg';


const ICONS = {
  linkdin: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z" /><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z" /></svg>,
  instagram: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5" /><stop offset=".328" stop-color="#ff543f" /><stop offset=".348" stop-color="#fc5245" /><stop offset=".504" stop-color="#e64771" /><stop offset=".643" stop-color="#d53e91" /><stop offset=".761" stop-color="#cc39a4" /><stop offset=".841" stop-color="#c837ab" /></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z" /><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9" /><stop offset=".999" stop-color="#4168c9" stop-opacity="0" /></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z" /><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z" /><circle cx="31.5" cy="16.5" r="1.5" fill="#fff" /><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z" /></svg>,
  leetcode: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LeetCode</title><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" /></svg>,
  github: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" /></svg>,
  twitter: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" /></svg>,
  behance: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#2196F3" d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10z" /><path fill="#FFF" d="M27 17H34V19H27zM21.512 23.428c.585-.285 1.903-.934 1.903-2.857 0-3.617-3.952-3.57-4.683-3.57H12v14h7.025C19.61 31 24 30.835 24 26.999 24 24.524 22.39 23.714 21.512 23.428zM15 19.428h2.928c.292 0 2.195.104 2.195 1.572 0 1.467-1.463 1.714-1.902 1.714H15V19.428zM18.336 28.571h-3.367v-3.856h3.367c.731 0 2.341.237 2.341 2C20.677 28.476 18.628 28.571 18.336 28.571zM32.438 28.395c-.465.289-.929.436-1.549.436-2.326 0-2.789-1.961-2.789-2.83H36c0-.869 0-1.511-.155-2.236C35.689 23.04 34.63 20 30.734 20 25.289 20 25 24.778 25 25.5c0 .723.156 1.593.467 2.171.309.724.619 1.304 1.084 1.736.464.435 1.083.866 1.703 1.157C29.028 30.855 29.803 31 30.578 31c1.238 0 2.324-.288 3.253-.868.931-.579 1.55-1.448 2.014-2.606h-2.633C33.057 27.816 32.902 28.104 32.438 28.395zM30.734 22.027c1.518 0 2.168 1.592 2.322 2.314H28.1C28.1 24.198 28.471 22.027 30.734 22.027z" /></svg>,
  javascript: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#ffd600" d="M6,42V6h36v36H6z" /><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z" /></svg>,
  react: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="40px" height="40px"><path fill="#8bb7f0" d="M46.5,40c0,3.593-2.907,6.5-6.5,6.5s-6.5-2.907-6.5-6.5s2.907-6.5,6.5-6.5S46.5,36.407,46.5,40z" /><path fill="#4e7ab5" d="M40,47c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S43.859,47,40,47z M40,34c-3.309,0-6,2.691-6,6 s2.691,6,6,6s6-2.691,6-6S43.309,34,40,34z" /><g><path fill="#8bb7f0" d="M24.474,75.503c-1.711,0-3.269-0.392-4.632-1.164c-2.28-1.293-3.856-3.521-4.686-6.62 c-0.965-3.607-0.85-8.398,0.332-13.878C5.956,50.562,0.5,45.531,0.5,40c0-5.532,5.455-10.562,14.987-13.84 c-1.182-5.481-1.298-10.272-0.333-13.879c0.83-3.1,2.406-5.328,4.685-6.62c1.362-0.772,2.921-1.164,4.632-1.164 c4.388,0,9.891,2.73,15.531,7.698c5.64-4.963,11.141-7.691,15.524-7.691c1.711,0,3.269,0.392,4.632,1.164 c2.277,1.291,3.854,3.515,4.684,6.611c0.966,3.606,0.85,8.398-0.333,13.88C74.043,29.437,79.5,34.468,79.5,40 s-5.457,10.563-14.991,13.842c1.182,5.481,1.298,10.272,0.332,13.878c-0.83,3.097-2.405,5.321-4.68,6.612 c-1.364,0.772-2.923,1.164-4.633,1.164c-4.386,0-9.889-2.728-15.527-7.689C34.361,72.774,28.859,75.503,24.474,75.503z M19.337,55.006c-0.991,4.717-1.102,8.747-0.316,11.679c0.542,2.026,1.481,3.431,2.794,4.175c0.753,0.427,1.648,0.644,2.659,0.644 c3.394,0,7.862-2.282,12.621-6.437c-2.385-2.402-4.713-5.121-6.928-8.091C26.336,56.56,22.696,55.898,19.337,55.006z M42.906,65.065c4.758,4.151,9.227,6.431,12.621,6.432c1.011,0,1.906-0.217,2.661-0.644c1.309-0.742,2.246-2.144,2.787-4.167 c0.786-2.934,0.676-6.963-0.315-11.679c-3.362,0.892-7.003,1.554-10.833,1.97C47.613,59.947,45.288,62.665,42.906,65.065z M35.566,57.393c1.452,1.776,2.938,3.433,4.434,4.94c1.492-1.506,2.979-3.163,4.43-4.94C42.939,57.464,41.454,57.5,40,57.5 C38.545,57.5,37.059,57.464,35.566,57.393z M32.349,53.179C34.844,53.392,37.417,53.5,40,53.5c2.585,0,5.155-0.108,7.646-0.32 c1.486-2.084,2.903-4.268,4.214-6.495c1.268-2.155,2.461-4.404,3.547-6.686c-1.083-2.276-2.275-4.524-3.546-6.684 c-1.308-2.222-2.725-4.406-4.215-6.495C45.157,26.608,42.587,26.5,40,26.5c-2.588,0-5.159,0.108-7.647,0.321 c-1.49,2.086-2.909,4.27-4.219,6.495c-1.27,2.159-2.462,4.407-3.546,6.686c1.082,2.274,2.274,4.522,3.545,6.684 C29.437,48.901,30.854,51.084,32.349,53.179z M57.491,44.779c-0.706,1.346-1.438,2.666-2.185,3.934 c-0.753,1.282-1.554,2.568-2.386,3.836c2.374-0.366,4.645-0.835,6.771-1.4C59.101,49.1,58.362,46.963,57.491,44.779z M20.304,51.148c2.127,0.564,4.397,1.034,6.768,1.4c-0.837-1.276-1.638-2.563-2.386-3.835c-0.745-1.267-1.478-2.585-2.183-3.931 C21.636,46.956,20.898,49.091,20.304,51.148z M59.816,40c1.528,3.391,2.773,6.743,3.708,9.977C70.926,47.373,75.5,43.574,75.5,40 s-4.574-7.373-11.976-9.977C62.591,33.257,61.345,36.609,59.816,40z M16.472,30.025C9.073,32.628,4.5,36.427,4.5,40 c0,3.574,4.573,7.373,11.974,9.976c0.934-3.235,2.179-6.587,3.705-9.974C18.652,36.614,17.407,33.262,16.472,30.025z M20.303,28.852c0.594,2.054,1.332,4.19,2.2,6.368c0.704-1.342,1.436-2.661,2.184-3.932c0.752-1.279,1.553-2.565,2.388-3.836 C24.701,27.817,22.431,28.287,20.303,28.852z M52.922,27.451c0.837,1.277,1.638,2.563,2.386,3.837 c0.746,1.267,1.479,2.586,2.185,3.932c0.869-2.177,1.607-4.313,2.201-6.369C57.564,28.286,55.294,27.816,52.922,27.451z M24.471,8.497c-1.011,0-1.905,0.216-2.657,0.644c-1.312,0.744-2.252,2.149-2.795,4.175c-0.785,2.935-0.675,6.964,0.317,11.679 c3.36-0.892,7.002-1.555,10.834-1.971c2.217-2.971,4.545-5.688,6.927-8.088C32.337,10.779,27.866,8.497,24.471,8.497z M49.828,23.023c3.83,0.416,7.471,1.078,10.833,1.97c0.992-4.716,1.103-8.746,0.316-11.68c-0.542-2.022-1.48-3.424-2.79-4.166 c-0.754-0.427-1.649-0.644-2.661-0.644c-3.393,0-7.86,2.281-12.619,6.433C45.287,17.335,47.613,20.053,49.828,23.023z M40,22.5 c1.454,0,2.939,0.036,4.431,0.107c-1.45-1.774-2.936-3.43-4.429-4.938c-1.497,1.51-2.982,3.166-4.432,4.938 C37.061,22.536,38.546,22.5,40,22.5z" /><path fill="#4e7ab5" d="M24.471,4.997c4.494,0,9.996,2.91,15.532,7.867c5.535-4.953,11.034-7.86,15.524-7.86 c1.623,0,3.099,0.37,4.386,1.099c2.156,1.222,3.652,3.343,4.446,6.306c1.077,3.917,0.851,8.74-0.434,14.08 C73.147,29.57,79,34.431,79,40s-5.853,10.43-15.076,13.512c1.341,5.773,1.566,10.726,0.434,14.079 c-0.794,2.962-2.289,5.084-4.443,6.306C58.626,74.627,57.455,75,55.833,75c-0.001,0-0.416,0-0.417,0 c-4.492,0-9.882-2.91-15.416-7.861c-5.535,4.956-11.035,7.864-15.527,7.864c-1.623,0-3.099-0.37-4.386-1.099 c-2.158-1.225-3.655-3.349-4.448-6.314c-1.19-3.717-0.95-8.603,0.434-14.079C6.852,50.429,1,45.569,1,40 c0-5.568,5.852-10.429,15.072-13.511C15.385,23.43,14.946,20.59,14.931,18c-0.012-2.046,0.267-3.949,0.707-5.59 c0.794-2.966,2.29-5.09,4.448-6.314C21.372,5.366,22.848,4.997,24.471,4.997 M18.958,25.614c3.477-0.955,7.338-1.677,11.483-2.117 c2.382-3.21,4.875-6.096,7.386-8.584c-4.872-4.346-9.616-6.917-13.356-6.917c-1.099,0-2.075,0.238-2.904,0.709 c-1.433,0.813-2.452,2.32-3.031,4.481C17.678,16.388,17.873,20.716,18.958,25.614 M61.039,25.613 c1.085-4.898,1.28-9.227,0.422-12.429c-0.578-2.157-1.597-3.661-3.027-4.472c-0.83-0.471-1.809-0.709-2.907-0.709 c-3.737,0-8.478,2.568-13.349,6.91c2.51,2.488,5,5.374,7.38,8.583C53.701,23.936,57.562,24.658,61.039,25.613 M34.477,23.166 c1.802-0.107,3.609-0.2,5.488-0.2c1.879,0,3.755,0.094,5.557,0.2c-1.808-2.279-3.664-4.361-5.521-6.204 C38.144,18.805,36.287,20.887,34.477,23.166 M40,54c2.761,0,5.404-0.121,7.918-0.342c1.519-2.117,2.988-4.365,4.372-6.719 c1.353-2.299,2.577-4.626,3.67-6.939c-1.093-2.313-2.317-4.639-3.669-6.937c-1.385-2.355-2.853-4.602-4.373-6.719 C45.405,26.121,42.762,26,40,26s-5.406,0.121-7.92,0.343c-1.521,2.117-2.991,4.365-4.376,6.719 c-1.352,2.299-2.576,4.626-3.669,6.939c1.093,2.313,2.316,4.639,3.668,6.937c1.385,2.354,2.854,4.602,4.374,6.719 C34.592,53.879,37.237,54,40,54 M57.546,36.413c1.125-2.709,2.056-5.369,2.766-7.913c-2.553-0.702-5.373-1.282-8.428-1.707 c1.028,1.527,2.029,3.11,2.992,4.748C55.83,33.16,56.717,34.788,57.546,36.413 M22.449,36.414c0.828-1.625,1.716-3.253,2.668-4.873 c0.964-1.638,1.966-3.22,2.995-4.747c-3.055,0.424-5.875,1.005-8.428,1.707C20.394,31.045,21.325,33.704,22.449,36.414 M63.188,50.622C71.264,47.886,76,43.866,76,40s-4.736-7.886-12.812-10.622c-0.953,3.405-2.269,6.983-3.92,10.621 C60.919,43.638,62.235,47.216,63.188,50.622 M16.81,50.621c0.952-3.404,2.267-6.982,3.918-10.619 c-1.651-3.638-2.967-7.217-3.919-10.622C8.734,32.116,4,36.135,4,40C4,43.866,8.735,47.885,16.81,50.621 M51.884,53.207 c3.055-0.424,5.875-1.004,8.428-1.707c-0.711-2.544-1.642-5.204-2.766-7.914c-0.829,1.625-1.717,3.253-2.67,4.873 C53.913,50.097,52.912,51.68,51.884,53.207 M28.109,53.206c-1.028-1.527-2.029-3.109-2.993-4.746 c-0.952-1.619-1.839-3.246-2.667-4.87c-1.124,2.708-2.054,5.367-2.764,7.91C22.237,52.201,25.056,52.781,28.109,53.206 M24.474,72.003c3.739,0,8.481-2.57,13.352-6.914c-2.513-2.489-5.005-5.376-7.388-8.587c-4.143-0.439-8.002-1.161-11.478-2.116 c-1.084,4.898-1.279,9.226-0.422,12.428c0.578,2.16,1.598,3.667,3.03,4.48C22.396,71.765,23.375,72.003,24.474,72.003 M55.527,71.997L55.527,71.997c1.099,0,2.076-0.238,2.907-0.709c1.43-0.811,2.447-2.315,3.024-4.473 c0.858-3.203,0.663-7.531-0.421-12.428c-3.477,0.955-7.337,1.677-11.481,2.116c-2.38,3.21-4.871,6.096-7.381,8.585 C47.046,69.428,51.788,71.996,55.527,71.997 M40,63.04c1.857-1.844,3.713-3.927,5.522-6.206c-1.801,0.107-3.559,0.333-5.439,0.333 c-1.881,0-3.807-0.226-5.609-0.333C36.284,59.114,38.142,61.197,40,63.04 M24.116,4.072c-1.799,0-3.085,0.338-4.523,1.153 c-2.399,1.361-4.055,3.691-4.921,6.926c-0.96,3.587-0.877,8.302,0.236,13.681C5.419,29.189,0,34.325,0,40 c0,5.676,5.42,10.811,14.909,14.168c-1.113,5.379-1.196,10.094-0.235,13.681c0.865,3.233,2.52,5.563,4.921,6.926 c1.44,0.816,3.17,1.163,4.968,1.163c4.487,0,9.753-2.535,15.438-7.466c5.684,4.926,11.039,7.524,15.525,7.525 c1.799,0,3.441-0.413,4.881-1.229c2.397-1.359,4.051-3.686,4.916-6.917c0.961-3.588,0.878-8.303-0.235-13.681 C74.579,50.812,80,45.676,80,40s-5.42-10.812-14.911-14.169c1.114-5.38,1.196-10.095,0.235-13.682 c-0.866-3.231-2.521-5.558-4.919-6.917c-1.439-0.815-3.081-1.229-4.879-1.229c-4.485,0-9.839,2.599-15.524,7.527 c-5.686-4.932-11.066-7.461-15.554-7.461L24.116,4.072z M19.72,24.377c-0.462-2.324-0.772-4.502-0.789-6.412 c-0.015-1.72,0.221-3.217,0.57-4.521c0.507-1.892,1.368-3.194,2.559-3.87c0.676-0.384,1.5-0.644,2.423-0.644 c3.181,0,7.367,2.178,11.883,6.034c-2.221,2.273-4.392,4.819-6.466,7.585C26.315,22.949,22.897,23.562,19.72,24.377L19.72,24.377z M43.638,14.966c4.515-3.853,8.711-5.963,11.888-5.963c0.924,0,1.737,0.195,2.414,0.579c1.189,0.674,2.049,1.973,2.555,3.861 c0.874,2.818,0.761,6.564-0.218,10.933c-3.177-0.814-6.594-1.428-10.178-1.826C48.026,19.785,45.857,17.239,43.638,14.966 L43.638,14.966z M36.673,22.06c1.096-1.3,2.209-2.53,3.328-3.678c1.119,1.148,2.231,2.378,3.326,3.678 C42.208,22.02,41.095,22,40,22S37.793,22.02,36.673,22.06L36.673,22.06z M32.625,27.3c2.405-0.199,4.883-0.341,7.375-0.341 c2.491,0,4.969,0.142,7.373,0.341c1.432,2.019,2.796,4.126,4.056,6.269c1.222,2.078,2.373,4.239,3.423,6.43 c-1.051,2.192-2.202,4.354-3.424,6.432c-1.261,2.144-2.624,4.25-4.056,6.269c-2.403,0.199-4.881,0.466-7.372,0.466 c-2.493,0-4.972-0.268-7.378-0.467c-1.433-2.018-2.797-4.125-4.058-6.269c-1.222-2.077-2.372-4.238-3.422-6.43 c1.05-2.192,2.201-4.354,3.423-6.432C29.827,31.425,31.192,29.318,32.625,27.3L32.625,27.3z M57.422,34.024 c-0.549-1.018-1.112-2.018-1.683-2.99c-0.57-0.969-1.167-1.942-1.785-2.909c1.774,0.302,3.485,0.663,5.114,1.08 C58.601,30.771,58.05,32.383,57.422,34.024L57.422,34.024z M20.928,29.205c1.629-0.417,3.34-0.778,5.114-1.08 c-0.619,0.967-1.216,1.94-1.786,2.908c-0.571,0.972-1.134,1.972-1.683,2.99C21.945,32.384,21.395,30.772,20.928,29.205 L20.928,29.205z M60.365,39.999c1.415-3.162,2.587-6.292,3.49-9.326C70.758,33.192,75,36.721,75,40s-4.242,6.808-11.145,9.327 C62.951,46.292,61.78,43.161,60.365,39.999L60.365,39.999z M16.142,49.326C9.241,46.807,5,43.278,5,40s4.241-6.807,11.141-9.326 c0.903,3.035,2.074,6.165,3.489,9.327C18.216,43.162,17.045,46.292,16.142,49.326L16.142,49.326z M53.953,51.876 c0.618-0.968,1.216-1.941,1.785-2.909c0.572-0.972,1.135-1.973,1.684-2.991c0.628,1.641,1.178,3.254,1.646,4.821 C57.438,51.212,55.727,51.574,53.953,51.876L53.953,51.876z M20.929,50.795c0.467-1.566,1.017-3.177,1.644-4.816 c0.548,1.017,1.111,2.017,1.682,2.988c0.569,0.968,1.166,1.94,1.785,2.908C24.267,51.572,22.557,51.211,20.929,50.795 L20.929,50.795z M24.474,71.003c-0.924,0-1.736-0.195-2.413-0.579c-1.19-0.676-2.051-1.977-2.557-3.869 c-0.831-2.845-0.737-6.592,0.218-10.933c3.176,0.814,6.592,1.428,10.175,1.826c2.075,2.766,4.246,5.313,6.468,7.588 C31.85,68.893,27.653,71.004,24.474,71.003L24.474,71.003L24.474,71.003z M50.098,57.45c3.584-0.399,7.001-1.012,10.178-1.826 c1.105,4.74,1.192,8.518,0.217,10.932c-0.505,1.889-1.364,3.188-2.552,3.861c-0.678,0.384-1.49,0.579-2.413,0.579v1l-0.001-1 c-3.18,0-7.377-2.11-11.891-5.961C45.856,62.762,48.025,60.216,50.098,57.45L50.098,57.45z M40,61.62 c-1.12-1.148-2.234-2.379-3.33-3.68C37.79,57.98,38.904,58,40,58c1.095,0,2.208-0.02,3.327-0.06 C42.232,59.241,41.119,60.472,40,61.62L40,61.62z" /></g></svg>,
  node: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 15.994141 3 C 15.629141 3 15.264219 3.0895313 14.949219 3.2695312 L 5.0390625 8.9902344 C 4.3990625 9.3602344 4 10.060781 4 10.800781 L 4 21.179688 C 4 21.929688 4.3990625 22.620234 5.0390625 22.990234 L 7.640625 24.490234 C 8.900625 25.110234 9.3499219 25.109375 9.9199219 25.109375 C 11.789922 25.109375 12.859375 23.979531 12.859375 22.019531 L 12.859375 11.310547 C 12.859375 11.150547 12.730312 11.019531 12.570312 11.019531 L 11.320312 11.019531 C 11.150313 11.019531 11.029297 11.150547 11.029297 11.310547 L 11.029297 22.009766 C 11.029297 22.889766 10.120391 23.749531 8.6503906 23.019531 L 5.9296875 21.449219 C 5.8296875 21.399219 5.7695313 21.289687 5.7695312 21.179688 L 5.7695312 10.810547 C 5.7695312 10.690547 5.8296875 10.589297 5.9296875 10.529297 L 15.839844 4.8105469 C 15.929844 4.7505469 16.050391 4.7505469 16.150391 4.8105469 L 26.060547 10.529297 C 26.160547 10.589297 26.220703 10.690781 26.220703 10.800781 L 26.220703 21.179688 C 26.220703 21.289687 26.160313 21.399219 26.070312 21.449219 L 16.150391 27.179688 C 16.060391 27.229688 15.929844 27.229688 15.839844 27.179688 L 13.289062 25.669922 C 13.219062 25.619922 13.120781 25.610391 13.050781 25.650391 C 12.340781 26.050391 12.210781 26.100078 11.550781 26.330078 C 11.390781 26.380078 11.140625 26.479766 11.640625 26.759766 L 14.949219 28.720703 C 15.269219 28.900703 15.630234 29 15.990234 29 C 16.360234 29 16.719062 28.900703 17.039062 28.720703 L 26.960938 22.990234 C 27.600938 22.620234 28 21.929688 28 21.179688 L 28 10.810547 C 28 10.060547 27.600938 9.37 26.960938 9 L 17.039062 3.2695312 C 16.724063 3.0895313 16.359141 3 15.994141 3 z M 18.660156 11.005859 C 15.830156 11.005859 14.140625 12.205078 14.140625 14.205078 C 14.140625 16.375078 15.819062 16.974141 18.539062 17.244141 C 21.789062 17.564141 22.039062 18.045547 22.039062 18.685547 C 22.039062 19.785547 21.150547 20.255859 19.060547 20.255859 C 16.430547 20.255859 15.850156 19.594922 15.660156 18.294922 C 15.640156 18.154922 15.520859 18.054688 15.380859 18.054688 L 14.089844 18.054688 C 13.929844 18.054688 13.810547 18.185938 13.810547 18.335938 C 13.810547 20.005937 14.720547 21.994141 19.060547 21.994141 C 22.200547 21.994141 24 20.755703 24 18.595703 C 24 16.455703 22.549766 15.884609 19.509766 15.474609 C 16.419766 15.074609 16.109375 14.864531 16.109375 14.144531 C 16.109375 13.544531 16.380156 12.755859 18.660156 12.755859 C 20.690156 12.755859 21.449766 13.194453 21.759766 14.564453 C 21.789766 14.694453 21.899062 14.794922 22.039062 14.794922 L 23.330078 14.794922 C 23.410078 14.794922 23.479063 14.755313 23.539062 14.695312 C 23.589062 14.645313 23.619375 14.564609 23.609375 14.474609 C 23.409375 12.114609 21.840156 11.005859 18.660156 11.005859 z" /></svg>,
  graphql: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px" style={{ fill: '#dd34a6' }}><path d="M 25 2 C 22.788 2 21 3.788 21 6 C 21 6.319683 21.048567 6.6259743 21.119141 6.9238281 L 10.945312 12.310547 C 10.214286 11.510118 9.1715211 11 8 11 C 5.788 11 4 12.788 4 15 C 4 16.8551 5.2763474 18.409919 7 18.857422 L 7 31.142578 C 5.2764206 31.587904 4 33.135681 4 35 C 4 37.201 5.788 39 8 39 C 9.1715211 39 10.214286 38.489882 10.945312 37.689453 L 21.119141 43.076172 C 21.048567 43.374026 21 43.680317 21 44 C 21 46.212 22.788 48 25 48 C 27.212 48 29 46.201 29 44 C 29 43.680317 28.951433 43.374026 28.880859 43.076172 L 39.054688 37.689453 C 39.785714 38.489882 40.828479 39 42 39 C 44.212 39 46 37.201 46 35 C 46 33.135681 44.723579 31.587904 43 31.142578 L 43 18.857422 C 44.723653 18.409919 46 16.8551 46 15 C 46 12.788 44.212 11 42 11 C 40.828479 11 39.785714 11.510118 39.054688 12.310547 L 28.880859 6.9238281 C 28.951804 6.6260098 29 6.3189534 29 6 C 29 3.788 27.212 2 25 2 z M 22.054688 8.6894531 C 22.097766 8.7366217 22.132464 8.7908863 22.177734 8.8359375 L 9.0859375 31.167969 C 9.0569126 31.159764 9.0292907 31.148188 9 31.140625 L 9 18.857422 C 10.723579 18.412096 12 16.864319 12 15 C 12 14.680317 11.951433 14.374026 11.880859 14.076172 L 22.054688 8.6894531 z M 27.943359 8.6894531 L 38.119141 14.076172 C 38.048567 14.374026 38 14.680317 38 15 C 38 16.864319 39.276421 18.412096 41 18.857422 L 41 31.140625 C 40.970709 31.148188 40.943087 31.159764 40.914062 31.167969 L 27.820312 8.8339844 C 27.865175 8.7893146 27.900645 8.7361897 27.943359 8.6894531 z M 26.085938 9.8300781 L 39.177734 32.164062 C 38.678164 32.661212 38.324556 33.295677 38.142578 34 L 11.857422 34 C 11.675444 33.295677 11.321836 32.661212 10.822266 32.164062 L 23.914062 9.8320312 C 24.261437 9.9302299 24.620841 10 25 10 C 25.379287 10 25.738459 9.9288212 26.085938 9.8300781 z M 12.025391 36 L 37.974609 36 L 27.945312 41.310547 C 27.214286 40.510118 26.171521 40 25 40 C 23.828479 40 22.785714 40.510118 22.054688 41.310547 L 12.025391 36 z" /></svg>
}


const recommendationsData = [
  {
    "name": "Satyam Dubey",
    "subHeading": "Program Manager at Quincus",
    "text": "Hemant is very passionate and has great vision for his work. His focus keeps everything moving smoothly, he makes sure all the deadlines are met, and makes sure that whatever project he is working on meets the highest standards. His front-end development skill is class and did an exceptional job on recent projects. Creating tools to resolve complex problem in quick time is his art. It’s a pleasure working with him, he is a champ.",
    "avatar": satyam,
    "url": "https://www.linkedin.com/in/satyam-dubey-a869302b",
    "socialImage": "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg",
    "social": "Linkedin"
  },
  {
    "name": "Muhammad Fareed",
    "subHeading": "Full Stack Developer",
    "text": "I had the pleasure of working with Hemant on a project. He is a great person. He is a good example of the saying that 'A software Engineer should not have language or technology barriers.' Hemant always used to explore new technologies like ReactJS, NextJS, and NodeJs. The best part is, He brings his research to completion.  I highly recommend him if you are looking for a Software Developer.",
    "avatar": fareed,
    "url": "https://www.linkedin.com/in/awwalfareed/",
    "socialImage": "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg",
    "social": "Linkedin"
  },

  {
    "name": "Kunal Bhatia",
    "subHeading": "Developer Lead at Persistent Systems",
    "text": "It is not that I'm exaggerating but it is actually true, Hemant, he is the kind a guy who understands the problem, analyse it, and then from its magically mind gives you a top notch solution which is both durable and adaptable. He is sharp minded and equally soft hearted. Think about it, html, css, react, node, that not it, it is just tip of the iceberg. A man with many skills and lot of energy is ready to rock the corporate world.",
    "avatar": kunal,
    "url": "https://www.linkedin.com/in/kunal-r-bhatia/",
    "socialImage": "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg",
    "social": "Linkedin"
  },
  {
    "name": "Themring Shaiza",
    "subHeading": "Full Stack Engineer at Chetu, Inc.",
    "text": "I’m immensely proud to have work with Hemant for the past one year and what I’ve learned from him is priceless. He’s smart working with detailed knowledge. His approach for a given task is always  the best practices. He follows and check the tasks end to end with good unit test cases. He has a great team spirit keeping in check the teams task and assist the team with the difficulties and does not disappoint. Anyone hiring him shouldn’t hesitate to acquire him.",
    "avatar": themring,
    "url": "https://www.linkedin.com/in/themring-shaiza-945106174/",
    "socialImage": "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg",
    "social": "Linkedin"
  },

  {
    "name": "Atul Pant",
    "subHeading": "Senior Software Engineer",
    "text": "Hemant is one of the most talented developer I have ever worked with in my 5 years as a developer. Not only is his work amazing and of the highest standard, he always delivers on the brief given and is an absolute pleasure to work with. He is just brilliant!",
    "avatar": atul,
    "url": "https://www.linkedin.com/in/atulpant20",
    "socialImage": "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg",
    "social": "Linkedin"
  },
  {
    "name": "Sagar Samtani",
    "subHeading": "Senior Technical Lead @ Paytm",
    "text": "I've had the pleasure of working alongside Hemant on several projects and I can confidently say that he is an exceptional frontend developer. Hemant consistently delivers high-quality code, demonstrates a keen eye for design and has a deep understanding of modern frontend technologies like NextJs, React.js and JavaScript. He is a team player, always willing to collaborate and assist others, making him an invaluable asset to any development team. I highly recommend Hemant for any frontend development role.",
    "avatar": sagar,
    "url": "https://www.linkedin.com/in/sagar-samtani-5b89a245",
    "socialImage": "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg",
    "social": "Linkedin"
  },
  {
    "name": "Anshul Riyal",
    "subHeading": "Senior Software Engineer",
    "text": "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” is the phrase that comes to mind when I think about Hemant. I’ve had the pleasure of knowing Hemant for the past 2 years. He is one of the most dedicated professionals I’ve worked with and is willing to go the extra mile to help you when needed. His expertise as a React.js developer is considerable and it helped our team to come up with more efficient solutions and develop different projects. I rarely come across real talents who stand out like Hemant. Hemant’s ability to handle multiple projects was unlike any I’ve seen before and made a dramatic increase in the productivity level of our company. No matter how tense a meeting, he made sure everyone left with a smile. Hemant would be a true asset for any organization and comes with my heartfelt recommendation.",
    "avatar": anshul,
    "url": "https://www.linkedin.com/in/anshul-riyal-i-code",
    "socialImage": "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg",
    "social": "Linkedin"
  },
  {
    "name": "Vishal Tomar",
    "subHeading": "Senior Software Engineer(FrontEnd) at Paytm",
    "text": "Hemant has extensive knowledge jn many frontend technologies such as Reactjs, Javascript, Nextjs, etc. He is also an amazing problem solver and is always finding new ways and technologies to build projects.",
    "avatar": vishal,
    "url": "https://www.linkedin.com/in/vishaltomar02",
    "socialImage": "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg",
    "social": "Linkedin"
  },
  {
    "name": "Akhil Kumar",
    "subHeading": "Software Engineer",
    "text": "I have worked with Hemant.. He has good command on web development and DevOps engineering.... he's also having good managerial qualities and dealt with various different corporate problems.",
    "avatar": akhil,
    "url": "https://www.linkedin.com/in/akhilpvghi/",
    "socialImage": "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg",
    "social": "Linkedin"
  },

  {
    "name": "Karamjeet Singh",
    "subHeading": "Senior Software Engineer in Java, C#, React JS",
    "text": "There is no better colleague then Hemant. He is one of the dedicated professionals I`ve worked with and is willing to put that extra effort whenever you need it. His expertise in react js, his contribution to the project and the team is very valuable. I highly recommend him and would love to work with him again.",
    "avatar": karamjeet,
    "url": "https://www.linkedin.com/in/karamjeet-singh-2b552743",
    "socialImage": "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg",
    "social": "Linkedin"
  },
  
 
  

]

function Quote() {
  return (
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 57 57" style={{ width: '30px', height: '30px' }} xmlSpace="preserve">
      <rect x={0} y={0} style={{ fill: 'transparent' }} width={57} height={57} />
      <g>
        <circle style={{ fill: '#BDC3C7' }} cx="18.5" cy="31.5" r="5.5" />
        <path style={{ fill: '#BDC3C7' }} d="M18.5,38c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S22.084,38,18.5,38z
       M18.5,27c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S20.981,27,18.5,27z" />
      </g>
      <g>
        <circle style={{ fill: '#BDC3C7' }} cx="35.5" cy="31.5" r="5.5" />
        <path style={{ fill: '#BDC3C7' }} d="M35.5,38c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S39.084,38,35.5,38z
       M35.5,27c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S37.981,27,35.5,27z" />
      </g>
      <path style={{ fill: '#BDC3C7' }} d="M13,32c-0.553,0-1-0.447-1-1c0-7.72,6.28-14,14-14c0.553,0,1,0.447,1,1s-0.447,1-1,1
    c-6.617,0-12,5.383-12,12C14,31.553,13.553,32,13,32z" />
      <path style={{ fill: '#BDC3C7' }} d="M30,32c-0.553,0-1-0.447-1-1c0-7.72,6.28-14,14-14c0.553,0,1,0.447,1,1s-0.447,1-1,1
    c-6.617,0-12,5.383-12,12C31,31.553,30.553,32,30,32z" />
    </svg>
  )
}
function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChannelLink({ img, link, name, icon }) {
  return (
    <a
      href={link}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
    >
      <div className="flex items-center space-x-3">
        <div className="relative h-16">
          <Image
            alt={name}
            src={img}
            height={64}
            width={64}
            sizes="33vw"
            className="border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16"
          />
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-full bg-white inline-flex p-1 relative h-6 w-6 items-center -top-6 -right-10">
            {icon}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
        </div>
      </div>
      <div className="text-neutral-700 dark:text-neutral-300">
        <ArrowIcon />
      </div>
    </a>
  );
}

async function BlogLink({ url, name }) {
  return (
    <a
      href={url}
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50  dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
    >
      <div className="flex flex-col">
        <p className="font-bold text-neutral-900 dark:text-neutral-100">
          {name}
        </p>
      </div>
      <div className="text-neutral-700 dark:text-neutral-300">
        <ArrowIcon />
      </div>
    </a>
  );
}

function Recommendations() {
  const chunkSize = 5
  return (
    <div className={`grid grid-col-1 md:grid-cols-2 gap-4 my-8`}>
      {Array.from({ length: Math.ceil(recommendationsData.length / chunkSize) }, (_, index) => recommendationsData.slice(index * chunkSize, index * chunkSize + chunkSize)).map((recommendationGrid) => (
        <div className="grid gap-4">
          {recommendationGrid.map((recommendation, index) => (
            <div key={index} className="max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 h-fit">
              <div className="rounded-[calc(1.5rem-1px)] p-10 bg-neutral-50 dark:bg-gray-900">
                <Image
                  alt={"LinkedIn"}
                  src={recommendation.socialImage}
                  height={64}
                  width={100}
                  sizes="33vw"
                />
                <Quote />
                <p className="text-gray-700 dark:text-gray-300">{recommendation.text}</p>
                <div className="mt-8 flex gap-4 items-center">
                  <Image
                    alt={recommendation.name}
                    src={recommendation.avatar}
                    height={12}
                    width={12}
                    sizes="33vw"
                    className="border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 dark:text-white">{recommendation.name}</h3>
                    <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">{recommendation.subHeading}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      ))}
    </div>
  )
}

export default async function Page() {
  // const [leerobSubscribers, vercelSubscribers] = await Promise.all([
  //   getLeeYouTubeSubs(),
  //   getVercelYouTubeSubs(),
  // ]);

  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        hey, I'm Hemant 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {` I'm a developer who loves exploring new things. I currently
        work as Senior Software Engineer at `}
        <span className="not-prose">
          <Badge href="https://paytm.com">
            Paytm
          </Badge>
        </span>
        {`, where I work on the
          frontend development for the `}
        <Badge href="https://www.paytmbank.com/cards">
          NCMC
        </Badge>
        {` and `}
        <Badge href="https://paytm.com/blog/paytm-help/how-to-use-paytm-for-local-citybus-ticket-booking/">
          City Bus
        </Badge>
        {` projects. When it comes
          to web development, I'm always exploring new ideas and technologies to
          stay up-to-date with the latest trends.`}
      </p>
      <Recommendations />
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I have a deep-rooted love affair with the web and creating
          cutting-edge tools and web apps, a lot of which are open source. I'm
          always on the lookout for new ways to wow my users with magical
          features that will make them say, 'Woah, how did they do that?'. My
          obsession for learning and delivering top-notch solutions is the only
          thing that exceeds my love for pizza.
        </p>
      </div>
      <div className="my-8 grid gap-8 md:grid-cols-2 grid-cols-1">
        <ChannelLink
          img={hemant}
          name="@nhemnt"
          link="https://www.instagram.com/nhemnt"
          icon={ICONS.instagram}
        />
        <ChannelLink
          img={hemantLinkdin}
          name="@nhemnt"
          link="https://www.linkedin.com/in/nhemnt/"
          icon={ICONS.linkdin}
        />

        <ChannelLink
          img={hemantLeetocde}
          name="@nhemnt"
          link="https://leetcode.com/nhemnt/"
          icon={ICONS.leetcode}
        />

        <ChannelLink
          img={hemantGithub}
          name="@nhemnt"
          link="https://github.com/nhemnt"
          icon={ICONS.github}
        />

        <ChannelLink
          img={hemantTwitter}
          name="@nhemnt"
          link="https://twitter.com/nhemnt"
          icon={ICONS.twitter}
        />

        <ChannelLink
          img={hemantBehance}
          name="@nhemnt"
          link="https://www.behance.net/nhemnt"
          icon={ICONS.behance}
        />

      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Over the past several years, I've embarked on a journey of creating numerous open-source projects. My approach is to strike a balance between simplicity and magic, making each project truly special.
        </p>
      </div>
      <div className="my-8 flex flex-col space-y-4 w-full">
        <BlogLink
          name="Simple avatar generator React component"
          url="https://bitmoji.netlify.app/"
        />
        <BlogLink
          name="Slack bot that pushes daily notifications to a slack channel"
          url="https://slackify-flax.vercel.app/docs"
        />
        <BlogLink name="Practice Linkedin quizzes" url="https://linkthein.vercel.app/" />
      </div>


      <p className="prose prose-neutral dark:prose-invert">
        When I'm not busy typing away at my keyboard, you might catch me serving
        up some serious shots on the ping pong table, breaking the pool balls with
        precision, spiking volleyballs, or smashing shuttlecocks (in a friendly
        way, of course!). I'm also a gym enthusiast, swimmer, skater, and
        occasional runner. And when I'm not working on my athleticism, I like to
        binge-watch anime and explore new places, because let's face it, nothing
        beats a good adventure!
      </p>


      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={skipping}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src={handstand}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src={humanFlag}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src={running}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={swimming}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={back}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
{/* 
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Technologies I like to work on or get my hands dirty with:
        </p>
      </div>
      <div className="my-8 flex flex-row space-x-2 w-full h-14 overflow-x-auto">
        {[
          { name: 'Javascript', icon: ICONS.javascript },
          { name: 'React', icon: ICONS.react },
          { name: 'Node', icon: ICONS.node },
          { name: 'Graphql', icon: ICONS.graphql }]
          .map(item => (<div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <span className='w-10 h-10'>
          {item.icon}
          </span>
          {" "}
          {item.name}
        </div>))}

      </div> */}
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/nhemnt"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">follow me on twitter</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://nhemnt.substack.com"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">get email updates</p>
          </a>
        </li>
      </ul>
    </section>
  );
}