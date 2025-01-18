import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #007BFF;
  color: white;
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: left;
`;

const Table = ({ data }) => (
  <TableContainer>
    <thead>
      <TableRow>
        <TableHeader>Nama Anggota</TableHeader>
        <TableHeader>Usia</TableHeader>
        <TableHeader>Motor</TableHeader>
      </TableRow>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <TableRow key={index}>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.age}</TableCell>
          <TableCell>{item.motor}</TableCell>
        </TableRow>
      ))}
    </tbody>
  </TableContainer>
);

export default Table;
