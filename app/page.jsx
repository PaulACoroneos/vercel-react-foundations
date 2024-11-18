import { LikeButton } from "../components/like-button";

function Header({ title }) {
  return <h1>{title}</h1>;
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return <div>
    <Header title="Preview. Deploy. Ship" />
    <ul>
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
    <LikeButton />
  </div>
}
