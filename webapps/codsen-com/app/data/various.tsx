import { IconNewTab } from "../components/svg/icon-new-tab";

const licenceMIT = (
  <>
    <a
      href="https://github.com/codsen/codsen/blob/main/LICENSE"
      rel="noreferrer"
      target="_blank"
    >
      MIT licence
      <IconNewTab />
    </a>
  </>
);

const licenceCC = (
  <>
    <a
      rel="noreferrer"
      target="_blank"
      href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
    >
      CC BY-NC-SA 4.0
      <IconNewTab />
    </a>
  </>
);

const editOnGitHub = (
  <>
    <span className="emoji">✍️</span>{" "}
    <a target="_blank" href="https://github.com/codsen/codsen" rel="noreferrer">
      Edit this page
      <IconNewTab />
    </a>{" "}
    on GitHub
  </>
);

const seeABug = (
  <>
    <span className="emoji">🐛</span> See a bug?{" "}
    <a
      target="_blank"
      href="https://github.com/codsen/codsen/issues/new/choose"
      rel="noreferrer"
    >
      Raise an issue
      <IconNewTab />
    </a>
  </>
);

export { licenceMIT, licenceCC, editOnGitHub, seeABug };
