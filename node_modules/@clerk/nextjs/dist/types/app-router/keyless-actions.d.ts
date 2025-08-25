import type { AccountlessApplication } from '@clerk/backend';
export declare function syncKeylessConfigAction(args: AccountlessApplication & {
    returnUrl: string;
}): Promise<void>;
export declare function createOrReadKeylessAction(): Promise<null | Omit<AccountlessApplication, 'secretKey'>>;
export declare function deleteKeylessAction(): Promise<void>;
//# sourceMappingURL=keyless-actions.d.ts.map