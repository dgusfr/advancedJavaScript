async function fetchSequentialData() {
  const url1 = "https://api.coindesk.com/v1/bpi/currentprice.json";
  const url2 = "https://api.spacexdata.com/v4/launches/latest";
  const url3 = "https://api.exchangerate-api.com/v4/latest/USD";

  try {
    const data1 = await fetchData(url1);
    console.log("Data 1:", data1);

    const data2 = await fetchData(url2);
    console.log("Data 2:", data2);

    const data3 = await fetchData(url3);
    console.log("Data 3:", data3);
  } catch (error) {
    console.error(`Error in fetching sequential data: ${error}`);
  }
}

fetchSequentialData();
