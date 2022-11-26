export const getGroupKeys = async () => {
  try {
    const res = await fetch('http://localhost:5005/api/groups');
    return await res.json();
  } catch (e) {
    console.log(e);
  }
};
