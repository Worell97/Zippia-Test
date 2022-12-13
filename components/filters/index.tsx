import { DateOption, FilterContainer, FilterItem, StyledInput } from "./styles";
import { Dispatch, SetStateAction } from "react";

interface FiltersProps {
  onChange: Dispatch<SetStateAction<{ companyName: string; lastSevenDays: boolean; }>>;
  filters: { companyName: string; lastSevenDays: boolean; }
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
        <StyledInput type={'text'} placeholder={'Company'} onChange={onCompanyChange} value={filters.companyName} />
      </FilterItem>
      <FilterItem>
        <h3>Date Posted</h3>
        <DateOption selected={filters.lastSevenDays} onClick={onLastSevenDaysChange} >Last 7 days</DateOption>
      </FilterItem>
    </FilterContainer>
  )
}