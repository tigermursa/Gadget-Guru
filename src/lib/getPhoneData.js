const getPhoneData = async () => {
    const res = await fetch("http://localhost:5000/api/v1/phone/get");
    return await res.json();
  };
  
  export default getPhoneData;
