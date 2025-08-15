// src/components/Icon.tsx
import { ArrowGoIcon } from "../assets/icons/ArrowGoIcon";
import { CalendarIcon } from "../assets/icons/CalendarIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";
import { HeartCircleIcon } from "../assets/icons/HeartCircleIcon";
import { HeartIcon } from "../assets/icons/HeartIcon";
import { HomeIcon } from "../assets/icons/HomeIcon";
import { LockIcon } from "../assets/icons/LockIcon";
import { LogoutIcon } from "../assets/icons/LogoutIcon";
import { NotificationIcon } from "../assets/icons/NotificationIcon";
import { StarIcon } from "../assets/icons/StarIcon";
import { TraIcon } from "../assets/icons/TraIcon";
import { UserIcon } from "../assets/icons/UserIcon";


const icons = {
    home: HomeIcon,
    lock: LockIcon,
    user: UserIcon,
    tra: TraIcon,
    close: CloseIcon,
    logout: LogoutIcon,
    calendar: CalendarIcon,
    star: StarIcon,
    heart: HeartIcon,
    notification: NotificationIcon,
    arrowGo: ArrowGoIcon,
    heartCircle: HeartCircleIcon,
};

export default function Icon({ name, size = 24, color = "#000" }) {
    const SvgIcon = icons[name];
    if (!SvgIcon) {
        console.warn(`Ícone "${name}" não encontrado`);
        return null;
    }
    return <SvgIcon size={size} color={color} />;
}
