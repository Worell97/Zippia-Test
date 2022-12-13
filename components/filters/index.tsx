import { DateOption, FilterContainer, FilterItem, StyledInput } from "./styles";
import { Dispatch, SetStateAction } from "react";


interface Filter {
  companyName: string,
  lastSevenDays: boolean
  prevState: null
}

interface FiltersProps {
  onChange: Dispatch<SetStateAction<Filter | null>>;
  filters: Filter | null
}

export default function Filters({ onChange, filters }: FiltersProps) {
  function onCompanyChange(e: any) {
    e.preventDefault();
    onChange((prevState: any) => {
      return {
        ...prevState, companyName: e.target.value
      }
    })
  }

  function onLastSevenDaysChange(e: any) {
    e.preventDefault();
    onChange((prevState: any) => {
      return {
        ...prevState, lastSevenDays: !prevState.lastSevenDays
      }
    })
  }

  return (
    <FilterContainer>
      <FilterItem>
        <h3>Company Name</h3>
        <StyledInput type={'text'} placeholder={'Company'} onChange={onCompanyChange} value={filters?.companyName} />
      </FilterItem>
      <FilterItem>
        <h3>Date Posted</h3>
        <DateOption selected={filters?.lastSevenDays || false} onClick={onLastSevenDaysChange} >Last week</DateOption>
      </FilterItem>
    </FilterContainer>
  )
}