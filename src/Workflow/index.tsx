import { h } from "preact";
import { useEffect } from "preact/hooks";

import { useUserLogin } from "../hooks/useUserLogin";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "./Button";

export function Workflow() {
  useUserLogin();

  useEffect(() => {
    Array.from(
      document.querySelectorAll(
        '[role="banner"], .repohead, .js-pinned-issues-reorder-container, [role=search] + div'
      )
    ).map((element: HTMLElement) => {
      element.style.setProperty("display", "none", "important");
    });
  }, []);

  return (
    <div class="Header box-shadow-large mb-4">
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
        </ButtonGroup>

        <div class="BtnGroup">
          <button class="btn BtnGroup-item btn-sm" type="button">
            Milestone Bugs
          </button>
          <button class="btn BtnGroup-item btn-sm" type="button">
            Milestone Features
          </button>
          <button class="btn BtnGroup-item btn-sm" type="button">
            Unassigned Issues
          </button>
        </div>
      </div>
      <div class="Header-item mr-0">
        <img
          class="avatar"
          height="20"
          alt="@octocat"
          src="https://github.com/octocat.png"
          width="20"
        />
      </div>
    </div>
  );

  return (
    // https://github.com/aws-amplify/amplify-js/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc
    <section class="bg-gray-dark box-shadow-large d-flex mb-3 px-3 py-2">
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

      <ul>
        <li>
          Triage
          <ol>
            <li>Unassigned Pull Requests</li>
            <li>Unprioritized Issues</li>
            <li>Questions & Feature Requests</li>
            <li>Discussions</li>
          </ol>
        </li>

        <li>
          Contributing
          <ol>
            <li>Review Pull Requests</li>
            <li>Milestone Bugs</li>
            <li>Milestone Features</li>
            <li>Unassigned Issues</li>
          </ol>
        </li>
      </ul>

      <nav aria-label="Breadcrumb">
        <ol>
          <li class="breadcrumb-item">
            <a href="https://github.com/business">Business</a>
          </li>
          <li class="breadcrumb-item">
            <a href="https://github.com/business/customers">Customers</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            MailChimp
          </li>
        </ol>
      </nav>
    </section>
  );
}
