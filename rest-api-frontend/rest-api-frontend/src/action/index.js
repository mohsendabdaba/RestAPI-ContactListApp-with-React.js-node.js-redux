export const getList = payload => {
  console.log(payload, "payload");
  return {
    type: "GET_LIST",
    payload
  };
};
