import { useState } from 'react';
import Select from 'react-select';
import Control from './Control';
import AsyncSelect from 'react-select/async';



const customStyles = {
  control: () => ({
    width: 400,
    padding: '10px 0px',
    borderRadius: '8px',
    boxShadow: '0px 4px 16px 8px rgb(237 237 237)',
  }),
};

function searchByCountry(props: any) {
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const loadOptions =  async (
    inputValue: string,
    ) => new Promise<any[]>((resolve) => {
    fetch(`https://restcountries.com/v2/name/${inputValue}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res=> res.json())
      .then(
        (result) => resolve(result),
        (error) => resolve([])
    );
  });

  const onchange = (e: any) => {
    props.onChange(e.name);
    setSelectedOption(e);
  }

  return (
    <div>
      <AsyncSelect
        id="search-country"
        placeholder="search for a country"
        styles={customStyles}
        components={{Control}}
        cacheOptions
        loadOptions={loadOptions}
        defaultValue={selectedOption}
        defaultOptions={false}
        getOptionLabel={(option: any) => option.name}
        onChange={onchange}
      />
    </div>
  )
};

export default searchByCountry;
