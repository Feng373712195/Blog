import React from 'react'
import { render } from 'react-dom'
import App from './app'

import dayjs from 'dayjs'

dayjs.locale('zh-cn')

render(<App/>, document.getElementById('app'))
