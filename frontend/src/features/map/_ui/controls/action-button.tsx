import { Button } from '@/shared/ui/button';

export const ActionButton = ({
    icon,
    title,
    onClick,
}: {
    icon: React.ReactNode;
    title: string;
    onClick: () => void;
}) => {
    return (
        <Button variant="ghost" size="icon" title={title} className="[&>svg]:w-5" onClick={onClick}>
            {icon}
        </Button>
    );
};
