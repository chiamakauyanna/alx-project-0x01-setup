import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-500">@{username}</p>
      <p className="mt-2 text-gray-600">{email}</p>
      <p className="mt-2 text-gray-600">
        {address.street}, {address.suite}, {address.city} - {address.zipcode}
      </p>
      <p className="mt-2 text-gray-600">{phone}</p>
      <p className="mt-2 text-blue-500 underline">
        <a href={`https://${website}`} target="_blank" rel="noopener noreferrer">
          {website}
        </a>
      </p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Company</h3>
        <p className="text-gray-600">{company.name}</p>
        <p className="text-gray-500 italic">{company.catchPhrase}</p>
        <p className="text-gray-500">{company.bs}</p>
      </div>
    </div>
  );
};

export default UserCard;
