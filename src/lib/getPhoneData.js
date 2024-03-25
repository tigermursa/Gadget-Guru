const getPhoneData = async () => {
  const res = await fetch("http://localhost:5000/api/v1/phone/get", {
    cache: "force-cache",
  });
  return await res.json();
};

export default getPhoneData;
