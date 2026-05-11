import React from 'react';
import { cn } from '../../lib/cn';

export interface NeoTableColumn<T> {
  key: keyof T | string;
  header: React.ReactNode;
  className?: string;
  render?: (row: T) => React.ReactNode;
}

interface NeoTableProps<T> {
  columns: NeoTableColumn<T>[];
  rows: T[];
  className?: string;
  rowKey: (row: T, index: number) => string;
}

function NeoTable<T>({ columns, rows, className, rowKey }: NeoTableProps<T>) {
  return (
    <div className={cn('neo-table', className)}>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={String(column.key)} className={column.className}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={rowKey(row, index)}>
              {columns.map((column) => (
                <td key={String(column.key)} className={column.className}>
                  {column.render ? column.render(row) : String((row as Record<string, unknown>)[String(column.key)] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NeoTable;
