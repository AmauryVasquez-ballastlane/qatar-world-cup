export const getGroup = async (key: string) => {
  try {
    const url = `http://localhost:5005/api/group/${key}/`;
    const teams = await fetch(url + 'teams').then(
      async (res) => await res.json()
    );
    const matches = await fetch(url + 'matches').then(
      async (res) => await res.json()
    );
    return { groupName: key, teams, matches };
  } catch (e) {
    console.log(e);
  }
};
