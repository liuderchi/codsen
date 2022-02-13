function getEnv() {
  return {
    FLY: process.env.FLY,
    NODE_ENV: process.env.NODE_ENV,
    PRIMARY_REGION: process.env.PRIMARY_REGION,
  }
}

type ENV = ReturnType<typeof getEnv>

// App global scope
declare global {
  var ENV: ENV
  interface Window {
    ENV: ENV
  }
}

export { getEnv }