import {createCookieSessionStorage} from 'remix'
import {createThemeSessionResolver} from 'remix-themes'
import {getRequiredServerEnvVar} from './misc'

export const themeSessionResolver = createThemeSessionResolver(
  createCookieSessionStorage({
    cookie: {
      name: 'codsen_com_theme',
      secure: true,
      sameSite: 'lax',
      secrets: [getRequiredServerEnvVar('SESSION_SECRET')],
      path: '/',
      expires: new Date('2100-01-01'),
      httpOnly: true,
    },
  }),
)
