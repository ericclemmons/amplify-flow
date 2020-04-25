import { h } from "preact";

export function App() {
  return (
    <nav class="bg-gray-dark box-shadow-large d-flex mb-3 px-3 py-2">
      <svg class="mr-3" width="42px" height="31px" viewBox="0 0 126 94">
        <g
          id="Logo/Amplify-Logo-White"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g id="Group" fill="#ff9900">
            <path d="M27.4193646,78 L62.9093796,78 L72,94 L71.743892,94 L0,94 L25.2808604,50.192137 L35.8751825,31.8473288 L44.9710103,47.6084247 L27.4193646,78 Z M40.6554116,23.5512493 L49.3887526,8.41853699 L98.814466,93.9997425 L81.3108879,93.9997425 L40.6554116,23.5512493 Z M54.249635,0 L71.7299104,0 L126,94 L108.497716,94 L54.249635,0 Z" />
          </g>
        </g>
      </svg>

      <ol>
        <button class="btn mr-2">On-Call</button>
      </ol>
    </nav>
  );
}
