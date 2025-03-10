import type { Provider, IAgentRuntime } from "@elizaos/core";
import { getEdwinClient } from "./client";

export const edwinProvider: Provider = {
    async get(runtime: IAgentRuntime): Promise<string | null> {
        try {
            const edwin = await getEdwinClient();
            return edwin.getPortfolio();
        } catch (error) {
            console.error("Error in Edwin provider:", error);
            return null;
        }
    },
};
