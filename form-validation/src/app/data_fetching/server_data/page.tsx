const getData = async () => {
  const res = await fetch("https://api.quotable.io/random?tags=technology");
  if (!res.ok) {
    throw new Error("Could not get any Quote");
  }
  return res.json();
};

async function ServerDataFetching() {
  const quote = await getData();
  return (
    <center className="py-10 flex flex-col gap-5">
      <h1 className="text-2xl font-bold tracking-wide">
        Server Data Fetching.
      </h1>
      <div>
        <div>{quote.content}</div>
      </div>
    </center>
  );
}

export default ServerDataFetching;
