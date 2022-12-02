import { Alert } from "./Alert"
import { useAppSelector } from '../../app/hooks';
import { selectNotifications } from "./notificationsSlice";

export function AlertList() {
    const alerts = useAppSelector(selectNotifications);

    return (
        <div>
            { alerts.map(alert => <Alert type={alert.type} message={alert.message} />)}
        </div>
    )

}