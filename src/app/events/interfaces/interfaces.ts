//Interfaz de events en billboard
export interface Event {
    id:          string;
    title:       string;
    subtitle:    string;
    image:       string;
    place:       string;
    startDate:   string;
    endDate:     string;
    description: string;
}

//Interfaz de event en event-detail
export interface EventDetail {
    event:    EventInfo;
    sessions: Session[];
}

export interface EventInfo {
    id:       string;
    title:    string;
    subtitle: string;
    image:    string;
}

export interface Session {
    date:         string;
    availability: string;
    eventId?:string;
}

//Interfaz para el carrito
export interface Cart {
    cartItems:  CartItems[];
}

//Interfaz para items del carrito
export interface CartItems {
    id:          string;
    title:       string;
    sessions:    CartSessions[];
}

//Interfaz de sesiones carrito
export interface CartSessions {
    date:               string;
    currentSelection:   number; 
}