import { useState } from 'react';
import Select from 'react-select'

const customStyles = {
  control: () => ({
    width: '100%',
    padding: '10px 0px',
    display: 'flex',
    borderRadius: '8px',
    boxShadow: '0px 4px 16px 8px rgb(237 237 237)',
  }),
};

const searchByRegion = (props: any) => {
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'Americas' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
  ];

  const onchange = (e: any) => {
    props.onChange(e);
  }

  return (
    <div>
      <Select
        id="search-region"
        styles={customStyles}
        placeholder="Filter by Region"
        defaultValue={selectedOption}
        onChange={onchange}
        options={options}
      />
    </div>
  )
};

export default searchByRegion;
