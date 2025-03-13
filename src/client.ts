import { Edwin, EdwinConfig } from "edwin-sdk";

// Static variable to hold the singleton instance
let edwinRunningInstance: Edwin | null = null;

export async function getEdwinClient(): Promise<Edwin> {
    // If instance exists, return it
    if (edwinRunningInstance) {
        return edwinRunningInstance;
    }
    // Otherwise create new instance
    const edwinConfig: EdwinConfig = {
        evmPrivateKey: process.env.EVM_PRIVATE_KEY as `0x${string}`,
        solanaPrivateKey: process.env.SOLANA_PRIVATE_KEY as string,
    };

    edwinRunningInstance = new Edwin(edwinConfig);
    return edwinRunningInstance;
}