import { useState } from 'react';
import Control from './Control';
import AsyncSelect from 'react-select/async';
import axiosIntance from '../../../AxiosIntance';


const customStyles = {
  control: () => ({
    width: '100%',
    padding: '10px 30px',
    display: 'flex',
    borderRadius: '8px',
    boxShadow: '0px 4px 16px 8px rgb(237 237 237)',
  }),
};

function searchByCountry(props: any) {
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const loadOptions =  async (
    inputValue: string,
    ) => new Promise<any[]>((resolve) => {
    axiosIntance(`/name/${inputValue}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(
        (result) => resolve(result.data),
      )
  });

  const onchange = (e: any) => {
    props.onChange(e.name);
    setSelectedOption(e);
  }

  return (
    <div style={{
      position: 'relative',
      display: 'flex'
    }}>
      <Control/>
      <AsyncSelect
        id="search-country"
        placeholder="Search for a country"
        styles={customStyles}
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
