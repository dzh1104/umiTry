import { PureComponent } from 'react'
import withRouter from 'umi/withRouter'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styles from './index.css'

class BasicLayout extends PureComponent {
  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    const { location, children } = this.props
    return (
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames='fade' timeout={300}>
          <div className={styles.normal}>
            <h1 className={styles.title}>Yay! Welcome to umi!</h1>
            { children }
          </div>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

export default withRouter(BasicLayout)
