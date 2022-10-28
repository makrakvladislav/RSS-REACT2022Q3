import React, { memo } from 'react';
import ImagePlaceholder from 'components/UI/ImagePlaceholder/ImagePlaceholder';

export interface IFormCard {
  name: string;
  lastName: string;
  birthday: Date;
  email: string;
  avatar: string;
  country: string;
  agree: boolean;
  subscribe: boolean;
}

export interface IFormCardProps {
  item: IFormCard;
}

const FormCard = memo((props: IFormCardProps) => {
  return (
    <>
      <div className="card flex flex-col bg-white rounded-lg border border-gray-200 shadow-md">
        {props.item.avatar ? (
          <img
            src={`${props.item.avatar}`}
            className="w-full h-full max-h-60 rounded-t-lg object-cover"
            alt="Post img"
          />
        ) : (
          <ImagePlaceholder />
        )}

        <div className="flex flex-col p-5">
          <div className="mb-2">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              {props.item.name} {props.item.lastName}
            </h3>
            <span className="text-sm text-gray-600 italic">{props.item.country}</span>
          </div>
          <div className="block mb-2 text-xs italic text-gray-600">
            {props.item.birthday.toString()}
          </div>
          <div className="flex items-center m-b-5 text-sm text-gray-600">
            <span className="text-sm italic">{props.item.email}</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm">
              {props.item.subscribe ? 'Subscribed to newsletter' : 'NOT Subscribed to newsletter'}
            </span>
          </div>
        </div>
      </div>
    </>
  );
});

export default FormCard;
