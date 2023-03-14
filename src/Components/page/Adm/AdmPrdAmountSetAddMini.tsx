import React, { useState } from 'react';

const AdmPrdAmountSetAddMini = () => {
  const [formdata,setFormData]=useState({
    pa_size: "",
    pa_color: "",
    pa_amount: "0"
  })
  return (
    <tr>
      <td><input type="text" value={formdata.pa_size} /></td>
      <td><input type="text" value={formdata.pa_color}/></td>
      <td className='amount-box' colSpan={2}>
        <input type="text" value={formdata.pa_amount}/>
        <span>EA</span>
      </td>
      <td>
      </td>
      
    </tr>
  );
};

export default AdmPrdAmountSetAddMini;