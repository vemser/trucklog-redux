import styled from "styled-components";

export const SidenavContainer = styled.nav`
  .container {
    display: "flex";
    margin-left: 18rem;
    transition: margin-left 200ms;

    &.expanded {
      margin-left: 0;
    }
  }

  @media (max-width: 750px) {
    .container {
      margin-left: 0;
    }
  }
`;

export const SidenavContent = styled.nav`
  &.expanded {
    left: 0rem;
    transition: left 200ms;
  }

  position: absolute;
  left: -20rem;
  width: 20rem;
  height: 90vh;
  border-right: 2px solid ${(props) => props.theme["gray-100"]};
  background-color: #fff;
  z-index: 2;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 2rem;

  .category {
    font-size: 1.2rem;
    color: ${(props) => props.theme["gray-300"]};
  }

  .item {
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    font-weight: 700;
    width: 90%;
    padding: 1rem;
    cursor: pointer;
  }

  .item:hover {
    border-radius: 90rem;
    background-color: ${(props) => props.theme["gray-100"]};
    transition: background 200ms;
  }
  .item.active {
    border-radius: 90rem;
    background-color: ${(props) => props.theme["gray-100"]};
    transition: background 200ms;
  }
`;
