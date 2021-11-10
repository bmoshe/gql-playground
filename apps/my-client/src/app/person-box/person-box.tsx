import './person-box.module.scss';
import {useGetPersonQuery} from "../../../gen/graphql/react-types";

/* eslint-disable-next-line */
export interface PersonBoxProps {
  id: string;
}

export function PersonBox(props: PersonBoxProps) {
  const res = useGetPersonQuery({
    variables: {
      id: props.id
    },
    pollInterval: 5000,
  });

  return (
    <div>
      <h1>Hi, {res.data?.person.name}!</h1>
      <p>Your username is {res.data?.person.email}</p>
    </div>
  );
}

export default PersonBox;
