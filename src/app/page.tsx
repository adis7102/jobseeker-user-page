import axios from "axios";

export default async function Home() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      {JSON.stringify(response.data)}
    </div>
  );
}
