import styled from 'styled-components';
import palette from '../../../styles/palette';
const { gray, green, purple90 } = palette;

export const ToggleContainer = styled.div`
  border-radius: 15px;
  background-color: ${gray.g1};
  display: flex;
  align-items: center;
  width: 40px;
  height: 24px;
  transition: all .3s;

  &:hover {
    transition: all .3s;
    cursor: pointer;
    circle {
      transition: all .3s;
      stroke: ${gray.g07};
    }
    
    background-color: ${gray.g07};
    &.toggle {
      
      &-default {}
      &.switch {
        &--green {
          &__disabled {
            cursor: default;
            background-color: ${gray.g0};
            circle {
              stroke: ${gray.g0};
            }
          }
        } 
      }
    }
  }

  &.toggle {
    transition: all .3s;
    &-default {}
    &.switch {
      &--green {
        &__on {
          background-color: ${purple90};
        }

        &__disabled {
          background-color: ${gray.g0};
          circle {
            stroke: ${gray.g0};
          }
        }
      }
    }
  }
`;