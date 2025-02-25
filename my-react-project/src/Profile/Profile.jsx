import './Profile.css'

const Profile = ({ users }) => {


    const userList = users.map((v) => (
        <tr key={v.id}>
            {v.name ? (
                <td>{v.name}</td>
            ) : (<td style={{ color: "red" }}>Invalid Data</td>)}
            <td>{v.username}</td>
            <td>{v.email}</td>
            <td>{v.phone}</td>
            <td>{v.website}</td>
        </tr>
    ));

    return (
        <div>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>{userList}</tbody>
            </table>
        </div>
    )
}

export default Profile;