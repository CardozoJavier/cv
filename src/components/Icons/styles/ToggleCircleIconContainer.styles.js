import styled from 'styled-components';
import palette from '../../../styles/palette';
import { SVGContainer } from '.';
const { green, purple90 } = palette;

export default styled(SVGContainer)`
  transition: all .3s;

  &.toggle {
    &-default {

    }

    &.switch {
      &--green, &--red, &--blue, &--yellow {
        &__on {
          transform: translateX(19px);
        }

        &__off {
          transform: translateX(3px);
        }
      }

      &--green {
        &__on {
          circle {
            stroke: ${purple90};
          }
        }
      }
    }
  }
`;