import { h } from "preact";
import { useEffect } from "preact/hooks";

import { useUserLogin } from "../hooks/useUserLogin";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "./Button";

const refresh = () => {
  window.sessionStorage.clear();
  window.location.reload();
};

export function Workflow() {
  useUserLogin();

  useEffect(() => {
    Array.from(
      document.querySelectorAll(
        '[role="banner"], .repohead, .js-pinned-issues-reorder-container, [role=search] + div, .protip, .footer'
      )
    ).map((element: HTMLElement) => {
      element.style.setProperty("display", "none", "important");
    });
  }, []);

  return (
    <div id="amplify-js-workflow" class="Header box-shadow-large mb-4">
      <div class="Header-item">
        <a
          href="https://github.com/aws-amplify/amplify-js/issues"
          class="Header-link f4 d-flex flex-items-center"
        >
          <svg class="mr-2" width="42px" height="31px" viewBox="0 0 126 94">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g fill="#ff9900">
                <path d="M27.4193646,78 L62.9093796,78 L72,94 L71.743892,94 L0,94 L25.2808604,50.192137 L35.8751825,31.8473288 L44.9710103,47.6084247 L27.4193646,78 Z M40.6554116,23.5512493 L49.3887526,8.41853699 L98.814466,93.9997425 L81.3108879,93.9997425 L40.6554116,23.5512493 Z M54.249635,0 L71.7299104,0 L126,94 L108.497716,94 L54.249635,0 Z" />
              </g>
            </g>
          </svg>
          <span>Amplify JS</span>
        </a>
      </div>
      <div class="Header-item Header-item--full">
        <ButtonGroup>
          <Button
            href="pulls"
            query="is:pr is:open sort:updated-desc review-requested:@me"
            tooltip="Pull Requests needing your attention"
          >
            Awaiting Review
          </Button>
          <Button
            href="pulls"
            query="is:pr is:open sort:updated-desc assignee:@me -author:@me"
            tooltip="Contributor Pull Requests relying on you"
          >
            Shepherd
          </Button>

          <Button
            href="pulls"
            query="is:pr is:open sort:updated-desc author:@me"
            tooltip="Your Pull Requests"
          >
            Finish
          </Button>

          <Button
            href="issues"
            query="is:issue is:open label:bug assignee:@me"
            tooltip="Priority bugs assigned to you"
          >
            Bugs
          </Button>
          <Button
            href="issues"
            query="is:issue is:open -label:bug assignee:@me"
            tooltip="Chores & Features assigned to you"
          >
            Features
          </Button>
          <Button
            href="issues"
            query="is:issue is:open no:assignee"
            tooltip="Prioritized issues without an owner"
          >
            Unassigned
          </Button>
        </ButtonGroup>
      </div>

      <div class="Header-item mr-0">
        <button
          aria-label="Clear storage & refresh the window"
          class="btn btn-octicon tooltipped tooltipped-sw"
          onClick={refresh}
        >
          <svg
            class="octicon octicon-sync octicon-danger"
            viewBox="0 0 12 16"
            version="1.1"
            width="12"
            height="16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10.24 7.4a4.15 4.15 0 01-1.2 3.6 4.346 4.346 0 01-5.41.54L4.8 10.4.5 9.8l.6 4.2 1.31-1.26c2.36 1.74 5.7 1.57 7.84-.54a5.876 5.876 0 001.74-4.46l-1.75-.34zM2.96 5a4.346 4.346 0 015.41-.54L7.2 5.6l4.3.6-.6-4.2-1.31 1.26c-2.36-1.74-5.7-1.57-7.85.54C.5 5.03-.06 6.65.01 8.26l1.75.35A4.17 4.17 0 012.96 5z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
