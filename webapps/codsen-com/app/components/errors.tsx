import errorStack from "error-stack-parser";

function ErrorContainer({ error }: { error: Error }) {
  const errors = errorStack.parse(error);
  return (
    <div>
      {errors.map((singleError) => (
        <div
          key={[
            singleError.fileName,
            singleError.lineNumber,
            singleError.columnNumber,
          ].join("-")}
        >
          <h2>{singleError.functionName}</h2>
          <div>
            {singleError.fileName}:{singleError.lineNumber}:
            {singleError.columnNumber}
          </div>
        </div>
      ))}
    </div>
  );
}

function ErrorPage({
  error,
  errorCode,
  message,
}: {
  error?: Error;
  errorCode: string;
  message: string;
}) {
  return (
    <div>
      {error}
      <br />
      {error &&
      (typeof window === "undefined"
        ? process.env.NODE_ENV === "development"
        : window.ENV.NODE_ENV === "development") ? (
        <ErrorContainer error={error} />
      ) : null}
    </div>
  );
}

function ServerError({ error }: { error?: Error }) {
  return (
    <ErrorPage
      error={error}
      errorCode="500"
      message="Oops! Something went wrong."
    />
  );
}

// TODO: 401 - Oops! Looks like you tried to visit a page that you do not have access to.

function FourZeroFour({ error }: { error?: Error }) {
  return (
    <ErrorPage
      error={error}
      errorCode="404"
      message="Oops! Looks like you tried to visit a page that does not exist."
    />
  );
}

export { ErrorPage, ServerError, FourZeroFour };
