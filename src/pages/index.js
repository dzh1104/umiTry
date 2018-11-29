/**
 * title: Index Page
 * Routes:
 *   - ./src/routes/PrivateRoute.js
 *   - ./src/routes/a.js
 *   - ./src/routes/b.js
 */

//  umi 的权限路由是通过配置路由的 Routes 属性来实现

// https://umijs.org/zh/

import Breakcrumbs from '../components/Breakcrumbs'
import Link from 'umi/link'
import styles from './index.css'

export default function () {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <Breakcrumbs />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li><a href='https://umijs.org/guide/getting-started.html'>Getting Started</a></li>
      </ul>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <p>index</p>
      <Link to='/list'>Go to list page</Link>
      <p>index</p>
      <p>index</p>
      <Breakcrumbs />
      <p>index</p>
      <p>index</p>
      <p>index</p>
    </div>
  )
}
