import { keyframes } from "styled-components";

export const styledKeyframes = {
  gradient: keyframes`
    0% { background-position: 0% 50%; }
	  50% { background-position: 100% 50%; }
	  100% { background-position: 0% 50%; }
  `,
};
