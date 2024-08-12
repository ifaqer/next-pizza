import React from 'react';
import { Input } from '../ui';
import {FilterChecboxProps} from './filter-checkbox'

type Item = FilterChecboxProps

interface Props {
    title: string,
    items: Item[],
    defaultItems?: Item[],
    limit?: number,
    searchInputPlaceholder?: string,
    onChange?: (values: string[])=>void,
    defaultValue?: string[],
    className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  onChange,
  defaultValue,
  className
}) => {
  return (
    <div className={className}>
      <Input placeholder={searchInputPlaceholder} className="bg-gray-50 border-none"/>
      fe
    </div>
  );
};