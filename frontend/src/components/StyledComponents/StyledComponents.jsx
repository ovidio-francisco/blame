import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    margin-left: 10px;
    text-decoration: none;
    color: #007BFF;

    &:hover {
        color: #0056b3;
    }
`;

export const StyledButton = styled.button`
    margin-left: 10px;
    margin-right: 6px;
    padding: 8px 16px;
    border: none;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        background-color: #0056b3;
    }
`;

