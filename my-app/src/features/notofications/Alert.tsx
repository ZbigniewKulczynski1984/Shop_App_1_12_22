export interface AlertProps {
    type: string;
    message: string;
}

export function Alert(props: AlertProps) {
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

    return (
        <div className={"alert " + getClassType(props.type)}>{props.message}</div>
    )
}