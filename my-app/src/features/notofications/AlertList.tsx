import { Alert } from "./Alert"
import { useAppSelector } from '../../app/hooks';
import { selectNotifications } from "./notificationSlice";

export function AlertList() {
    const alerts = useAppSelector(selectNotifications);

    return (
        <div>
            { alerts.map(alert => <Alert key={alert.id} type={alert.type} message={alert.message} />)}
        </div>
    )

}