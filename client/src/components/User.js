import React from "react";
import { Card, Image } from "semantic-ui-react";

const User = () => {
  return (
    <Card>
      <Image
        src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>firsname lastname</Card.Header>
        <p>E-mail:useremail</p>
      </Card.Content>
    </Card>
  );
};
export default User;
