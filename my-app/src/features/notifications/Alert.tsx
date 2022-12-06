import { useAppDispatch } from '../../app/hooks';
import { removeNotification } from "./notificationSlice";

export interface AlertProps {
    type: string;
    message: string;
    id: string;
}

export function Alert(props: AlertProps) {
    const dispatch = useAppDispatch();

    const getClassType = (type: string): string => {
        switch (type) {
            case 'success':
                return "alert-success";
            case 'info':
                return "alert-info";
            case 'warning':
                return "alert-warning";
            case 'error':
                return 'alert-danger';
            default:
                return 'alert-dark';
        }
    }

    const handleRemoveClick = (id: string) => {
        dispatch(removeNotification({ id }));
    }

    return (
        <div className={"alert alert-dismissible " + getClassType(props.type)}>
            <strong>{props.message}</strong>
            <button type="button" className="btn-close" aria-label="Close" onClick={() => handleRemoveClick(props.id)}></button>
        </div>
    )
}