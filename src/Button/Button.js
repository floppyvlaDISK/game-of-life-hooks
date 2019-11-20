import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.secondary ? 'violet' : 'tomato'};
  border-radius: 3px;
  border: none;
  color: white;
  padding: 10px 25px;
  font-size: 20px;
  margin: 10px;
`;

export default Button;