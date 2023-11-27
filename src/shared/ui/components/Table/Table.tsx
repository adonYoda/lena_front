/* eslint-disable react/require-default-props */
import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import {
    StyledTable,
    TableBody,
    TableContainer,
    TableHeader,
    TableHeaderCell,
    TableRow,
} from "./styles";

interface TableProps {
    children: ReactNode;
    headersTitle?: string[];
    customHeader?: ReactNode;
}

const CustomTable: React.FC<TableProps> = ({
    headersTitle,
    children,
    ...props
}) => {
    const { t } = useTranslation("catalog");

    return (
        <TableContainer>
            <StyledTable>
                <TableHeader>
                    <TableRow>
                        {props?.customHeader
                            ? props?.customHeader
                            : headersTitle?.map(column => (
                                  <TableHeaderCell key={column} className="p-4">
                                      <h6 className="text-text-secondary">
                                          {t(column)}
                                      </h6>
                                  </TableHeaderCell>
                              ))}
                    </TableRow>
                </TableHeader>
                <TableBody>{children}</TableBody>
            </StyledTable>
        </TableContainer>
    );
};
export default CustomTable;
