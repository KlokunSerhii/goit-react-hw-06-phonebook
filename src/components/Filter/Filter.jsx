import PropTypes from 'prop-types';
import { HiSearch } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from 'redux/filters/sliceFilters';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handlerFilter = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <Label>
      <HiSearch />
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handlerFilter}
      />
    </Label>
  );
};
Filter.prototype = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Filter;
