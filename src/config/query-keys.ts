export const queryKeys = {
    envios: {
        all: ["envios"] as const,
        list: (estado?: string) => ["envios", "lista", estado ?? "todos"] as const,
        mine: (estado?: string) => ["envios", "mios", estado ?? "todos"] as const,
        tome: (estado?: string) => ["envios", "a-mi", estado ?? "todos"] as const,
        detail: (id: string) => ["envios", "detalle", id] as const,
    },
    repartidores: {
        all: ["repartidores"] as const,
        list: (estado?: string) => ["repartidores", "lista", estado ?? "todos"] as const,
        me: ["repartidor-actual"] as const,
        detail: (id: string) => ["repartidores", "detalle", id] as const,
    },
    usuarios: {
        all: ["usuarios"] as const,
        list: (rol?: string) => ["usuarios", "lista", rol ?? "todos"] as const,
        me: ["usuario-actual"] as const,
        detail: (id: string) => ["usuarios", "detalle", id] as const,
    }
}