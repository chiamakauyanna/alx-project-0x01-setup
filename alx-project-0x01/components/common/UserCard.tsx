import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">{username}</p>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">{phone}</p>
      <p className="text-gray-600">{website}</p>
      <div className="mt-4">
        <h3 className="font-semibold">Address:</h3>
        <p>{address.suite}, {address.street}, {address.city}, {address.zipcode}</p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Company:</h3>
        <p>{company.name} - {company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
