import {
  editOnGitHub,
  seeABug,
  licenceMIT,
  licenceCC,
} from "../../data/various";
import { Link } from "../link";

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
          <Link to="https://remix.run/" external>
            Remix
          </Link>{" "}
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
          <Link to="https://indieweb.org/principles" external>
            Indieweb
          </Link>{" "}
          and{" "}
          <Link to="https://liberamanifesto.com/" external>
            Libera manifesto
          </Link>
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
