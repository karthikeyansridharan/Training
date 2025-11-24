// Component prop types
export interface LogoProps {
    src: string;
    className?: string;
    onClick?: () => void;
    alt?: string;
}

export interface ButtonProps {
    className?: string;
    name: string | React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

export interface InputProps {
    style?: {
        div?: string;
        label?: string;
        input?: string;
    };
    name: string;
    htmlFor: string;
    type: string;
    placeholder: string;
    register: any; 
    errors: any; 
}

export interface CarouselLineProps {
    style?: string;
}

export interface LocationMenuProps {
    style?: React.CSSProperties;
    forNav?: boolean;
}

export interface ReportGasProps {
    style?: React.CSSProperties;
}

export interface HamMenuProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (value: boolean) => void;
}

export interface HomeNavProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (value: boolean) => void;
}

// Card and Cost Breakdown types
export interface Card {
    name: string;
    number: string;
    cardCvv: number;
    cardValidity: string;
    cardName: string;
    preferred: boolean;
}

export interface CostCategory {
    usage: string;
    amount: number;
    increase: boolean;
    difference: number;
    image: string;
}

export interface MonthData {
    amount: number;
    due?: string;
    watts: number;
    saved?: number;
    costBreakdown?: CostCategory[];
}

// User Store Data Structure
export interface UserStoreData {
    name: string;
    profile: string;
    accNo: string;
    email: string;
    address: string;
    cards: Card[];
    currMonth: MonthData;
    prevMonth: {
        amount: number;
        watts: number;
    };
}

// Zustand Store Interface
export interface UserStore {
    userData: UserStoreData;
    setUserData: (data: UserStoreData) => void;
    addCard: (newCard: Card) => void;
}

// Modal Store Interface
export interface ModalStore {
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
}

// User Context types
export interface UserContextValue {
    current: any;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
}

export interface UserProviderProps {
    children: React.ReactNode;
}

// Legacy types (for backward compatibility)
export interface UserData {
    name: string;
    email: string;
    address: string;
    phone: string;
    accountNumber: string;
    profilePicture: string;
    bills: Bill[];
    paymentMethods: PaymentMethod[];
    energyUsage: EnergyUsage;
    achievements: Achievement[];
}

export interface Bill {
    id: string;
    month: string;
    amount: number;
    dueDate: string;
    status: 'paid' | 'pending' | 'overdue';
    usage: number;
    costBreakdown: CostBreakdown;
}

export interface CostBreakdown {
    categories: Category[];
}

export interface Category {
    name: string;
    cost: number;
    icon: string;
    color: string;
}

export interface PaymentMethod {
    id: string;
    type: 'card' | 'bank';
    last4: string;
    expiryDate?: string;
    cardType?: string;
}

export interface EnergyUsage {
    current: number;
    previous: number;
    trend: 'up' | 'down' | 'stable';
    ghgEmission: number;
    neighbourhoodAverage: number;
}

export interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: string;
    unlocked: boolean;
}

