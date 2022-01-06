import {
  licenceMIT,
  licenceCC,
  editOnGitHub,
  seeABug,
} from "../../data/various";

export const FooterSmall = () => {
  return (
    <div className="remix-app__footer-content">
      <span className="emoji">💼</span> NPM packages are under {licenceMIT},
      website itself is {licenceCC} &mdash; {editOnGitHub} &mdash; {seeABug}
    </div>
  );
};
