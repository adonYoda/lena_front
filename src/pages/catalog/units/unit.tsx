import React,  { FormEvent, useState } from 'react';
import Button from 'ui/components/Button';
import Input from 'ui/components/Input/Input';
import { useUnitsMutate } from "hooks/queries";
import { useRouter } from "next/router";
import { useTokenStore } from "stores/tokenStore";


 interface Props {
   id: number | null;
   oldName: string;
   oldShortName: string;
 }

const Unit: React.FC<Props> = ({id, oldName, oldShortName}: Props) => {
  const {token} = useTokenStore();
  const [name, setName] = useState<string>(oldName);
  const [shortName, setShortName] = useState<string>(oldShortName);
  const router = useRouter();
  const {mutate: updateUnit} = useUnitsMutate(token, id, name, shortName);

  const submit: React.FormEventHandler<HTMLFormElement> = (event: FormEvent) => {
    event.preventDefault();
    if (name && shortName) {
      updateUnit();
      router.push("/catalog/units");
    }
  };

return (
  <>
			<div className="w-[100%] flex-col flex justify-start items-start xxl:mb-12 xl:mb-10 lg:mb-6 md:mb-6 sm:mb-6">
				<h1>Edit unit</h1>
			</div>
    
    <form onSubmit={submit}
      className="flex flex-col gap-12 xl:gap-10 lg:gap-6 xxl:mb-16 xl:mb-10 lg:mb-10 md:mb-10 sm:mb-10 w-100"
    >
      {id}
      <Input
        label='Name'
        name='unitName'
          value={name}
          type='mail'
          disabled={false}
          autofocus={false}
          setValue={(value: string) => {
          setName(value);
        }}
      />
      <br/>
      <Input
        label='Short Name'
        name='unitShortName'
        type='mail'
        disabled={false}
        value={shortName}
        autofocus={false}
        setValue={(value: string) => {
          setShortName(value);
        }}
      />
      	<div className="flex flex-col w-[100%]">
					<Button
            disabled={false}
            submit
					>OK
					</Button>
				</div>

  </form>
  </>
);

};

export default Unit;