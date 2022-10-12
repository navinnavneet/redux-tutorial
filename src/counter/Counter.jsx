import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/action";
import styles from "./Counter.module.css";
import { Stack, Button, Box } from "@chakra-ui/react";

class Counter extends Component {
  render() {
    return (
      <Box p="1rem 2rem" className={styles.Counter}>
        <h1>{this.props.counter}</h1>
        <Stack
          spacing={4}
          direction="row"
          justifyContent="center"
          align="center"
        >
          <Button
            onClick={() => {
              this.props.increment();
            }}
            colorScheme="teal"
            size="sm"
          >
            Increment
          </Button>
          <Button
            onClick={() => {
              this.props.decrement();
            }}
            colorScheme="teal"
            size="sm"
          >
            Decrement
          </Button>
          <Button
            onClick={() => {
              this.props.increase(10);
            }}
            colorScheme="teal"
            size="sm"
          >
            Increase By 10
          </Button>
          <Button
            onClick={() => {
              this.props.decrease(10);
            }}
            colorScheme="teal"
            size="sm"
          >
            Decrease By 10
          </Button>
          <Button
            onClick={() => {
              this.props.slowIncrease(10);
            }}
            colorScheme="teal"
            size="sm"
          >
            Slow Increase By 10
          </Button>
          <Button
            onClick={() => {
              this.props.slowDecrease(10);
            }}
            colorScheme="teal"
            size="sm"
          >
            Slow Decrease By 10
          </Button>
        </Stack>
      </Box>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.countReducer.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(actions.increment()),
    decrement: () => dispatch(actions.decrement()),
    increase: (num) => dispatch(actions.increaseCount(num)),
    decrease: (num) => dispatch(actions.decreaseCount(num)),
    slowIncrease: (num) => dispatch(actions.slowIncrease(num)),
    slowDecrease: (num) => dispatch(actions.slowDecrease(num)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
