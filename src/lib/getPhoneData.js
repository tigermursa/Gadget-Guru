const getPhoneData = async () => {
  const res = await fetch("http://localhost:5000/api/v1/phone/get", {
    next: {
      revalidate: 3000,
    },
  });
  return await res.json();
};

export default getPhoneData;

// const res = await fetch("http://localhost:5000/api/v1/specialties", {
//   //     next: {
//   //       revalidate: 9000,
//   //     },
//   //   });
