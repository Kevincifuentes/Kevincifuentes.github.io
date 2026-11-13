import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Diagram as DiagramKind } from '../../../content/profile';

@Component({
  selector: 'app-diagram',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @switch (kind()) {
      @case ('fallback') {
        <svg
          viewBox="0 0 340 132"
          role="img"
          aria-label="A merchant sends a payment to the core, which routes it to one of three gateways and retries on failure"
        >
          <g class="line">
            <rect x="1" y="44" width="66" height="34" />
            <rect x="125" y="34" width="84" height="54" />
            <rect x="272" y="8" width="66" height="26" />
            <rect x="272" y="53" width="66" height="26" />
            <rect x="272" y="98" width="66" height="26" />
            <path d="M67 61h58" />
            <path d="M209 48h40v-8h23" />
            <path d="M209 61h63" />
            <path d="M209 74h40v11h23" />
          </g>
          <path class="accent-stroke dashed" d="M305 111c0 14-96 14-96-3" />
          <text x="10" y="64">MERCHANT</text>
          <text x="139" y="64">CORE</text>
          <text x="280" y="25">GW-1</text>
          <text x="280" y="70">GW-2</text>
          <text x="280" y="115">GW-3</text>
          <text class="accent-fill" x="214" y="94">RETRY</text>
        </svg>
      }
      @case ('monolith') {
        <svg
          viewBox="0 0 340 132"
          role="img"
          aria-label="Traffic moving from a monolith to two services behind a feature flag service"
        >
          <g class="line">
            <rect x="6" y="46" width="74" height="40" />
            <rect x="176" y="14" width="74" height="30" />
            <rect x="176" y="86" width="74" height="30" />
            <rect x="284" y="46" width="50" height="40" />
            <path d="M80 66h40" />
            <path d="M120 66V29h56" />
            <path d="M120 66v35h56" />
            <path d="M250 29h14v22h20" />
            <path d="M250 101h14V67h20" />
          </g>
          <text x="13" y="70">MONOLITH</text>
          <text x="184" y="32">SVC-A</text>
          <text x="184" y="104">SVC-B</text>
          <text x="289" y="70">FLAGS</text>
          <path class="accent-stroke" d="M84 110h100" />
          <text class="accent-fill" x="84" y="124">$10k LESS A MONTH</text>
        </svg>
      }
      @case ('teams') {
        <svg
          viewBox="0 0 340 132"
          role="img"
          aria-label="Seven teams across three countries feeding one platform"
        >
          <g class="line">
            <rect x="126" y="46" width="92" height="40" />
            <path d="M126 54l-56-24" />
            <path d="M126 62l-62-8" />
            <path d="M126 74l-62 14" />
            <path d="M126 82l-56 26" />
            <path d="M218 54l56-24" />
            <path d="M218 62l62-8" />
            <path d="M218 74l62 14" />
          </g>
          <g class="node">
            <circle cx="64" cy="26" r="2.4" />
            <circle cx="56" cy="52" r="2.4" />
            <circle cx="56" cy="92" r="2.4" />
            <circle cx="70" cy="112" r="2.4" />
            <circle cx="280" cy="26" r="2.4" />
            <circle cx="288" cy="52" r="2.4" />
            <circle cx="288" cy="92" r="2.4" />
          </g>
          <text x="139" y="70">PLATFORM</text>
          <text x="4" y="128">7 TEAMS, 3 COUNTRIES</text>
        </svg>
      }
    }
  `,
  styles: `
    :host {
      display: block;
      color: var(--muted);
    }
    svg {
      display: block;
      width: 100%;
      height: auto;
    }
    .line {
      fill: none;
      stroke: currentColor;
      stroke-width: 1;
    }
    text {
      font-family: var(--font-mono);
      font-size: 9.5px;
      letter-spacing: 0.06em;
      fill: currentColor;
    }
    .accent-fill {
      fill: var(--accent);
    }
    .accent-stroke {
      fill: none;
      stroke: var(--accent);
      stroke-width: 1;
    }
    .dashed {
      stroke-dasharray: 3 3;
    }
    .node {
      fill: currentColor;
    }
  `,
})
export class Diagram {
  readonly kind = input.required<DiagramKind>();
}
