import React from 'react'
import { useState,useEffect } from 'react';
import { SkipService } from '../Services/Skips-Service';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';




// const SelectSkip = ({ onSelectPrice }) => {
//   const [skips,setSkips]=useState([]);
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   useEffect(()=>{
//     GetListSkips()
    
//   },[]);
//   const GetListSkips=async()=>{
//     await SkipService.fetchSkips()
//     .then(res=>{
//       setSkips(res.data);
//       console.log(res.data)
//     })
//   }
 
//   return (
//     <>
//     <h2 className='title-select-skip text-center mb-4'>Choose Your Skip Size</h2>
//     <h5 className='text-select text-center mb-5'>Select the skip size that best suits your needs</h5>
//     <div className='container'>
//         <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"center"}}>
//           {
//             skips.map((skip,ind)=>{
//               const isSelected = selectedIndex === ind;
//               return <Card
//         key={ind}
//         sx={{
//           width: 320,
//           border: isSelected ? '2px solid blue' : '2px solid #ddd',
//           boxSizing: 'border-box',
//           cursor: 'pointer'
//         }}
//         className="pointer me-3 mb-3"
//         onClick={() => {
//     setSelectedIndex(ind);
    
//   }}
//       >
//       <div className='text-center'>
//         <Typography level="title-lg">{skip.size} yards skip</Typography>
//         <Typography level="body-sm">{skip.hire_period_days} day hire period</Typography>
//         {/* <IconButton
//           aria-label="bookmark Bahamas Islands"
//           variant="plain"
//           color="neutral"
//           size="sm"
//           sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
//         >
//           <BookmarkAdd />
//         </IconButton> */}
//       </div>
//       <AspectRatio minHeight="120px" maxHeight="200px">
//         <img
//           src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"
          
//           loading="lazy"
//           alt=""
//         />
//       </AspectRatio>
//       <CardContent orientation="horizontal">
//         <div>
//           <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>£{skip.price_before_vat}</Typography>
//         </div>
//         <Button
//           variant="solid"
//           size="md"
//           color="primary"
//           aria-label="Explore Bahamas Islands"
//           sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600, minWidth: 130 }}
//         >
//           {isSelected ? 'Selected' : 'Select this skip'}
//         </Button>
//       </CardContent>
//     </Card>
//             })
//           }


// </div>

//     </div>
    


//     </>
    
//   )
// }

// export default SelectSkip

const SelectSkip = ({ onSelectSkip }) => {
  const [skips, setSkips] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    GetListSkips();
  }, []);

  const GetListSkips = async () => {
    await SkipService.fetchSkips().then((res) => {
      setSkips(res.data);
    });
  };

  const handleSelectSkip = (skip, index) => {
    setSelectedIndex(index);
    if (onSelectSkip) {
      onSelectSkip(skip);
    }
  };

  return (
    <>
      <h2 className='title-select-skip text-center mb-4'>Choose Your Skip Size</h2>
      <h5 className='text-select text-center mb-5'>Select the skip size that best suits your needs</h5>
      <div className='container'>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {skips.map((skip, ind) => {
            const isSelected = selectedIndex === ind;
            return (
              <Card
                key={ind}
                sx={{
                  width: 320,
                  border: isSelected ? "2px solid blue" : "2px solid #ddd",
                  cursor: "pointer"
                }}
                className="pointer me-3 mb-3"
                onClick={() => handleSelectSkip(skip, ind)}
              >
                <div className='text-center'>
                  <Typography level="title-lg">{skip.size} yards skip</Typography>
                  <Typography level="body-sm">{skip.hire_period_days} day hire period</Typography>
                </div>
                <AspectRatio minHeight="120px" maxHeight="200px">
                  <img
                    src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
                <CardContent orientation="horizontal">
                  <div>
                    <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>
                      £{skip.price_before_vat}
                    </Typography>
                  </div>
                  <Button
                    variant="solid"
                    size="md"
                    color="primary"
                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600, minWidth: 130 }}
                  >
                    {isSelected ? 'Selected' : 'Select this skip'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SelectSkip;
