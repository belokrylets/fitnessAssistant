import { useTypeSelector } from "../../hooks/useTypeSelector";

const Profile = () => {

    const { name, surname, age } = useTypeSelector(state => state.personalCabinet.user)

    return (
        <div>
            <h5>Профиль</h5>
            <p>
                {name} {surname}<br />
                Возраст: {age}
            </p>
        </div>
    );
}

export default Profile;