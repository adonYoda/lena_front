import { styled } from "styled-components";

export const TableContainer = styled.div`
    width: 100%;
    border: 1px solid var(--divider-divider, rgba(0, 16, 61, 0.12));
    border-radius: 24px;
    overflow-y: auto;
    z-index: 0;
`;

export const StyledTable = styled.table`
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    border-radius: 24px;
    text-align: left;
    overflow: hidden;

    tbody {
        tr:last-child {
            th,
            td {
                /* background: red; */
                border-bottom: 0px;
            }
        }
    }

    th,
    td {
        border-bottom: 1px solid #00103d1f;
    }
`;

export const TableHeader = styled.thead`
    background: var(--background-bg, #f8f8f9);
`;

export const TableBody = styled.tbody`
    background-color: white;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #e0e0e0;
    }
`;

export const TableHeaderCell = styled.th`
    text-align: left;
    /* border-right: 1px solid #ddd; */

    &:last-child {
        border-right: 0px;
    }
`;
