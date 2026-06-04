import "./Dashboard.css";

type DashboardProps = {
    username: string | null;
}

export const Dashboard = ({ username }: DashboardProps) => {
    return (
        <div>
            {username ? (
                <h1>Bem-vindo, {username}!</h1>
            ) : (
                <h2 className="not-logged">Você precisa fazer Login</h2>
            )}
        </div>
    )
}