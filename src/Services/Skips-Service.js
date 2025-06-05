import Api from "../Axios/Api";
const Skip_API="/skips/by-location?postcode=NR32&area=Lowestoft";

const fetchSkips=async()=>{
    return await Api.get(Skip_API);
}

export const SkipService={
    fetchSkips
}