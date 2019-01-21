import React from 'react';
import { compose, withState, withHandlers, lifecycle } from 'recompose';

//import { ActionBar, Container } from './styles'

const enhance = compose(
  withState('position', 'setPos', 'relative'),
  // withHandlers({
  //   isTop: ({ setPos }) => () => {
  //     const { top } = ref && ref.getBoundingClientRect()
  //     top && setPos(top <= 0 ? 'fixed' : 'relative')
  //   },
  // }),
  lifecycle({
    componentDidMount() {
      window.addEventListener('scroll', this.props.isTop)
    },
    componentWillUnmount() {
      window.removeEventListener('scroll', this.props.isTop)
    }
  })
);

export default enhance(props => (
  <div>
    Welcome
  </div>
));
