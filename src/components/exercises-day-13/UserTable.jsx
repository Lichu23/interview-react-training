import { useState } from "react";

export default function UserTable() {
  const mockUsers = [
    { id: 1, name: "Ana", email: "ana@example.com" },
    { id: 2, name: "Carlos", email: "carlos@example.com" },
    { id: 3, name: "Bea", email: "bea@example.com" },
    { id: 4, name: "David", email: "david@example.com" },
    { id: 5, name: "Eva", email: "eva@example.com" },
    { id: 6, name: "Fernando", email: "fernando@example.com" },
    { id: 7, name: "Gabriela", email: "gabriela@example.com" },
    { id: 8, name: "Hugo", email: "hugo@example.com" },
    { id: 9, name: "Isabel", email: "isabel@example.com" },
    { id: 10, name: "Jorge", email: "jorge@example.com" },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  console.log(currentPage);

  const showUsers = 3;

  const totalPage = Math.ceil(mockUsers.length / showUsers);
  console.log(`TOtalpage: ${totalPage}`)
  const startIndex = currentPage * showUsers;
  const endIndex = startIndex + showUsers;

  const displayedUsers = mockUsers.slice(startIndex, endIndex)


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {displayedUsers.map((user) => (
            <tr key={user.id}>
              <th>{user.name}</th>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        disabled={currentPage === 0}
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        prev
      </button>
      <button
        disabled={currentPage >= totalPage - 1}
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        next
      </button>
    </div>
  );
}
