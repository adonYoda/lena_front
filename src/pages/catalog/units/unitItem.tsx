import React from "react";
import { Link, ListItem } from "@mui/material";
import { IUnit } from "types/waresTypes";

const UnitItem = ({ id, name, shortName }: IUnit) => 
    <ListItem>
      <Link href={`/catalog/units/${id}`} >
        {id}
        </Link> {  name} {   shortName}
    </ListItem>

export default UnitItem;