export default function UserDetails({
  params,
}: {
  params: { usersId: string };
}) {
  return <h1>details about user {params.usersId}</h1>;
}
