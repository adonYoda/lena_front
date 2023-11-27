import React from "react";
import { useUnitsQuery } from "hooks/queries";
import { List } from "@mui/material";
import { IUnit } from "types/waresTypes";
import { useTokenStore } from "stores/tokenStore";
import UnitItem from "./unitItem";

const Units = () => {
  const {token} = useTokenStore();
  const { data, isLoading, isSuccess } = useUnitsQuery(token);
  if (isLoading)
    return (
      <div>is loading ...</div>
    );
  return (
    <List>
      {isSuccess && data.data.map((unit: IUnit) => <UnitItem key={unit.id} {...unit} />)}
    </List>
  );
};
export default Units;