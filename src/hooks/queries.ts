import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { IUnit } from "types/waresTypes";

const useUnitsQuery=(token: string|null) => 
    useQuery({
        queryKey: ["units"],
        staleTime: 5 * 60 * 1000,
        queryFn: () =>
        axios.get<IUnit[]>(
            `${process.env.NEXT_PUBLIC_API_ACCOUNTING_URL}/getWareEntities?type=UNITS`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
      )
    });


const useUnitQuery = (token: string | null, id: number) => 
    useQuery({
        queryKey: ["unit", id],
        staleTime: 5 * 60 * 1000,
        queryFn: () => 
        axios.get<IUnit>(
            `${process.env.NEXT_PUBLIC_API_ACCOUNTING_URL}/getUnit?id=${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
      )
    });




const useUnitsMutate = (token: string | null, id: number | null, name: string, shortName: string) => {
    const client = useQueryClient();

    return useMutation({
        mutationKey: ["unitMutation"],
        mutationFn: () => axios.post<IUnit>(
            `${process.env.NEXT_PUBLIC_API_ACCOUNTING_URL}/updateUnit`,
            {
                id: `${id}`,
                name: `${name}`,
                shortName: `${shortName}`
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        ).then((res) => res.data),
        onSuccess: () => {
            client.invalidateQueries({queryKey: ['units']});
            client.invalidateQueries({queryKey: ['unit', id]});
        }
    });
}

export {useUnitsMutate, useUnitsQuery, useUnitQuery};