import {
  editOnGitHub,
  seeABug,
  licenceMIT,
  licenceCC,
} from "../../data/various";
import { IconNewTab } from "../svg/icon-new-tab";

export const FooterBig = () => {
  return (
    <>
      <section>
        <h3 className="h4">Codsen the company</h3>
        <p>
          UK Companies&nbsp;House assigned Codsen Ltd a&nbsp;number #9204532
          back on Friday, September 5th,&nbsp;2014.
          <span id="agePlaceholder" role="timer">
            {" "}
            That makes Codsen 7&nbsp;years, 3&nbsp;months and
            24&nbsp;days&nbsp;old.
          </span>
        </p>
        <h3 className="h4">Trivia</h3>
        <p>
          This website was built with{" "}
          <a rel="noreferrer" target="_blank" href="https://remix.run/">
            Remix
            <IconNewTab />
          </a>{" "}
          framework. See&nbsp;more in <a href="/about/trivia/">Trivia</a>{" "}
          section.
        </p>
        <h3 className="h4">Cookies</h3>
        <p>This website doesn&rsquo;t use tracking cookies.</p>
      </section>
      <section>
        <h3 className="h4">Activities</h3>
        <p>
          {editOnGitHub}
          <br />
          {seeABug}
          <br />
          <span className="emoji">💘</span> Check out the{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://indieweb.org/principles"
          >
            Indieweb
            <IconNewTab />
          </a>{" "}
          and{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://liberamanifesto.com/"
          >
            Libera manifesto
            <IconNewTab />
          </a>
          <br />
        </p>
        <h3 className="h4">Licences</h3>
        <p>
          See licences of all 3rd-party bits{" "}
          <a title="3rd-party licences" href="/about/licences/">
            here
          </a>
          .<br />
          All our <a href="/os/">open source</a> packages are under {licenceMIT}
          .<br />
          The rest on this website is under {licenceCC}.
        </p>
      </section>
    </>
  );
};
