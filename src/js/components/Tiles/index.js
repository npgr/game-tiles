import React from 'react';
import { connect } from 'react-redux'
import { compose, withHandlers, withState, lifecycle } from 'recompose';
import styled from 'styled-components'
import times from 'lodash.times'
import { setStep } from '../../actions/user'
import { addStats } from '../../actions/stats'

const TilesContainer = styled.div`
  background-color: lightgray;
  border: 1px solid black;
`

const Tile = styled.div`
  display: inline-block;
  margin: 3px;
  background-color: ${({ color }) => color}; 
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

const mapStateToProps = ({ user: { user, steps } }) => ({ user, steps })
const mapDispatchToProps = { setStep, addStats }

const random = num => Math.round(Math.random() * num)
const totalTiles = steps => (steps + 1) * (steps + 1)

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('hsl1', 'setHSL1', 'hsl(0, 100%, 100%)'),
  withState('hsl2', 'setHSL2', 'hsl(0, 100%, 100%)'),
  withState('pos', 'setPos', 0),
  withHandlers({
    randomTiles: ({setHSL1, setHSL2, setPos, steps}) => () => {
      const hue = random(360)
      setHSL1(`hsl(${hue}, ${random(100)}%, ${random(100)}%)`)
      setHSL2(`hsl(${hue}, ${random(100)}%, ${random(100)}%)`)
      setPos(random(totalTiles(steps) - 1))
    },
    endGame: ({ user, steps, addStats }) => () => {
      addStats({ user, steps: steps - 1, new: true })
      window.location.href = '#/stats'
    }
  }),
  withHandlers({
    incrementStep: ({ steps, setStep, randomTiles }) => () => {
      setStep(steps + 1)
      randomTiles()
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.randomTiles()
    }
  })
);

const lineBreak = (i, steps) => {
  if (i === 0) return null
  const mod = (i + 1) % (steps + 1)
  return mod === 0 ? <br key={`${i}br`} /> : null
}

const calcSize = (tiles) => Math.round(window.innerHeight * 0.6 / tiles)

export default enhance(props => {
  return (<TilesContainer>
    {times(totalTiles(props.steps), (i) => (
      [
        <Tile
          key={i}
          color={i !== props.pos ? props.hsl1 : props.hsl2}
          size={`${calcSize(props.steps + 1)}px`}
          onClick={i === props.pos ? props.incrementStep : props.endGame}
        />,
        lineBreak(i, props.steps)
      ]
    ))}
  </TilesContainer>)
});
